"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="offert" className="section">
        <div className="container">
          <div className={styles.success}>
            <div className={styles.successIcon} aria-hidden="true">✓</div>
            <h2 className={styles.successTitle}>
              Tack, vi hör av oss!
            </h2>
            <p className={styles.successText}>
              Vi har tagit emot din förfrågan och återkommer så snart vi
              kan – vanligtvis inom samma arbetsdag.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="offert" className="section">
      <div className="container">
        <h2 className="section-title">Begär offert</h2>
        <p className="section-subtitle">
          Fyll i formuläret så kontaktar vi dig med en kostnadsfri offert
        </p>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate={false}
        >
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Namn <span className={styles.required}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={styles.input}
              placeholder="Ditt namn"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact" className={styles.label}>
              Telefon eller e-post <span className={styles.required}>*</span>
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              className={styles.input}
              placeholder="070-123 45 67 eller din@epost.se"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Typ av städning <span className={styles.required}>*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              className={styles.select}
              defaultValue=""
            >
              <option value="" disabled>
                Välj tjänst...
              </option>
              <option value="hemstadning">Hemstädning</option>
              <option value="kontorsstadning">Kontorsstädning</option>
              <option value="flyttstadning">Flyttstädning</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Berätta gärna mer om vad du behöver hjälp med..."
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submit}`}>
            Skicka förfrågan
          </button>
        </form>
      </div>
    </section>
  );
}
