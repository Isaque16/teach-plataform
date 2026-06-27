import { boolean, integer, numeric, pgTable, primaryKey, serial, text } from 'drizzle-orm/pg-core'
import { users } from './users'
import { relations } from 'drizzle-orm'
import { reviews } from './reviews'
import { subjects } from './subjects'

export const teacherProfiles = pgTable('teacher_profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),
  hourlyRate: numeric('hourly_rate', { precision: 10, scale: 2 }).notNull(),
  bioVideoUrl: text('bio_video_url'),
  isVerified: boolean('is_verified').default(false).notNull(),
  averageRating: numeric('average_rating', { precision: 3, scale: 2 }).default(
    '0.00'
  ),
})

export const teacherSubjects = pgTable(
  'teacher_subjects',
  {
    teacherId: integer('teacher_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    subjectId: integer('subject_id')
      .references(() => subjects.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.teacherId, table.subjectId] }),
  })
)

export const teacherProfilesRelations = relations(
  teacherProfiles,
  ({ one, many }) => ({
    user: one(users, {
      fields: [teacherProfiles.userId],
      references: [users.id],
    }),
    subjects: many(teacherSubjects),
    reviews: many(reviews),
  })
)

export const teacherSubjectsRelations = relations(
  teacherSubjects,
  ({ one }) => ({
    teacherProfile: one(teacherProfiles, {
      fields: [teacherSubjects.teacherId],
      references: [teacherProfiles.userId],
    }),
    subject: one(subjects, {
      fields: [teacherSubjects.subjectId],
      references: [subjects.id],
    }),
  })
)