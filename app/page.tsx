import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <References />
        <ContactForm />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
