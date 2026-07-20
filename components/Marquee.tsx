import Image from "next/image";

/** Infinite horizontal photo marquee (pure CSS animation). */
export default function Marquee({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) {
  const doubled = [...images, ...images];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max gap-4 animate-marquee">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl md:h-56 md:w-80"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="320px"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
