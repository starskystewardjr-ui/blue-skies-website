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
<section className="bg-slate-950 text-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-4">
      Ready for a Professional Detail?
    </h2>

    <p className="text-slate-300 text-lg mb-10 max-w-2xl">
      Blue Skies Mobile Wash & Home Care proudly serves Columbia County
      and surrounding Pennsylvania communities with premium mobile
      detailing delivered directly to your driveway.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

      <div>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>

        <p className="mb-2">
          📞 570-912-5307
        </p>

        <p className="mb-2">
          ✉️ info.blueskiesmobilewash@gmail.com
        </p>

        <p>
          📍 Columbia County, Pennsylvania
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Business Information
        </h3>

        <p>
          Blue Skies Mobile Wash & Home Care
        </p>

        <p>
          Founded by <strong>Starsky Steward Jr.</strong>
        </p>

        <p>
          Professional Mobile Detailing
        </p>

        <p>
          Fully Mobile • By Appointment
        </p>
      </div>

    </div>

    <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400 text-sm">
      © {new Date().getFullYear()} Blue Skies Mobile Wash & Home Care. All Rights Reserved.
    </div>

  </div>
</section>