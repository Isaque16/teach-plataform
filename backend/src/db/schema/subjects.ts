import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const subjects = pgTable('subjects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
})