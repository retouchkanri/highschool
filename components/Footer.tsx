import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/lib/site";
import { InstagramIcon, XIcon, YouTubeIcon } from "@/components/SocialIcons";

const snsLinks = [
  { label: "YouTube", href: site.sns.youtube, Icon: YouTubeIcon },
  { label: "Instagram", href: site.sns.instagram, Icon: InstagramIcon },
  { label: "X (Twitter)", href: site.sns.twitter, Icon: XIcon },
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
              {snsLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-sun-400 hover:text-sun-400"
                >
                  <Icon className="h-[18px] w-[18px]" />
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
          <p>社団法人 日本馬術連盟・東京都馬術連盟加盟団体</p>
        </div>
      </div>
    </footer>
  );
}
