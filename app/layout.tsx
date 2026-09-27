import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Karla({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: { default: "Stem & Soil", template: "%s · Stem & Soil" },
  description: "Florist template for seasonal arrangements and local delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
