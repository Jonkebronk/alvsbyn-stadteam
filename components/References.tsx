import styles from "./References.module.css";

const placeholders = [
  "Hemstädning – vardagsrum",
  "Kontorsstädning – entré",
  "Flyttstädning – kök",
];

export default function References() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Bilder från våra uppdrag</h2>
        <p className="section-subtitle">
          Här kommer vi visa resultat från riktiga städuppdrag
        </p>
        <div className={styles.grid}>
          {placeholders.map((label) => (
            <div
              key={label}
              className={styles.placeholder}
              role="img"
              aria-label={`Platshållare: ${label}`}
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
              <span className={styles.placeholderText}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
