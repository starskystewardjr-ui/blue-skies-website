const SQUARE_BOOKING_URL = "https://squareup.com/appointments/book/YOUR-LINK-HERE";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        Blue Skies
      </a>

      <nav className="navbar-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href={SQUARE_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-button"
      >
        Book Now
      </a>
    </header>
  );
}