const galleryImages = [
  { src: "/IMG_2372.jpeg", label: "Blue Skies Team", className: "gallery-team" },
  { src: "/IMG_2693.jpeg", label: "Raptor Exterior", className: "gallery-wide" },
  { src: "/IMG_7120.jpeg", label: "Luxury SUV Detail", className: "gallery-wide" },
  { src: "/IMG_7068.jpeg", label: "Interior Reset", className: "gallery-tall" },
  { src: "/IMG_7123.jpeg", label: "Luxury Interior", className: "gallery-tall" },
  { src: "/IMG_2768.jpeg", label: "Red Leather Interior", className: "gallery-tall" },
  { src: "/IMG_3183.jpeg", label: "Motorcycle Detail", className: "gallery-wide" },
  { src: "/IMG_6774.jpeg", label: "Mobile Detailing In Action", className: "gallery-tall" },
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
            className={image.className}
            style={{ backgroundImage: `url('${image.src}')` }}
          >
            <span>{image.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}