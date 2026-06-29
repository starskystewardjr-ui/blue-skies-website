import Navbar from "../components/Navbar";
import TrustSection from "../components/TrustSection";

const SQUARE_BOOKING_URL = "https://squareup.com/appointments/book/YOUR-LINK-HERE";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Columbia County Mobile Detailing</p>

          <h1>Luxury Results. Right At Your Home.</h1>

          <p className="hero-text">
            Premium mobile detailing built for vehicle owners who expect
            professionalism, precision, and care with every appointment.
          </p>

          <div className="hero-buttons">
            <a
              href={SQUARE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Book Appointment
            </a>

            <a href="#services" className="secondary-button">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="hero-card-label">Featured Service</p>
          <h2>Full Interior + Exterior Detail</h2>
          <p>
            Our main complete-service option for customers who want the vehicle
            properly reset inside and out.
          </p>
        </div>
      </section>

      <TrustSection />
    </main>
  );
}