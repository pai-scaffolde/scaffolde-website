"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * MotionGate — runs a perpetual (infinite) CSS animation ONLY while it is
 * worth running, so the page can otherwise reach document-idle.
 *
 * An `animation: … infinite` keeps a page permanently non-idle: it drains
 * battery off-screen and prevents automation/idle tooling from ever settling.
 * This wrapper gates such an animation on three conditions, and only when ALL
 * hold does it add the `motion-live` class that actually turns the animation on:
 *
 *   1. The element is IN the viewport (IntersectionObserver — on enter / off leave).
 *   2. The document is visible (pauses on `visibilitychange` → hidden, resumes on visible).
 *   3. The user has NOT requested reduced motion (if reduced, it stays off — static final state).
 *
 * Default (server render, pre-hydration, out of view, hidden tab, or
 * reduced-motion) = NO `motion-live` class = static, idle. The visual effect is
 * identical to the always-on version whenever the element is actually on screen
 * in a visible tab — we only suppress the animation when nobody can see it.
 *
 * The observer, the visibility listener, and the (implicit, CSS-driven) animation
 * are all torn down on unmount.
 */
export default function MotionGate({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: never animate. Leave the static final state in place.
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || !("IntersectionObserver" in window)) return;

    let inView = false;
    let visible = document.visibilityState === "visible";

    const apply = () => {
      // Animate only when on-screen AND the tab is visible.
      el.classList.toggle("motion-live", inView && visible);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) inView = entry.isIntersecting;
        apply();
      },
      { threshold: 0 }
    );
    io.observe(el);

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      apply();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      // Drop the animation class so nothing keeps running after unmount.
      el.classList.remove("motion-live");
    };
  }, []);

  const cls = `${className}`.trim();

  return (
    <div ref={ref} className={cls} {...rest}>
      {children}
    </div>
  );
}
