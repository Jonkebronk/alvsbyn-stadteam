import styles from "./References.module.css";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery/hemstadning.jpg", alt: "Hemstädning – rent och fräscht vardagsrum" },
  { src: "/gallery/kok.jpg", alt: "Kök efter professionell städning" },
  { src: "/gallery/kontor.jpg", alt: "Kontorsstädning – ren och inbjudande arbetsplats" },
  { src: "/gallery/badrum.jpg", alt: "Badrum efter grundlig rengöring" },
  { src: "/gallery/flyttstad.jpg", alt: "Flyttstädning – tomt och skinande rent" },
];

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
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
