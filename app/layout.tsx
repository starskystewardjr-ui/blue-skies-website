import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Skies Mobile Wash & Home Care",
  description:
    "Premium mobile detailing serving Columbia County and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}