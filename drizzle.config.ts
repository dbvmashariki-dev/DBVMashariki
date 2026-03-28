import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required for drizzle-kit");
}

export default defineConfig({
  // Path to the schema file(s) — drizzle-kit reads these to generate migrations
  schema: "./server/db/schema.ts",

  // Output directory for generated SQL migration files
  out: "./server/db/migrations",

  dialect: "postgresql",

  dbCredentials: {
    url: process.env.DATABASE_URL,
  },

  // Emit verbose output during generation / migration
  verbose: true,
  strict: true,
});
