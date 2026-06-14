import 'dotenv/config';
import { Elysia } from "elysia";
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

const app = new Elysia().get("/", () => "Hello Elysia").listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
