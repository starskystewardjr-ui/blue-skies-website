import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Gallery />
    </>
  );
}