"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

/**
 * Reveal-on-scroll wrapper — faithful port of the IntersectionObserver
 * behavior in design/site/site.js. Honors prefers-reduced-motion (the
 * element appears immediately, matching the CSS reduced-motion rule).
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      // No animation: leave content as-is (already visible by default).
      el.classList.add("in");
      return;
    }
    // Opt-in to the hidden-then-reveal animation. Until <html class="js"> is
    // present, CSS keeps .reveal fully visible — so a never-firing observer
    // can never blank the page (the anti-reveal-bug guard).
    document.documentElement.classList.add("js");
    // Never hide what's already at/near the top of the viewport.
    const vh = window.innerHeight || 800;
    const startsVisible = el.getBoundingClientRect().top <= vh * 0.9;
    if (startsVisible) {
      el.classList.add("in");
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
    // Hard safety: nothing stays hidden even if the observer never fires.
    const fallback = window.setTimeout(() => el.classList.add("in"), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
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
