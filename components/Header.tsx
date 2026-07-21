"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-pine-950/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-pine-950/70 to-transparent"
      }`}
    >
      <div className="mx-[5vw] flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={276}
            height={54}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-white/90 transition hover:text-sun-400"
                >
                  {item.label}
                  <svg
                    className="h-3 w-3 transition group-hover:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden border border-white/10 bg-pine-900/95 p-2 shadow-lift backdrop-blur-md">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-3 text-[13px] font-medium text-white/85 transition hover:bg-pine-700/60 hover:text-sun-400"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`rounded-full px-3 py-2 text-[13px] font-medium transition hover:text-sun-400 ${
                  pathname === item.href ? "text-sun-400" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.forms.shiryo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-sun-500 px-5 py-2.5 text-[13px] font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
          >
            <span className="relative z-10">資料請求</span>
            <span className="absolute inset-0 -translate-x-full bg-gold-300 transition-transform duration-300 group-hover:translate-x-0" />
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-pine-950/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="space-y-1 px-6 pb-8 pt-2">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="pt-2">
                <p className="px-2 pb-1 text-[11px] font-bold tracking-widest text-gold-400">
                  {item.label}
                </p>
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-pine-800"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="block px-2 py-3 text-sm font-medium text-white/90 transition hover:bg-pine-800"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4">
            <a
              href={site.forms.shiryo}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-sun-500 px-6 py-3.5 text-center text-sm font-bold text-pine-950"
            >
              無料の資料請求はこちら
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
