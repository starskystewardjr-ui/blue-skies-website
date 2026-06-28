import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Skies Mobile Wash & Home Care",
  description:
    "Professional Mobile Detailing serving Columbia County and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}