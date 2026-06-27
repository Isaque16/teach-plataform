import { beforeAll, beforeEach, describe, expect, it } from 'bun:test'
import app from '../../server'
import db from '../../../db/connection'
import { sql } from 'drizzle-orm'
import { users } from '../../../db/schema/users'
import { profiles } from '../../../db/schema/profiles'
import { teacherProfiles } from '../../../db/schema/teachers'

const BASE_URL = 'http://localhost/api/teachers'

describe('Teachers Router', () => {
  let sharedTeacherUser: any
  let sharedTeacherProfile: any

  beforeAll(async () => {
    try {
      await db.execute(sql`TRUNCATE TABLE users, teacher_profiles RESTART IDENTITY CASCADE;`);
    } catch (error) {
      console.error("❌ Falha ao preparar o banco de dados para os testes:", error);
      throw error;
    }
  });

  beforeEach(async () => {
    await db.execute(sql`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`);

    // Cria o usuário
    const [teacherUser] = await db.insert(users).values({
      email: 'exemple@gmail.com',
      passwordHash: '123',
      role: 'teacher',
    }).returning()

    await db.insert(profiles).values({
      userId: teacherUser.id,
      firstName: 'John',
      lastName: 'Doe',
      avatarUrl: 'https://avatar.com/john',
      bio: 'Professor experiente de matemática.',
    })

    const [teacherProfile] = await db.insert(teacherProfiles).values({
      userId: teacherUser.id,
      hourlyRate: '20',
      bioVideoUrl: 'https://youtube.com/watch?v=123',
      isVerified: true,
      averageRating: '2',
    }).returning()

    sharedTeacherUser = teacherUser
    sharedTeacherProfile = teacherProfile
  })

  it('should return a list of teachers', async () => {
    const request = new Request(BASE_URL)
    const response = await app.handle(request)

    expect(response.status).toBe(200)

    const data = await response.json()
    expect(Array.isArray(data)).toBe(true)
    console.log("Retorno da API na listagem:", data)
    expect(data.length).toBe(1)
  })

  it('should return a specific teacher with id', async () => {
    const request = new Request(`${BASE_URL}/${sharedTeacherUser.id}`)
    const response = await app.handle(request)

    expect(response.status).toBe(200)
  })

  it('should return 404 when teacher does not exist', async () => {
    const request = new Request(`${BASE_URL}/9999`)
    const response = await app.handle(request)

    expect(response.status).toBe(404)

    const { message } = await response.json()
    expect(message).toBe('Professor não encontrado')
  })

  it('should create a new teacher profile', async () => {
    const [newUser] = await db.insert(users).values({
      email: 'new_teacher@gmail.com',
      passwordHash: '123',
      role: 'teacher',
    }).returning()

    const request = new Request(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: newUser.id,
        hourlyRate: 50.00,
        bioVideoUrl: 'https://youtube.com/watch?v=123'
      }),
    })

    const response = await app.handle(request)
    expect(response.status).toBe(201)

    const { message, data } = await response.json()
    expect(message).toBe('Professor criado com sucesso')
    expect(data).toHaveProperty('id')
  })

  it('should update a teacher profile', async () => {
    const request = new Request(`${BASE_URL}/${sharedTeacherUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: sharedTeacherUser.id,
        hourlyRate: 60.00,
        bioVideoUrl: 'https://youtube.com/watch?v=changed'
      })
    })

    const response = await app.handle(request)
    expect(response.status).toBe(200)
  })

  it('should delete a teacher profile', async () => {
    const request = new Request(`${BASE_URL}/${sharedTeacherUser.id}`, {
      method: 'DELETE'
    })

    const response = await app.handle(request)
    expect(response.status).toBe(204)
  })
})
