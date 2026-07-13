import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Älvsbyns Städteam</h1>
          <p className={styles.subtitle}>
            Professionell hem-, kontors- och flyttstädning i Älvsbyn och
            närområdet. Vi gör det rent – så du kan fokusera på annat.
          </p>
          <a href="tel:+4692912345" className={styles.phone}>
            0929-123 45
          </a>
          <div className={styles.actions}>
            <a href="tel:+4692912345" className="btn btn-primary">
              Ring nu
            </a>
            <a href="#offert" className="btn btn-secondary">
              Begär offert
            </a>
          </div>
        </div>

        {/* TODO: byt ut mot riktigt foto – ersätt hela imageWrapper med <Image src="/hero.jpg" ... /> */}
        <div
          className={styles.imageWrapper}
          role="img"
          aria-label="Platshållare för hero-bild – ett fräscht, nyligen städat hem"
        >
          <svg
            className={styles.placeholderIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className={styles.placeholderText}>Hero-bild</span>
        </div>
      </div>
    </section>
  );
}
