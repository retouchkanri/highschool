"use client";

import { useState } from "react";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp } from "@/components/motion";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

const categories = ["入学・転入学について", "学校見学・体験入学", "学費・奨学金", "寮生活", "その他"];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: categories[0],
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "送信に失敗しました。");
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        category: categories[0],
        message: "",
        company: "",
      });
    } catch (e) {
      setStatus("error");
      setErrorMessage((e as Error).message);
    }
  }

  return (
    <>
      <PageHero
        image="/images/DSC_0028.jpg"
        en="CONTACT"
        title="お問い合わせ"
        lead="入学・転入学、学校見学、学費のことなど、お気軽にお問い合わせください。担当者より折り返しご連絡いたします。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "お問い合わせ" }]}
      />

      <Section className="texture-paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionTitle
              en="GET IN TOUCH"
              title="お問い合わせフォーム"
              lead="24時間受付。内容を確認のうえ、スタッフより折り返しご連絡します。お急ぎの場合はお電話にてご連絡ください。"
            />
            <dl className="mt-8 divide-y divide-cream-200 border border-cream-300 bg-cream-50 shadow-soft">
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  TEL
                </dt>
                <dd className="text-sm leading-7 text-ink-700">
                  <a
                    href={`tel:${site.tel}`}
                    className="font-bold tracking-wider text-pine-800 transition hover:text-gold-600"
                  >
                    {site.tel}
                  </a>
                </dd>
              </div>
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  FAX
                </dt>
                <dd className="text-sm leading-7 text-ink-700">{site.fax}</dd>
              </div>
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  所在地
                </dt>
                <dd className="text-sm leading-7 text-ink-700">{site.address}</dd>
              </div>
            </dl>
          </div>

          <FadeUp delay={0.1}>
            {status === "success" ? (
              <div className="border border-cream-300 bg-white p-10 text-center shadow-soft">
                <p className="font-serif text-lg font-bold text-pine-950">
                  お問い合わせを受け付けました
                </p>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  ご入力いただいたメールアドレス宛に受付確認メールをお送りしました。担当者より折り返しご連絡いたしますので、今しばらくお待ちください。
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
                >
                  もう一度送信する
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 border border-cream-300 bg-white p-6 shadow-soft md:p-8"
              >
                {status === "error" && errorMessage && (
                  <p className="rounded border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700">
                    {errorMessage}
                  </p>
                )}

                {/* Honeypot field, hidden from real users */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-ink-700">
                      お名前 <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full rounded border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-gold-500 focus:bg-white"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-ink-700">
                      電話番号
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full rounded border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-gold-500 focus:bg-white"
                      placeholder="090-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-700">
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-gold-500 focus:bg-white"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-700">
                    お問い合わせ種別
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="w-full rounded border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-gold-500 focus:bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-700">
                    お問い合わせ内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-gold-500 focus:bg-white"
                    placeholder="ご質問・ご相談内容をご記入ください。"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-pine-800 px-8 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift disabled:opacity-50"
                >
                  {status === "sending" ? "送信中…" : "送信する"}
                  {status !== "sending" && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  )}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
