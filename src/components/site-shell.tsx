"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./site-shell.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const isProject = pathname.startsWith("/project");
  const isProjectListing = pathname === "/project";
  const isDarkHeader = isProjectListing;

  return (
    <div className={styles.shell}>
      <header className={`${styles.header} ${!isHome ? styles.headerSolid : ""} ${isProject ? styles.headerProject : ""}`}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Image
                src="/burger-menu-svg.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className={`${styles.menuIcon} ${isDarkHeader ? styles.menuIconOnDark : ""}`}
              />
            </button>
            {isProjectListing && (
              <p className={`${styles.pageTitle} ${styles.pageTitleOnDark}`}>Residential Work</p>
            )}
          </div>

          <Link href="/" aria-label="LYDesign Home" className={styles.logoWrap}>
            <Image
              src="/logo.png"
              alt="LYDesign logo"
              width={200}
              height={170}
              className={styles.logo}
              priority
            />
            <Image
              src="/Logo_text.png"
              alt=""
              width={300}
              height={29}
              aria-hidden="true"
              className={styles.logoText}
              priority
            />
          </Link>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.menuPanel} ${menuOpen ? styles.menuPanelOpen : ""}`}
      >
        <button
          type="button"
          className={styles.menuClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <line x1="5" y1="5" x2="23" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="23" y1="5" x2="5" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
        <nav className={styles.menuNav} aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.menuLink} ${
                isActivePath(pathname, link.href) ? styles.menuLinkActive : ""
              } ${menuOpen ? styles.menuLinkVisible : ""}`}
              style={{ "--link-i": i } as React.CSSProperties}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isHome && (
        <p className={styles.slogan}>Designing Spaces, Shaping Futures</p>
      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
}
