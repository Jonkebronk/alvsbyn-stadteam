import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.cookie}>
          Den här webbplatsen använder inga spårande cookies. Vi lagrar inga
          personuppgifter via webbplatsen.
        </p>
        <div className={styles.divider} />
        <p className={styles.credit}>
          Webbplats av{" "}
          <a
            href="https://nortropic.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nortropic
          </a>
        </p>
      </div>
    </footer>
  );
}
