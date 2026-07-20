import Image from "next/image";

type Channel = {
  img: string;
  no: string;
  title: string;
  desc: string;
};

/** Infinite slow marquee of YouTube channel cards (7 unique × 4 repeats). */
export default function YouTubeMarquee({
  channels,
  youtubeUrl,
}: {
  channels: Channel[];
  youtubeUrl: string;
}) {
  const items = Array.from({ length: 4 }, () => channels).flat();

  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-5 animate-youtube-marquee px-6 hover:[animation-play-state:paused]">
        {items.map((ch, i) => (
          <a
            key={`${ch.no}-${i}`}
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-72 shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={ch.img}
                alt={ch.title}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pine-950/20 transition group-hover:bg-transparent" />
              <span className="absolute bottom-3 left-3 rounded bg-pine-950/85 px-2.5 py-1 font-serif text-[10px] font-bold tracking-[0.25em] text-gold-300">
                CH {ch.no}
              </span>
              <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-pine-950 opacity-0 shadow-lift transition duration-300 group-hover:opacity-100">
                ▶
              </span>
            </div>
            <p className="mt-3 text-sm font-bold text-white transition group-hover:text-sun-400">
              {ch.title}
            </p>
            <p className="mt-1 text-xs text-white/60">{ch.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
