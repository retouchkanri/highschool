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
  if (typeof body.category === "string") update.category = body.category.trim();
  if (typeof body.question === "string") update.question = body.question.trim();
  if (typeof body.answer === "string") update.answer = body.answer.trim();
  if (Number.isFinite(body.sort_order)) update.sort_order = body.sort_order;

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "更新する項目がありません。" }, { status: 400 });
  }

  const admin = getSupabaseAdminClient();
  const { data, error } = await admin
    .from("faqs")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ faq: data });
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
  const { error } = await admin.from("faqs").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
