const BOOKING_URL =
  "https://book.squareup.com/appointments/e4u4kj67uec46l/location/L1K4ZCSWWNRA5/services";

export default function FloatingCTA() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
        background: "linear-gradient(90deg,#00B7FF,#19D5FF)",
        color: "#fff",
        padding: "16px 28px",
        borderRadius: "999px",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 12px 40px rgba(0,183,255,.45)",
        transition: ".25s"
      }}
    >
      Book Now →
    </a>
  );
}