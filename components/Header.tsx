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
