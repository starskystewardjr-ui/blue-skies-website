const galleryImages = [
  { src: "/IMG_2693.jpeg", label: "Raptor Exterior" },
  { src: "/IMG_7120.jpeg", label: "Luxury SUV Detail" },
  { src: "/IMG_3183.jpeg", label: "Motorcycle Detail" },
  { src: "/IMG_7068.jpeg", label: "Interior Reset" },
  { src: "/IMG_7123.jpeg", label: "Luxury Interior" },
  { src: "/IMG_2768.jpeg", label: "Red Leather Interior" },
  { src: "/IMG_6772.jpeg", label: "Driveway Service" },
  { src: "/IMG_6774.jpeg", label: "Mobile Detailing In Action" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-heading">
        <p className="eyebrow">Our Work</p>
        <h2>Results Built To Be Seen.</h2>
        <p>Real mobile detailing work from Blue Skies.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            style={{ backgroundImage: `url('${image.src}')` }}
          >
            {image.label}
          </div>
        ))}
      </div>
    </section>
  );
}