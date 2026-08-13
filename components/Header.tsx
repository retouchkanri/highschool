"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

const contactGreen = "bg-[#00a651] hover:bg-[#009247]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex h-16 items-stretch md:h-[72px]">
        <Link
          href="/"
          className="flex shrink-0 items-center px-4 md:px-6 lg:px-8"
        >
          <Image
            src="/images/logo_sp_top.png"
            alt={site.name}
            width={220}
            height={40}
            priority
            className="h-8 w-auto md:hidden"
          />
          <Image
            src="/images/logo_top.png"
            alt={site.name}
            width={280}
            height={52}
            priority
            className="hidden h-10 w-auto md:block lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-[15px] font-normal text-[#333333] transition hover:text-[#00a651]"
                >
                  {item.label}
                  <svg
                    className="h-3 w-3 transition group-hover:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden border border-cream-300 bg-white py-1 shadow-lift">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-3 text-[15px] font-normal text-[#333333] transition hover:bg-pine-50 hover:text-[#00a651]"
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
                className={`px-3 py-2 text-[15px] font-normal transition hover:text-[#00a651] ${
                  pathname === item.href ? "text-[#00a651]" : "text-[#333333]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Phone + contact */}
        <div className="ml-4 hidden items-stretch lg:flex">
          <a
            href={`tel:${site.tel}`}
            className="flex items-center gap-3 px-5 transition hover:bg-cream-50 xl:px-6"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00a651]/10 text-[#00a651]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </span>
            <span>
              <span className="block whitespace-nowrap text-lg font-bold leading-tight text-[#333333]">
                {site.tel}
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-xs text-[#666666]">
                {site.telHours}
              </span>
            </span>
          </a>

          <Link
            href="/contact"
            className={`flex w-[88px] shrink-0 flex-col items-center justify-center gap-1.5 text-white transition xl:w-[96px] ${contactGreen}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            <span className="text-xs font-bold leading-none">
              お問い合わせ
            </span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 ml-auto flex h-full w-14 flex-col items-center justify-center gap-[7px] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink-700 transition-all duration-300 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink-700 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink-700 transition-all duration-300 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="space-y-1 px-4 pb-6 pt-2">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="pt-2">
                <p className="px-2 pb-1 text-[11px] font-bold tracking-widest text-[#00a651]">
                  {item.label}
                </p>
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-3 text-[15px] font-normal text-[#333333] transition hover:bg-cream-100"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`block px-2 py-3 text-[15px] font-normal transition hover:bg-cream-100 ${
                  pathname === item.href ? "text-[#00a651]" : "text-[#333333]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <a
            href={`tel:${site.tel}`}
            className="mt-4 flex items-center gap-3 border border-cream-300 px-4 py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00a651]/10 text-[#00a651]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </span>
            <span>
              <span className="block text-lg font-bold text-[#333333]">
                {site.tel}
              </span>
              <span className="text-xs text-[#666666]">{site.telHours}</span>
            </span>
          </a>

          <Link
            href="/contact"
            className={`mt-3 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white ${contactGreen}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
