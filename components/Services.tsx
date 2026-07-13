import styles from "./Services.module.css";

const services = [
  {
    title: "Hemstädning",
    text: "Regelbunden eller engångsstädning av ditt hem. Vi anpassar oss efter dina behov och ser till att du alltid kommer hem till ett fräscht och trivsamt hem. RUT-avdrag gäller.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Kontorsstädning",
    text: "En ren arbetsplats ökar trivseln och produktiviteten. Vi erbjuder daglig, veckovis eller månatlig kontorsstädning anpassad efter ert kontor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Flyttstädning",
    text: "Ska du flytta? Vi tar hand om städningen så att du kan fokusera på det nya hemmet. Grundlig städning som uppfyller besiktningskrav. RUT-avdrag gäller.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
        <path d="M23 13v-2" />
        <line x1="1" y1="10" x2="19" y2="10" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="section">
      <div className="container">
        <h2 className="section-title">Våra tjänster</h2>
        <p className="section-subtitle">
          Vi erbjuder professionell städning för hem och kontor i Älvsbyn
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
