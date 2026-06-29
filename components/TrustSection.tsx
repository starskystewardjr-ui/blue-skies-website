const items = [
  ["Professional Equipment", "A prepared mobile detailing setup brought to you."],
  ["Premium Products", "Quality tools and chemicals selected for your vehicle."],
  ["Mobile Convenience", "No shop visit. We come directly to your driveway."],
  ["Detail-Focused Work", "Care, precision, and respect from start to finish."],
];

export default function TrustSection() {
  return (
    <section className="trust">
      {items.map(([title, text]) => (
        <div className="trust-card" key={title}>
          <span>✦</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}