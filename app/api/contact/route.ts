import { NextRequest, NextResponse } from "next/server";
import { getMailTransport } from "@/lib/mailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "リクエストの形式が不正です。" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const category = String(body.category ?? "その他").trim();
  const message = String(body.message ?? "").trim();
  // Honeypot: a hidden field real users never fill in.
  const company = String(body.company ?? "").trim();

  if (company) {
    // Silently pretend success to bots.
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL is not set.");
    return NextResponse.json(
      { error: "現在お問い合わせフォームをご利用いただけません。お電話にてご連絡ください。" },
      { status: 500 }
    );
  }

  try {
    const transport = getMailTransport();

    await transport.sendMail({
      from: `"${site.name} 公式サイト" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `【${site.shortName} お問い合わせ】${category} - ${name}様`,
      text: [
        `お問い合わせ種別: ${category}`,
        `お名前: ${name}`,
        `メールアドレス: ${email}`,
        `電話番号: ${phone || "未入力"}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    });

    // Best-effort confirmation email to the submitter. Failure here should
    // not fail the whole request since the school has already received it.
    try {
      await transport.sendMail({
        from: `"${site.name}" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `【${site.shortName}】お問い合わせを受け付けました`,
        text: [
          `${name} 様`,
          "",
          `この度は${site.name}（${site.shortName}）へお問い合わせいただき、誠にありがとうございます。`,
          "以下の内容でお問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
          "",
          `お問い合わせ種別: ${category}`,
          "お問い合わせ内容:",
          message,
          "",
          "※このメールは自動送信されています。",
          site.name,
          site.address,
          `TEL: ${site.tel}`,
        ].join("\n"),
      });
    } catch (confirmError) {
      console.error("Contact confirmation email failed:", confirmError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。" },
      { status: 500 }
    );
  }
}
