"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Priser", href: "#priser" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Offert", href: "#offert" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <svg
            className={styles.logoIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2l1.09 3.26L16 6l-2.18 2.18L14.36 12 12 10.09 9.64 12l.54-3.82L8 6l2.91-.74z" />
            <path d="M5 17l1.5-1.5" />
            <path d="M19 17l-1.5-1.5" />
            <path d="M12 22v-3" />
          </svg>
          Älvsbyns Städteam
        </a>

        <nav className={styles.nav} aria-label="Huvudnavigering">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <a href="tel:+4692912345" className={styles.ctaLink}>
            Ring oss
          </a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Öppna meny"
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
        aria-label="Mobilmeny"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="tel:+4692912345"
          className={styles.mobileNavLink}
          style={{ color: "var(--color-primary)", fontWeight: 600 }}
        >
          Ring oss: 0929-123 45
        </a>
      </nav>
    </header>
  );
}
