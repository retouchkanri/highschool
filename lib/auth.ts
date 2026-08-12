/**
 * Lightweight signed-cookie session for the /admin area.
 * Uses the Web Crypto API so it works in both the Edge middleware runtime
 * and regular Node.js API routes without extra dependencies.
 */

export const ADMIN_SESSION_COOKIE = "bajigaku_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours, in seconds

type SessionPayload = { email: string; exp: number };

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "Missing ADMIN_SESSION_SECRET environment variable. Add one to .env.local."
    );
  }
  return secret;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(value: string): Uint8Array {
  const padLength = (4 - (value.length % 4)) % 4;
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(padLength);
  const binary = atob(padded);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

async function hmacSign(message: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return new Uint8Array(signature);
}

/** Creates a signed, expiring session token for the given admin email. */
export async function createSessionToken(email: string): Promise<string> {
  const payload: SessionPayload = {
    email,
    exp: Date.now() + ADMIN_SESSION_MAX_AGE * 1000,
  };
  const payloadB64 = bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const signature = await hmacSign(payloadB64);
  return `${payloadB64}.${bytesToBase64Url(signature)}`;
}

/** Verifies a session token's signature and expiry. Returns the payload if valid. */
export async function verifySessionToken(
  token: string | undefined | null
): Promise<SessionPayload | null> {
  if (!token) return null;
  const [payloadB64, sigB64] = token.split(".");
  if (!payloadB64 || !sigB64) return null;

  try {
    const expectedSig = bytesToBase64Url(await hmacSign(payloadB64));
    if (expectedSig !== sigB64) return null;

    const payload = JSON.parse(
      new TextDecoder().decode(base64UrlToBytes(payloadB64))
    ) as SessionPayload;

    if (typeof payload.exp !== "number" || Date.now() > payload.exp) return null;
    if (typeof payload.email !== "string" || !payload.email) return null;

    return payload;
  } catch {
    return null;
  }
}

/** Checks a submitted email/password pair against the admin credentials in env. */
export function verifyAdminCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) return false;
  return email === adminEmail && password === adminPassword;
}

/**
 * Verifies the admin session cookie on an incoming API request.
 * Use at the top of every /api/admin/** route handler as defense-in-depth
 * alongside the middleware page-level redirect.
 */
export async function requireAdminSession(
  request: Request
): Promise<SessionPayload | null> {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`));
  const token = match ? decodeURIComponent(match.slice(ADMIN_SESSION_COOKIE.length + 1)) : null;
  return verifySessionToken(token);
}
