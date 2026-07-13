import Image from "next/image";
import styles from "./References.module.css";

interface GalleryImage {
  src: string;
  alt: string;
}

// Lägg till bilder här för att visa galleriet.
// Exempel: { src: "/gallery/hemstadning-1.jpg", alt: "Hemstädning – vardagsrum" }
const galleryImages: GalleryImage[] = [];

export default function References() {
  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Bilder från våra uppdrag</h2>
        <p className="section-subtitle">
          Resultat från riktiga städuppdrag i Älvsbyn
        </p>
        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.src} className={styles.imageCard}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
