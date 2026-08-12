import { NextRequest, NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!(await requireAdminSession(request))) {
    return NextResponse.json({ error: "認証が必要です。" }, { status: 401 });
  }

  const admin = getSupabaseAdminClient();
  const { data, error } = await admin
    .from("faqs")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ faqs: data });
}

export async function POST(request: NextRequest) {
  if (!(await requireAdminSession(request))) {
    return NextResponse.json({ error: "認証が必要です。" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const category = body?.category?.trim();
  const question = body?.question?.trim();
  const answer = body?.answer?.trim();
  const sort_order = Number.isFinite(body?.sort_order) ? body.sort_order : 0;

  if (!category || !question || !answer) {
    return NextResponse.json(
      { error: "カテゴリ・質問・回答は必須です。" },
      { status: 400 }
    );
  }

  const admin = getSupabaseAdminClient();
  const { data, error } = await admin
    .from("faqs")
    .insert({ category, question, answer, sort_order })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ faq: data }, { status: 201 });
}
