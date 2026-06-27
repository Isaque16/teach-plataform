import { integer, pgEnum, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'
import { users } from './users'

import { subjects } from './subjects'

export const bookingStatusEnum = pgEnum('booking_status', [
  'pending',
  'confirmed',
  'canceled',
  'completed',
])

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id')
    .references(() => users.id)
    .notNull(),
  teacherId: integer('teacher_id')
    .references(() => users.id)
    .notNull(),
  subjectId: integer('subject_id')
    .references(() => subjects.id)
    .notNull(),
  startAt: timestamp('start_at', { withTimezone: true }).notNull(),
  endAt: timestamp('end_at', { withTimezone: true }).notNull(),
  status: bookingStatusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
