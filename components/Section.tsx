import { FadeUp } from "@/components/motion";

/**
 * Section heading: small EN kicker, JP serif title, gold rule, optional lead.
 * align: "left" | "center"
 */
export function SectionTitle({
  en,
  title,
  lead,
  align = "left",
  dark = false,
}: {
  en: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const ruleCls =
    align === "center" ? "mx-auto rule-gold" : "rule-gold";
  return (
    <FadeUp className={alignCls}>
      <p
        className={`text-[11px] font-bold tracking-[0.4em] md:text-xs ${
          dark ? "text-gold-400" : "text-gold-600"
        }`}
      >
        {en}
      </p>
      <h2
        className={`mt-3 font-serif text-2xl font-bold leading-snug md:text-4xl ${
          dark ? "text-white" : "text-pine-950"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 h-[3px] w-16 ${ruleCls}`} />
      {lead && (
        <p
          className={`mt-6 max-w-3xl text-sm leading-8 md:text-[15px] ${
            dark ? "text-white/80" : "text-ink-700"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </FadeUp>
  );
}

/** Standard page section wrapper with consistent spacing. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
