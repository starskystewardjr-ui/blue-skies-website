import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Skies Mobile Wash & Home Care | Starsky Steward Jr.",
  description:
    "Premium mobile detailing in Columbia County, Bloomsburg, Berwick, Danville, Catawissa, Benton, Millville, and surrounding Pennsylvania areas. Founded by Starsky Steward Jr.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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