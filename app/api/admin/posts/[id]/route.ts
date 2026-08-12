import { NextRequest, NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireAdminSession(request))) {
    return NextResponse.json({ error: "認証が必要です。" }, { status: 401 });
  }
  const { id } = await params;

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "リクエストの形式が不正です。" }, { status: 400 });
  }

  const update: Record<string, unknown> = {};
  if (typeof body.title === "string") update.title = body.title.trim();
  if (typeof body.body === "string") update.body = body.body.trim();
  if (body.type === "news" || body.type === "announcement") update.type = body.type;
  if (typeof body.is_published === "boolean") update.is_published = body.is_published;
  if (typeof body.published_at === "string") update.published_at = body.published_at;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "更新する項目がありません。" }, { status: 400 });
  }

  const admin = getSupabaseAdminClient();
  const { data, error } = await admin
    .from("posts")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ post: data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await requireAdminSession(request))) {
    return NextResponse.json({ error: "認証が必要です。" }, { status: 401 });
  }
  const { id } = await params;

  const admin = getSupabaseAdminClient();
  const { error } = await admin.from("posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
