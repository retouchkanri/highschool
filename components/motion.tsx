"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

function useRevealOnce(once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || (once && visible)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, visible]);

  return { ref, visible };
}

function baseTransition(delay: number): CSSProperties {
  return {
    transitionProperty: "opacity, transform, clip-path",
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}s`,
  };
}

/** Fade + rise on scroll into view. The workhorse reveal. */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  const { ref, visible } = useRevealOnce(once);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseTransition(delay),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

/** Container that staggers its direct <StaggerItem> children. */
export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <div
      className={className}
      style={{ ["--stagger-gap" as string]: `${gap}s` }}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useRevealOnce(true);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseTransition(0),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transitionDelay: "var(--stagger-gap, 0s)",
      }}
    >
      {children}
    </div>
  );
}

/** Gentle scale-in for imagery. */
export function ScaleIn({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useRevealOnce(true);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseTransition(delay),
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.94)",
        transitionDuration: "800ms",
      }}
    >
      {children}
    </div>
  );
}

/** Horizontal slide reveal, direction: 1 = from right, -1 = from left. */
export function SlideIn({
  children,
  className,
  direction = 1,
  delay = 0,
}: RevealProps & { direction?: 1 | -1 }) {
  const { ref, visible } = useRevealOnce(true);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseTransition(delay),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${48 * direction}px)`,
        transitionDuration: "800ms",
      }}
    >
      {children}
    </div>
  );
}

/** Clip-path curtain reveal for photos. */
export function CurtainImage({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useRevealOnce(true);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseTransition(delay),
        clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transitionDuration: "1000ms",
        transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
      }}
    >
      {children}
    </div>
  );
}
