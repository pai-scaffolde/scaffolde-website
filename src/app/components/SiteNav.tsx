"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

type NavVariant = "default" | "investors";

export default function SiteNav({ variant = "default" }: { variant?: NavVariant }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="site-nav">
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="Scaffolde home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/scaffolde-mark.svg"
            alt=""
            className="logo-mark"
            width={30}
            height={30}
          />
          <span className="logo-word">Scaffolde</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navlinks${open ? " open" : ""}`}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") setOpen(false);
          }}
        >
          <Link href="/product" className={isActive("/product") ? "active" : ""}>
            Product
          </Link>
          <Link
            href="/how-it-works"
            className={isActive("/how-it-works") ? "active" : ""}
          >
            How it works
          </Link>
          <Link
            href="/investors"
            className={isActive("/investors") ? "active" : ""}
          >
            Investors
          </Link>
          <div className="nav-cta">
            <Link href="/dashboard" className="navlink-signin">
              Sign in
            </Link>
            {variant === "investors" ? (
              <a href={CAL_URL} className="btn btn-primary btn-sm">
                Request the data room
              </a>
            ) : (
              <Link href="/dashboard" className="btn btn-primary btn-sm">
                Get started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
