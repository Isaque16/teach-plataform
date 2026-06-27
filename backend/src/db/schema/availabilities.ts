import { integer, pgTable, serial, time } from 'drizzle-orm/pg-core'
import { users } from './users'

export const availabilities = pgTable('availabilities', {
  id: serial('id').primaryKey(),
  teacherId: integer('teacher_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  dayOfWeek: integer('day_of_week').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
})