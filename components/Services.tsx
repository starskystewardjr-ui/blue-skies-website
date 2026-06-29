import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <p className="services-eyebrow">PROFESSIONAL DETAILING PACKAGES</p>

        <h2>
          Choose The Service
          <br />
          That's Right For You
        </h2>

        <p className="services-description">
          Tier 4 is our main full-detail option. Tier 3 is built for customers
          who want a faster standard detail.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            className={
              service.featured ? "service-card service-card-featured" : "service-card"
            }
            key={service.tier}
          >
            <p className="service-label">{service.label}</p>
            <h3>{service.tier}</h3>
            <h4>{service.name}</h4>
            <p className="service-description">{service.description}</p>

            <ul className="service-prices">
              {service.prices.map((price) => (
                <li key={price}>{price}</li>
              ))}
            </ul>

            {service.featured && <p className="featured-note">Best full-service choice</p>}
          </div>
        ))}
      </div>
    </section>
  );
}