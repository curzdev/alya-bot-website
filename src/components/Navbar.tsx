"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "Commands Directory" },
  { href: "/features", label: "Features" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo size={44} />
          <span className="brand-name">Alya</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "nav-link is-active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn-discord" href="#login">
            Login with Discord
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav-drawer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "nav-link is-active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="btn-discord" href="#login" onClick={() => setOpen(false)}>
            Login with Discord
          </a>
        </div>
      ) : null}
    </header>
  );
}
