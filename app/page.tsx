import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Gallery />
      <About />
    </>
  );
}