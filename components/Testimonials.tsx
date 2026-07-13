import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Maria L.",
    location: "Älvsbyn",
    stars: 5,
    quote:
      "Har haft Älvsbyns Städteam i flera månader nu och är jättenöjd. Alltid noggranna, alltid i tid. Skönt att komma hem till ett rent hus efter jobbet.",
  },
  {
    name: "Erik S.",
    location: "Älvsbyn",
    stars: 5,
    quote:
      "Anlitade dem för flyttstädning och allt gick igenom besiktningen utan anmärkning. Snabbt, grundligt och till ett bra pris. Rekommenderas varmt!",
  },
  {
    name: "Lena & Per K.",
    location: "Piteå",
    stars: 5,
    quote:
      "Vi behövde hjälp med kontorsstädning och de var flexibla med tiderna. Proffsigt bemötande och alltid glada. Kontoret har aldrig sett bättre ut.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} av 5 stjärnor`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Vad våra kunder säger</h2>
        <p className="section-subtitle">
          Vi är stolta över förtroendet vi fått från kunder i Älvsbyn och
          närområdet
        </p>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <StarRating count={t.stars} />
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <p className={styles.author}>
                {t.name}{" "}
                <span className={styles.location}>– {t.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
