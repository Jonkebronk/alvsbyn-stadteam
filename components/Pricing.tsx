import styles from "./Pricing.module.css";

const pricingData = [
  {
    title: "Hemstädning",
    price: "349",
    unit: "kr / timme",
    rut: true,
    features: [
      "Dammsugning & moppning",
      "Kök & badrum",
      "Dammtorkning",
      "Anpassat efter dina önskemål",
      "Regelbundet eller vid behov",
    ],
  },
  {
    title: "Kontorsstädning",
    price: "399",
    unit: "kr / timme",
    rut: false,
    features: [
      "Gemensamma utrymmen",
      "Toaletter & pentry",
      "Sophantering",
      "Daglig, veckovis eller månatlig",
      "Faktura till företag",
    ],
  },
  {
    title: "Flyttstädning",
    price: "2 500–5 000",
    unit: "kr (beroende på storlek)",
    rut: true,
    features: [
      "Hela bostaden – golv till tak",
      "Ugn, kyl & frys",
      "Fönsterputsning",
      "Besiktningsgaranti",
      "Fast pris efter besiktning",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Prislista</h2>
        <p className="section-subtitle">
          Tydliga priser utan dolda kostnader
        </p>
        <div className={styles.grid}>
          {pricingData.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.price}>
                  {item.price}
                </p>
                <p className={styles.priceUnit}>
                  {item.unit}
                  {item.rut && (
                    <>
                      {" "}
                      <span className={styles.rutBadge}>RUT</span>
                    </>
                  )}
                </p>
                <ul className={styles.features}>
                  {item.features.map((f) => (
                    <li key={f}>
                      <span className={styles.check} aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rutInfo}>
          <p className={styles.rutTitle}>RUT-avdrag – betala halva priset</p>
          <p className={styles.rutText}>
            Med RUT-avdrag får du som privatperson 50 % skattereduktion på
            arbetskostnaden för hemstädning och flyttstädning. Vi drar av
            direkt på fakturan – du betalar bara halva priset.
          </p>
        </div>
      </div>
    </section>
  );
}
