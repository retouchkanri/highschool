"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

/** Animated FAQ accordion. */
export default function Accordion({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden border border-cream-300 bg-white shadow-soft"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left md:px-7 md:py-5"
              aria-expanded={open}
            >
              <span className="font-serif text-lg font-bold text-gold-600">
                Q
              </span>
              <span className="flex-1 text-sm font-bold leading-6 text-pine-950 md:text-[15px]">
                {item.q}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine-50 text-base font-bold text-pine-700"
                style={{
                  transform: `rotate(${open ? 45 : 0}deg)`,
                  transition: "transform 250ms ease",
                }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex gap-4 border-t border-cream-200 px-5 py-4 md:px-7 md:py-5">
                  <span className="font-serif text-lg font-bold text-pine-600">
                    A
                  </span>
                  <p className="flex-1 text-sm leading-7 text-ink-700">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
