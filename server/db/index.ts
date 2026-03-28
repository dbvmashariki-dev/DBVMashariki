import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema.js";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is required. " +
      "Set it to a valid PostgreSQL connection string, e.g. " +
      "postgresql://user:password@host:5432/dbname"
  );
}

// Shared connection pool — reused across all requests.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Keep a small pool; scale up via DATABASE_URL pooler (e.g. PgBouncer) if needed.
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

export const db = drizzle(pool, { schema });

export { pool };
