import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type PostType = "news" | "announcement";

export type Post = {
  id: string;
  type: PostType;
  title: string;
  body: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type Faq = {
  id: string;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

let publicClient: SupabaseClient | null = null;

/**
 * Client-safe Supabase client using the public (anon/publishable) key.
 * Only ever reads publicly-readable rows (RLS enforced).
 */
export function getSupabasePublicClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (!publicClient) {
    publicClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return publicClient;
}

/**
 * Server-only Supabase client using the service role (secret) key.
 * Bypasses RLS — never import this from a Client Component.
 */
export function getSupabaseAdminClient(): SupabaseClient {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    throw new Error(
      "Supabase admin client requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }
  return createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });
}

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}
