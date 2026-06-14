import {
  pgTable, serial, text, varchar, integer,
  timestamp, numeric, pgEnum, boolean, time, primaryKey
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const roleEnum = pgEnum('user_role', ['student', 'teacher', 'admin']);
export const bookingStatusEnum = pgEnum('booking_status', ['pending', 'confirmed', 'canceled', 'completed']);
export const proficiencyEnum = pgEnum('language_proficiency', ['native', 'fluent', 'intermediate', 'basic']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: roleEnum('role').default('student').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull().unique(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  avatarUrl: text('avatar_url'),
  timezone: varchar('timezone', { length: 100 }).default('UTC').notNull(), // Ex: 'America/Sao_Paulo'
  bio: text('bio'),
});

export const teacherProfiles = pgTable('teacher_profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull().unique(),
  hourlyRate: numeric('hourly_rate', { precision: 10, scale: 2 }).notNull(), // Suporte a moedas
  bioVideoUrl: text('bio_video_url'),
  isVerified: boolean('is_verified').default(false).notNull(),
  averageRating: numeric('average_rating', { precision: 3, scale: 2 }).default('0.00'),
});

export const subjects = pgTable('subjects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
});

export const teacherSubjects = pgTable('teacher_subjects', {
  teacherId: integer('teacher_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  subjectId: integer('subject_id').references(() => subjects.id, { onDelete: 'cascade' }).notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.teacherId, table.subjectId] }),
}));

export const availabilities = pgTable('availabilities', {
  id: serial('id').primaryKey(),
  teacherId: integer('teacher_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  dayOfWeek: integer('day_of_week').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').references(() => users.id).notNull(),
  teacherId: integer('teacher_id').references(() => users.id).notNull(),
  subjectId: integer('subject_id').references(() => subjects.id).notNull(),
  startAt: timestamp('start_at', { withTimezone: true }).notNull(), // Sempre persistido com fuso/UTC
  endAt: timestamp('end_at', { withTimezone: true }).notNull(),
  status: bookingStatusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  bookingId: integer('booking_id').references(() => bookings.id, { onDelete: 'cascade' }).notNull().unique(),
  studentId: integer('student_id').references(() => users.id).notNull(),
  teacherId: integer('teacher_id').references(() => users.id).notNull(),
  rating: integer('rating').notNull(), // 1 a 5
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
