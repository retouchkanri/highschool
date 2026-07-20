"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <section className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index]})` }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-pine-950/60 via-pine-950/30 to-pine-950/80"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/top_logo.png"
            alt="馬の学校 東関東馬事高等学院"
            width={460}
            height={380}
            priority
            className="mx-auto w-56 md:w-80"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-serif text-2xl font-bold leading-relaxed text-white [text-shadow:0_2px_24px_rgb(11_31_22/0.6)] md:text-4xl"
        >
          勉強は最低限、夢は最大限。
          <br />
          <span className="text-xl md:text-3xl">
            馬と共に過ごす、高校3年間。
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className="mt-5 text-xs leading-6 tracking-widest text-white/85 md:text-sm"
        >
          千葉県山武市｜全寮制・馬の学校｜広域通信制 明蓬館高等学校 連携
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
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
        </motion.div>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/70">
          SCROLL
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="mx-auto mt-2 h-8 w-[1px] bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
