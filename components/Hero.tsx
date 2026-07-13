import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
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
    </section>
  );
}
