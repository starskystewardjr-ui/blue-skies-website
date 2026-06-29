const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        <span>Blue</span> Skies
      </a>

      <nav>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-cta" href={SQUARE_BOOKING_URL} target="_blank">
        Book Now
      </a>
    </header>
  );
}