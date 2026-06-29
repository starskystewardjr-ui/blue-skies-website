const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Columbia County Mobile Detailing</p>

        <h1>Luxury Results. Right At Your Home.</h1>

        <p>
          Premium mobile detailing for vehicle owners who expect precision,
          professionalism, and respect for their investment.
        </p>

        <div className="button-row">
          <a className="primary-btn" href={SQUARE_BOOKING_URL}>
            Book Appointment
          </a>

          <a className="secondary-btn" href="#services">
            View Services
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glass-card">
          <p>Blue Skies Team</p>
          <h2>Professional Mobile Detailing</h2>
          <span>Uniformed, prepared, and built around trust.</span>
        </div>
      </div>

      <a className="scroll-cue" href="#services">
        <span>↓</span>
        Scroll to Explore
      </a>
    </section>
  );
}