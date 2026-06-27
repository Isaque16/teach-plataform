import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { bookings } from './bookings'
import { users } from './users'
import { relations } from 'drizzle-orm'
import { teacherProfiles } from './teachers'
import { profiles } from './profiles'

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  bookingId: integer('booking_id')
    .references(() => bookings.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),
  studentId: integer('student_id')
    .references(() => users.id)
    .notNull(),
  teacherId: integer('teacher_id')
    .references(() => users.id)
    .notNull(),
  rating: integer('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const reviewsRelations = relations(reviews, ({ one }) => ({
  teacher: one(teacherProfiles, {
    fields: [reviews.teacherId],
    references: [teacherProfiles.userId],
  }),
  studentProfile: one(profiles, {
    fields: [reviews.studentId],
    references: [profiles.userId],
  }),
}))