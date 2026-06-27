import { Elysia, t } from 'elysia'
import db from '../../db/connection'
import { and, eq, lte } from 'drizzle-orm'
import { users } from '../../db/schema/users'
import { profiles } from '../../db/schema/profiles'
import { teacherProfiles, teacherSubjects } from '../../db/schema/teachers'
import { subjects } from '../../db/schema/subjects'

export const publicTeachers = new Elysia({ prefix: '/teachers' })
  .onError(({ code, error }) => {
    if (code === 'NOT_FOUND') return error
  })

  .get(
    '',
      ({ query }) => {
      const { subject, maxPrice } = query

      let queryBuilder = db
      .selectDistinctOn([teacherProfiles.id], {
        id: teacherProfiles.id,
        userId: teacherProfiles.userId,
        firstName: profiles.firstName,
        lastName: profiles.lastName,
        avatarUrl: profiles.avatarUrl,
        bio: profiles.bio,
        hourlyRate: teacherProfiles.hourlyRate,
        averageRating: teacherProfiles.averageRating,
      })
      .from(teacherProfiles)
      .innerJoin(users, eq(teacherProfiles.userId, users.id))
      .innerJoin(profiles, eq(users.id, profiles.userId))
      .leftJoin(teacherSubjects, eq(teacherProfiles.userId, teacherSubjects.teacherId))
      .leftJoin(subjects, eq(teacherSubjects.subjectId, subjects.id))
      .$dynamic()

    const conditions = []

    if (maxPrice) {
      conditions.push(lte(teacherProfiles.hourlyRate, maxPrice.toString()))
    }

    if (subject) {
      conditions.push(eq(subjects.slug, subject))
    }

    if (conditions.length > 0) {
      queryBuilder = queryBuilder.where(and(...conditions))
    }

    return queryBuilder
    },
    {
      query: t.Object({
        subject: t.Optional(t.String()),
        maxPrice: t.Optional(t.Numeric()),
      }),
    }
  )

  .get(
    '/:id',
    async ({ params, status }) => {
      const { id: teacherId } = params

      const teacher = await db.query.teacherProfiles.findFirst({
        where: eq(teacherProfiles.id, teacherId),
        with: {
          user: {
            with: {
              profile: true,
            },
          },
          subjects: {
            with: {
              subject: true,
            },
          },
          reviews: {
            with: {
              studentProfile: {
                columns: {
                  firstName: true,
                  lastName: true,
                  avatarUrl: true,
                },
              },
            },
          },
        },
      })

      if (!teacher) {
        throw status(404, { message: 'Professor não encontrado' })
      }

      return {
        id: teacher.id,
        userId: teacher.userId,
        firstName: teacher.user.profile?.firstName,
        lastName: teacher.user.profile?.lastName,
        avatarUrl: teacher.user.profile?.avatarUrl,
        bio: teacher.user.profile?.bio,
        timezone: teacher.user.profile?.timezone,
        hourlyRate: teacher.hourlyRate,
        bioVideoUrl: teacher.bioVideoUrl,
        averageRating: teacher.averageRating,
        subjects: teacher.subjects.map((ts) => ({
          id: ts.subject.id,
          name: ts.subject.name,
          slug: ts.subject.slug,
        })),
        reviews: teacher.reviews.map((rev) => ({
          id: rev.id,
          rating: rev.rating,
          comment: rev.comment,
          createdAt: rev.createdAt,
          student: rev.studentProfile,
        })),
      }
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  )

  .post(
    '',
    async ({ body, status }) => {
      try {
        const [newTeacher] = await db
          .insert(teacherProfiles)
          .values({
            userId: body.userId,
            hourlyRate: body.hourlyRate.toString(),
            bioVideoUrl: body.bioVideoUrl,
          })
          .returning()

        return status(201, { message: 'Professor criado com sucesso', data: newTeacher })
      } catch {
        return status(400, {
          message: 'Erro ao criar professor. Verifique se o userId existe.',
        })
      }
    },
    {
      body: t.Object({
        userId: t.Number(),
        hourlyRate: t.Number(),
        bioVideoUrl: t.Optional(t.String()),
      }),
    }
  )

  .put(
    '/:id',
    async ({ params, body, status }) => {
      const [updatedTeacher] = await db
        .update(teacherProfiles)
        .set({
          hourlyRate: body.hourlyRate ? body.hourlyRate.toString() : undefined,
          bioVideoUrl: body.bioVideoUrl,
        })
        .where(eq(teacherProfiles.id, params.id))
        .returning()

      if (!updatedTeacher) {
        return status(404, {
          message: 'Professor não encontrado para atualização',
        })
      }

      return {
        message: 'Professor atualizado com sucesso',
        data: updatedTeacher,
      }
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
      body: t.Object({
        hourlyRate: t.Optional(t.Number()),
        bioVideoUrl: t.Optional(t.String()),
      }),
    }
  )

  .delete(
    '/:id',
    async ({ params, status }) => {
      const [deletedTeacher] = await db
        .delete(teacherProfiles)
        .where(eq(teacherProfiles.id, params.id))
        .returning()

      if (!deletedTeacher) {
        return status(404, 'Professor não encontrado')
      }

      return status(204)
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  )
