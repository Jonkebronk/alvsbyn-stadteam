import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Älvsbyns Städteam – Hemstädning, kontorsstädning & flyttstäd i Älvsbyn",
  description:
    "Lokalt städföretag i Älvsbyn. Vi erbjuder hemstädning, kontorsstädning och flyttstädning med RUT-avdrag. Ring oss på 0929-123 45 för en kostnadsfri offert!",
  keywords: ["städ", "städfirma", "Älvsbyn", "hemstädning", "kontorsstädning", "flyttstädning", "RUT-avdrag"],
  openGraph: {
    title: "Älvsbyns Städteam – Professionell städning i Älvsbyn",
    description: "Hemstädning, kontorsstädning och flyttstäd i Älvsbyn. Boka en kostnadsfri offert idag!",
    locale: "sv_SE",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Älvsbyns Städteam",
  description: "Lokalt städföretag i Älvsbyn som erbjuder hemstädning, kontorsstädning och flyttstädning.",
  telephone: "+46929-12345",
  email: "info@alvsbynsstadteam.se",
  url: "https://alvsbyn-stadteam.vercel.app",
  areaServed: [
    { "@type": "City", name: "Älvsbyn" },
    { "@type": "City", name: "Piteå" },
    { "@type": "City", name: "Luleå" },
    { "@type": "City", name: "Boden" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "16:00",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Älvsbyn",
    addressCountry: "SE",
  },
};

// Static JSON-LD schema — no user input, safe to serialize
const schemaMarkup = JSON.stringify(localBusinessSchema);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
