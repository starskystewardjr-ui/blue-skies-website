const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <h2>Ready To Book?</h2>
      <p>Schedule your professional mobile detail in minutes.</p>

      <a className="primary-btn" href={SQUARE_BOOKING_URL} target="_blank">
        Book Appointment
      </a>
    </section>
  );
}