import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/lib/site";

const snsLinks = [
  { label: "YouTube", href: site.sns.youtube },
  { label: "Instagram", href: site.sns.instagram },
  { label: "X (Twitter)", href: site.sns.twitter },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-white">
      {/* faint horse silhouette line art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url(/images/right_el-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right -60px bottom -40px",
          backgroundSize: "420px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={276}
              height={54}
              className="h-10 w-auto"
            />
            <p className="mt-6 text-sm leading-7 text-white/70">
              馬と共に過ごす全寮制の高校。
              <br />
              体験入学・入学相談はお気軽にどうぞ。
            </p>
            <p className="mt-6 text-sm leading-7 text-white/80">
              {site.address}
              <br />
              TEL{" "}
              <a
                href={`tel:${site.tel}`}
                className="font-bold tracking-wider text-sun-400 hover:underline"
              >
                {site.tel}
              </a>
              ／FAX {site.fax}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {snsLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-medium text-white/80 transition hover:border-sun-400 hover:text-sun-400"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-1 content-start gap-1 text-sm">
            {footerNav.slice(0, 6).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded px-2 py-2 text-white/75 transition hover:bg-white/5 hover:text-sun-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="grid grid-cols-1 content-start gap-1 text-sm">
            {footerNav.slice(6).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded px-2 py-2 text-white/75 transition hover:bg-white/5 hover:text-sun-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} 馬の高校 {site.name}（{site.shortName}
            ）
          </p>
          <p>千葉県山武市・八街市｜広域通信制 明蓬館高等学校 連携校</p>
        </div>
      </div>
    </footer>
  );
}
