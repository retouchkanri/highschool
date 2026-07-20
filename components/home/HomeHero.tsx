"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  "/images/DSC_0047-2.jpg",
  "/images/DSC_2533.jpg",
  "/images/20220529_064457.jpg",
  "/images/DSC_0073.jpg",
];

/** Full-screen crossfading hero with Ken Burns zoom and copy overlay. */
export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="page-hero"
      className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              transform: i === index ? "scale(1)" : "scale(1.08)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1800ms, 6500ms",
              transitionTimingFunction: "ease-in-out, linear",
            }}
          />
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-pine-950/60 via-pine-950/30 to-pine-950/80"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="animate-[fade-up_1.1s_ease-out_0.2s_both]">
          <Image
            src="/images/top_logo.png"
            alt="馬の学校 東関東馬事高等学院"
            width={460}
            height={380}
            priority
            className="mx-auto w-56 md:w-80"
          />
        </div>
        <h1
          className="animate-[fade-up_1s_ease-out_0.6s_both] mt-8 font-serif text-2xl font-bold leading-relaxed text-white [text-shadow:0_2px_24px_rgb(11_31_22/0.6)] md:text-4xl"
        >
          勉強は最低限、夢は最大限。
          <br />
          <span className="text-xl md:text-3xl">
            馬と共に過ごす、高校3年間。
          </span>
        </h1>
        <p className="animate-[fade-in_1s_ease-out_1s_both] mt-5 text-xs leading-6 tracking-widest text-white/85 md:text-sm">
          千葉県山武市｜全寮制・馬の学校｜広域通信制 明蓬館高等学校 連携
        </p>
        <div className="animate-[fade-up_0.9s_ease-out_1.25s_both] mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/opencampus"
            className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-8 py-4 text-sm font-bold text-pine-950 shadow-lift transition hover:brightness-105"
          >
            オープンキャンパスに参加する
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
          <Link
            href="/course"
            className="inline-flex items-center gap-3 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            コースを見る
          </Link>
        </div>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 md:bottom-20">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`スライド${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-sun-400" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* scroll cue */}
      <div className="animate-[fade-in_1s_ease-out_1.8s_both] absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/70">
          SCROLL
        </p>
        <div className="mx-auto mt-2 h-8 w-[1px] animate-[scroll-line_1.8s_ease-in-out_infinite] bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}
