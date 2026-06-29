const services = [
  {
    tier: "Tier 1",
    name: "Premium Exterior Wash",
    label: "Exterior Maintenance",
    description: "A clean exterior refresh for vehicles that need professional upkeep.",
    prices: ["Small: $54.99", "Mid SUV: $64.99", "Large: $74.99"],
  },
  {
    tier: "Tier 2",
    name: "Maintenance Interior + Exterior",
    label: "Light Upkeep",
    description: "For already-clean vehicles that need light interior and exterior care.",
    prices: ["Small: $89.99", "Medium: $99.99", "Large: $114.99"],
  },
  {
    tier: "Tier 3",
    name: "Standard Quick Detail",
    label: "Fast Full Detail",
    description: "A professional interior and exterior reset for busy customers.",
    prices: ["Small: $169.99", "Mid SUV: $189.99", "Large: $219.99"],
  },
  {
    tier: "Tier 4",
    name: "Full Interior + Exterior Detail",
    label: "Recommended",
    description:
      "Our main complete-service option for customers who want the vehicle properly handled inside and out.",
    prices: ["Small: $249.99", "Mid SUV: $279.99", "Large: $299.99"],
    featured: true,
  },
];

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