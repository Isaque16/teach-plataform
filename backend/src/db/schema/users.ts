import { pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { profiles } from './profiles'
import { teacherProfiles } from './teachers'

export const roleEnum = pgEnum('user_role', ['student', 'teacher', 'admin'])

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: roleEnum('role').default('student').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, { fields: [users.id], references: [profiles.userId] }),
  teacherProfile: one(teacherProfiles, {
    fields: [users.id],
    references: [teacherProfiles.userId],
  }),
}))
