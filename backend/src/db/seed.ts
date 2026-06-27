import db from './connection'
import { sql } from 'drizzle-orm'
import { users } from './schema/users'
import { profiles } from './schema/profiles'
import { teacherProfiles, teacherSubjects } from './schema/teachers'
import { subjects } from './schema/subjects'

async function main() {
  console.log('🌱 Iniciando o processo de seeding...')

  // 1. LIMPAR O BANCO DE DADOS (Inverte a ordem das FKs para evitar errors de restrição)
  console.log('🧹 Limpando dados antigos...')
  await db.delete(teacherSubjects)
  await db.delete(teacherProfiles)
  await db.delete(profiles)
  await db.delete(users)
  await db.delete(subjects)

  // Reinicia as sequências dos IDs auto-incrementais (serial)
  await db.execute(sql`ALTER SEQUENCE users_id_seq RESTART WITH 1`)
  await db.execute(sql`ALTER SEQUENCE profiles_id_seq RESTART WITH 1`)
  await db.execute(sql`ALTER SEQUENCE teacher_profiles_id_seq RESTART WITH 1`)
  await db.execute(sql`ALTER SEQUENCE subjects_id_seq RESTART WITH 1`)

  // 2. POPULAR MATÉRIAS (Subjects)
  console.log('📚 Inserindo matérias...')
  const insertedSubjects = await db
    .insert(subjects)
    .values([
      { name: 'JavaScript & TypeScript', slug: 'javascript-typescript' },
      { name: 'Cálculo Avançado', slug: 'calculo-avancado' },
      { name: 'Inglês para Negócios', slug: 'ingles-negocios' },
      { name: 'Design de Interface (UI/UX)', slug: 'ui-ux-design' },
      { name: 'Física Quântica', slug: 'fisica-quantica' },
    ])
    .returning()

  // 3. POPULAR USUÁRIOS E PERFIS
  console.log('👤 Inserindo usuários e perfis...')

  // Dados falsos organizados para o laço
  const mockUsers = [
    {
      email: 'alex.teacher@teach.com',
      role: 'teacher' as const,
      firstName: 'Alex',
      lastName: 'Rivera',
      timezone: 'America/New_York',
      bio: 'Engenheiro de Software Sênior ex-Google. Apaixonado por ensinar desenvolvimento web moderno.',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      hourlyRate: '45.00',
      subjectsIdx: [0, 3], // Ensina JS e UI/UX
    },
    {
      email: 'elena.math@teach.com',
      role: 'teacher' as const,
      firstName: 'Elena',
      lastName: 'Rostova',
      timezone: 'Europe/London',
      bio: 'PhD em Matemática Aplicada pela Oxford. Faço conceitos complexos parecerem brincadeira de criança.',
      avatarUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      hourlyRate: '60.00',
      subjectsIdx: [1, 4], // Ensina Cálculo e Física
    },
    {
      email: 'john.english@teach.com',
      role: 'teacher' as const,
      firstName: 'John',
      lastName: 'Smith',
      timezone: 'America/Sao_Paulo',
      bio: 'Nativo de Chicago morando no Brasil. Especialista em preparar executivos para entrevistas e pitchings internacionais.',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      hourlyRate: '35.00',
      subjectsIdx: [2], // Ensina Inglês
    },
    {
      email: 'lucas.aluno@gmail.com',
      role: 'student' as const,
      firstName: 'Lucas',
      lastName: 'Silva',
      timezone: 'America/Sao_Paulo',
      bio: 'Estudante de engenharia buscando transição de carreira.',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      hourlyRate: '0.00',
      subjectsIdx: [],
    },
  ]

  for (const mock of mockUsers) {
    // Insere na tabela de Usuários (Autenticação)
    const [user] = await db
      .insert(users)
      .values({
        email: mock.email,
        passwordHash: '$2b$10$SomethingSecretHash', // Mock de hash de senha
        role: mock.role,
      })
      .returning()

    // Insere na tabela de Perfis Básicos
    await db.insert(profiles).values({
      userId: user.id,
      firstName: mock.firstName,
      lastName: mock.lastName,
      avatarUrl: mock.avatarUrl,
      timezone: mock.timezone,
      bio: mock.bio,
    })

    // Se o usuário for um professor, popula as tabelas específicas de professor
    if (user.role === 'teacher') {
      await db.insert(teacherProfiles).values({
        userId: user.id,
        hourlyRate: mock.hourlyRate,
        isVerified: true,
        averageRating: '4.90',
      })

      // Vincula o professor às matérias correspondentes (Tabela N:N)
      for (const idx of mock.subjectsIdx) {
        await db.insert(teacherSubjects).values({
          teacherId: user.id,
          subjectId: insertedSubjects[idx].id,
        })
      }
    }
  }

  console.log('✨ Banco de dados populado com sucesso!')
  process.exit(0)
}

main().catch((err) => {
  console.error('❌ Erro durante o seeding:', err)
  process.exit(1)
})
