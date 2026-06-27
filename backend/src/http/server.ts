import 'dotenv/config'
import { Elysia } from 'elysia'
import { publicTeachers } from './routes/teachers'

const app = new Elysia({ prefix: '/api' })
  .use(publicTeachers)
  .get('/', () => 'Hello Elysia')
  .listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export default app
