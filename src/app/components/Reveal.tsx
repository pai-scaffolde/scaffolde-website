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
