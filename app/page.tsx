import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Reviews from "../components/Reviews";
import ServiceArea from "../components/ServiceArea";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TrustSection />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <ServiceArea />
      <CTA />
      <Footer />
    </>
  );
}