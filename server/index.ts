import bcrypt from "bcryptjs";
import cors from "cors";
import { eq } from "drizzle-orm";
import express, { type NextFunction, type Request, type Response } from "express";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import { db } from "./db/index.js";
import { contacts, users } from "./db/schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const JWT_SECRET = process.env.JWT_SECRET ?? "change-me-in-production";
const BCRYPT_ROUNDS = 12;

function signToken(userId: number, email: string): string {
  return jwt.sign({ sub: userId, email }, JWT_SECRET, { expiresIn: "7d" });
}

/** Middleware — verifies Bearer JWT and attaches decoded payload to req.user */
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid Authorization header" });
    return;
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET) as {
      sub: number;
      email: string;
    };
    (req as Request & { user: typeof payload }).user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Token expired or invalid" });
  }
}

// ---------------------------------------------------------------------------
// Server bootstrap
// ---------------------------------------------------------------------------

async function startServer() {
  const app = express();
  const server = createServer(app);

  // ── Global middleware ────────────────────────────────────────────────────
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ?? "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ── Contact form ─────────────────────────────────────────────────────────

  /**
   * POST /api/contact
   * Body: { name, email, message, company?, service? }
   * Persists the submission and returns the saved record.
   */
  app.post("/api/contact", async (req: Request, res: Response) => {
    const { name, email, message, company, service } = req.body as {
      name?: string;
      email?: string;
      message?: string;
      company?: string;
      service?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      res.status(400).json({ error: "name, email, and message are required" });
      return;
    }

    try {
      const [contact] = await db
        .insert(contacts)
        .values({ name: name.trim(), email: email.trim(), message: message.trim(), company, service })
        .returning();

      res.status(201).json({ success: true, contact });
    } catch (err) {
      console.error("[POST /api/contact]", err);
      res.status(500).json({ error: "Failed to save contact submission" });
    }
  });

  // ── Auth — register ───────────────────────────────────────────────────────

  /**
   * POST /api/auth/register
   * Body: { email, password }
   * Creates a new user account and returns a signed JWT.
   */
  app.post("/api/auth/register", async (req: Request, res: Response) => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email?.trim() || !password) {
      res.status(400).json({ error: "email and password are required" });
      return;
    }
    if (password.length < 8) {
      res.status(400).json({ error: "password must be at least 8 characters" });
      return;
    }

    try {
      const existing = await db.select().from(users).where(eq(users.email, email.trim())).limit(1);
      if (existing.length > 0) {
        res.status(409).json({ error: "An account with that email already exists" });
        return;
      }

      const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
      const [user] = await db
        .insert(users)
        .values({ email: email.trim(), passwordHash })
        .returning({ id: users.id, email: users.email, createdAt: users.createdAt });

      const token = signToken(user.id, user.email);
      res.status(201).json({ token, user });
    } catch (err) {
      console.error("[POST /api/auth/register]", err);
      res.status(500).json({ error: "Registration failed" });
    }
  });

  // ── Auth — login ──────────────────────────────────────────────────────────

  /**
   * POST /api/auth/login
   * Body: { email, password }
   * Validates credentials and returns a signed JWT.
   */
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email?.trim() || !password) {
      res.status(400).json({ error: "email and password are required" });
      return;
    }

    try {
      const [user] = await db.select().from(users).where(eq(users.email, email.trim())).limit(1);
      if (!user) {
        // Constant-time response to avoid user enumeration
        await bcrypt.hash("dummy", BCRYPT_ROUNDS);
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }

      const valid = await bcrypt.compare(password, user.passwordHash);
      if (!valid) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }

      const token = signToken(user.id, user.email);
      res.json({
        token,
        user: { id: user.id, email: user.email, createdAt: user.createdAt },
      });
    } catch (err) {
      console.error("[POST /api/auth/login]", err);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // ── Auth — current user ───────────────────────────────────────────────────

  /**
   * GET /api/auth/me
   * Header: Authorization: Bearer <token>
   * Returns the authenticated user's profile.
   */
  app.get("/api/auth/me", requireAuth, async (req: Request, res: Response) => {
    const { sub } = (req as Request & { user: { sub: number; email: string } }).user;

    try {
      const [user] = await db
        .select({ id: users.id, email: users.email, createdAt: users.createdAt })
        .from(users)
        .where(eq(users.id, sub))
        .limit(1);

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.json({ user });
    } catch (err) {
      console.error("[GET /api/auth/me]", err);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  // ── Static files & client-side routing ───────────────────────────────────

  const staticPath = path.resolve(__dirname, "..", "dist");

  app.use(express.static(path.join(staticPath, "public")));

  // All non-API routes fall through to the React SPA
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "public", "index.html"));
  });

  // ── Start ─────────────────────────────────────────────────────────────────

  const port = process.env.PORT || 5000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
