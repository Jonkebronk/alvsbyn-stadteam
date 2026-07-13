import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="kontakt" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Kontakta oss</h2>
        <p className="section-subtitle">
          Vi finns här för dig – hör av dig när det passar
        </p>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.itemIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className={styles.itemTitle}>Telefon</h3>
            <p className={styles.itemText}>
              <a href="tel:+4692912345" className={styles.itemLink}>
                0929-123 45
              </a>
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.itemIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className={styles.itemTitle}>E-post</h3>
            <p className={styles.itemText}>
              <a href="mailto:info@alvsbynsstadteam.se" className={styles.itemLink}>
                info@alvsbynsstadteam.se
              </a>
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.itemIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className={styles.itemTitle}>Öppettider</h3>
            <p className={styles.itemText}>
              Mån–Fre 07:00–16:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
