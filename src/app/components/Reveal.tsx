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

    const reveal = () => el.classList.add("in");

    // Reduced motion or no observer support: leave content visible, no animation.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    // Arm the entrance animation now that we know JS + observer are available.
    // (Hidden state is applied here, never by default CSS, so SSR/no-JS is safe.)
    el.classList.add("reveal-armed");

    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    // Already in view on mount (above-the-fold) — reveal immediately so the
    // hero never depends on a scroll event that won't fire.
    const rect = el.getBoundingClientRect();
    if (rect.top < vh() && rect.bottom > 0) {
      reveal();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      reveal();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) finish();
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );
    io.observe(el);

    // Fallback for instant scroll jumps (fast flick, End key, hash link): the
    // element can move from below the fold to above it in a single frame, so the
    // observer never catches it intersecting and it would stay armed/blank. On
    // any scroll, if the element has reached or passed the viewport, reveal it.
    const onScroll = () => {
      if (el.getBoundingClientRect().top < vh()) finish();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
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
