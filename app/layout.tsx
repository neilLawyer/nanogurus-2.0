import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NanoGurus 2.0 — FTC #30682",
    template: "%s | NanoGurus 2.0",
  },
  description:
    "NanoGurus 2.0, FTC Team #30682, based in Morris Plains, NJ. Building robots, building character.",
  keywords: ["FTC", "FIRST Tech Challenge", "robotics", "NanoGurus", "Morris Plains", "NJ"],
  openGraph: {
    title: "NanoGurus 2.0 — FTC #30682",
    description: "Building Robots. Building Character.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F9F9F7] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
