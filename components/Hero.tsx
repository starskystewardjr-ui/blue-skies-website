const SQUARE_BOOKING_URL = "https://squareup.com/appointments/book/YOUR-LINK-HERE";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          COLUMBIA COUNTY MOBILE DETAILING
        </p>

        <h1>
          Luxury Results.
          <br />
          Right At Your Home.
        </h1>

        <p className="hero-text">
          Premium mobile detailing built for vehicle owners who expect
          professionalism, precision, and respect for their investment.
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
        <p className="hero-card-label">OUR STANDARD</p>

        <h2>Your Vehicle Is An Investment.</h2>

        <p>
          Every appointment is completed with professional equipment,
          premium chemicals, and attention to detail from start to finish.
        </p>
      </div>
    </section>
  );
}