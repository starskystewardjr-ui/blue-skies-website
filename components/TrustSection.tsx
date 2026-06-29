const trustItems = [
  {
    title: "Professional Equipment",
    text: "Fully prepared mobile detailing setup brought directly to your location.",
  },
  {
    title: "Premium Products",
    text: "Quality chemicals and tools selected to protect your vehicle investment.",
  },
  {
    title: "Mobile Convenience",
    text: "No shop visit needed. We bring professional detailing to your driveway.",
  },
  {
    title: "Detail-Focused Work",
    text: "Every appointment is handled with care, precision, and respect for your property.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      {trustItems.map((item) => (
        <div className="trust-card" key={item.title}>
          <span className="trust-icon">✦</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}