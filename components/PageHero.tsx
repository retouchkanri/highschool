import Link from "next/link";
import { FadeUp } from "@/components/motion";

type Crumb = { label: string; href?: string };

/**
 * Shared sub-page hero: full-bleed photo, dark pine overlay,
 * EN kicker + JP serif title + breadcrumb.
 */
export default function PageHero({
  image,
  en,
  title,
  lead,
  crumbs,
}: {
  image: string;
  en: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden pt-20 md:min-h-[54vh]">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-pine-950/95 via-pine-950/55 to-pine-950/30"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 md:pb-14">
        <FadeUp>
          <p className="font-serif text-xs font-semibold tracking-[0.45em] text-gold-400 md:text-sm">
            {en}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/85 md:text-base">
              {lead}
            </p>
          )}
        </FadeUp>
        <nav className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>／</span>}
              {c.href ? (
                <Link href={c.href} className="transition hover:text-sun-400">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/85">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
