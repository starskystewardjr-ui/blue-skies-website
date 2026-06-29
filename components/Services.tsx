import { services } from "../data/services";

const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-heading">
        <p className="eyebrow">Professional Detailing Packages</p>
        <h2>Choose Your Detail.</h2>
        <p>
          Tier 4 is the main full-service option. Tier 3 is the faster standard
          detail.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div
            key={service.tier}
            className={service.featured ? "service-card featured" : "service-card"}
          >
            <p className="service-label">{service.label}</p>
            <h3>{service.tier}</h3>
            <h4>{service.name}</h4>
            <p>{service.description}</p>

            <ul>
              {service.prices.map((price) => (
                <li key={price}>{price}</li>
              ))}
            </ul>

            <a href={SQUARE_BOOKING_URL} target="_blank">
              Book This Service
            </a>
          </div>
        ))}
      </div>

      <p className="minimum-note">
        Minimum on-site service requirement may apply.
      </p>
    </section>
  );
}