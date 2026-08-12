"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

const ctas = [
  {
    en: "PAMPHLET",
    title: "学校案内・資料請求",
    desc: "最短3日でお届け。1分程度で入力できます。",
    href: site.forms.shiryo,
    accent: "bg-sun-500 text-pine-950",
  },
  {
    en: "OPEN CAMPUS",
    title: "体験入学のお申込み",
    desc: "JR東京駅から無料送迎。乗馬体験つき。",
    href: site.forms.taiken,
    accent: "bg-gold-500 text-pine-950",
  },
  {
    en: "CONTACT",
    title: "お問い合わせ",
    desc: "入学・転入学のご相談はお気軽にどうぞ。",
    href: site.forms.contact,
    accent: "bg-pine-700 text-white",
  },
];

/** Three-action CTA band shown at the bottom of every page. */
export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-pine-900 py-16 md:py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(/images/left_el-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left -80px top -40px",
          backgroundSize: "380px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeUp className="text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-400">
            NEXT STEP
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-white md:text-3xl">
            まずは、バジガクに会いに来てください。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
            体験入学・入学相談はお気軽に。
            <a
              href={`tel:${site.tel}`}
              className="mx-1 font-bold tracking-wider text-sun-400 hover:underline"
            >
              {site.tel}
            </a>
          </p>
        </FadeUp>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {ctas.map((c) => {
            const isExternal = c.href.startsWith("http");
            const content = (
              <>
                <p className="text-[10px] font-bold tracking-[0.35em] opacity-70">
                  {c.en}
                </p>
                <p className="mt-2 font-serif text-lg font-bold md:text-xl">
                  {c.title}
                </p>
                <p className="mt-2 text-xs leading-6 opacity-80">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold">
                  詳しくはこちら
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </>
            );
            const className = `group block h-full p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift ${c.accent}`;
            return (
              <StaggerItem key={c.en}>
                {isExternal ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={c.href} className={className}>
                    {content}
                  </Link>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
