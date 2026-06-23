"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

/**
 * Reveal-on-scroll wrapper — progressive enhancement.
 *
 * Content is ALWAYS visible by default (CSS `.reveal` has no hide rule on its
 * own). The entrance animation is opt-in: only when JS mounts, supports
 * IntersectionObserver, and the user has NOT requested reduced motion do we
 * "arm" the element (add `.reveal-armed`, which sets opacity:0 + translateY),
 * then promote it to `.in` once it scrolls into view (or immediately if it is
 * already intersecting on mount, e.g. above-the-fold heroes).
 *
 * This means a JS failure, hydration delay, missing IntersectionObserver, or
 * reduced-motion preference can NEVER leave content blank — the worst case is
 * simply "no entrance animation", with content fully visible.
 *
 * Pass `href` to render the revealed element as a Next.js <Link> (used by
 * the homepage audience-fork cards). Otherwise renders a <div>.
 */
export default function Reveal({
  children,
  className = "",
  href,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion or no observer support: leave content visible, no animation.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }

    // Arm the entrance animation now that we know JS + observer are available.
    // (Hidden state is applied here, never by default CSS, so SSR/no-JS is safe.)
    el.classList.add("reveal-armed");

    const reveal = () => {
      el.classList.add("in");
    };

    // Already in view on mount (above-the-fold) — reveal immediately so the
    // hero never depends on a scroll event that won't fire.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className={cls} {...rest}>
      {children}
    </div>
  );
}
