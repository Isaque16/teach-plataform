import { integer, pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { users } from './users'

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  avatarUrl: text('avatar_url'),
  timezone: varchar('timezone', { length: 100 }).default('UTC').notNull(),
  bio: text('bio'),
})
