import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Blue Skies Mobile Wash & Home Care | Mobile Detailing in Bloomsburg, PA",

  description:
    "Premium mobile detailing serving Columbia County and surrounding areas. Exterior washes, deep interior details, premium detailing, and ceramic protection.",

  keywords: [
    "Blue Skies Mobile Wash",
    "Blue Skies Mobile Wash & Home Care",
    "Starsky Steward",
    "Starsky Steward Jr.",
    "mobile detailing",
    "mobile car detailing",
    "car detailing Bloomsburg",
    "Bloomsburg PA detailing",
    "Columbia County detailing",
    "professional detailing",
  ],

  authors: [
    {
      name: "Starsky Steward Jr.",
    },
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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