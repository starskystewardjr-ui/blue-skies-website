const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2>Ready To Book?</h2>

        <p>
          Schedule your professional mobile detail in just a few minutes.
        </p>

        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}