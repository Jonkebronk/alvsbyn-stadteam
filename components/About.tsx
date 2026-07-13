import styles from "./About.module.css";

export default function About() {
  return (
    <section id="om-oss" className="section">
      <div className="container">
        <h2 className="section-title">Om oss</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            Vi är ett litet, lokalt städteam som bor och verkar i{" "}
            <span className={styles.highlight}>Älvsbyn</span>. Det som
            började som ett par extrajobb åt grannar har vuxit till ett riktigt
            städföretag – men känslan är densamma. Vi vill att du ska känna
            dig trygg med vilka som kommer in i ditt hem eller kontor.
          </p>
          <p className={styles.text}>
            Alla i teamet bor här i bygden, och vi är stolta över att kunna
            erbjuda pålitlig, noggrann städning till rimliga priser. Ingen
            stressad genomgång – utan ordentligt gjort, varje gång.
          </p>
          <p className={styles.text}>
            Har du frågor eller vill veta mer? Ring oss gärna på{" "}
            <a
              href="tel:+4692912345"
              className={styles.highlight}
            >
              0929-123 45
            </a>{" "}
            eller fyll i offertformuläret nedan. Vi svarar vanligtvis
            inom samma dag.
          </p>
        </div>
      </div>
    </section>
  );
}
