import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenceil | Premium Stretch Ceiling Solutions & Architectural Interiors",
  description:
    "Transform ordinary ceilings into extraordinary design experiences. Zenceil specializes in translucent, printed, textured, lacquer, and 3D form stretch ceilings for luxury residences, commercial headquarters, hotels, and retail spaces.",
  keywords: [
    "Stretch Ceilings",
    "Translucent Ceilings",
    "Acoustic Ceilings",
    "3D Form Ceilings",
    "Printed Ceilings",
    "Lacquer Ceilings",
    "Architectural Lighting",
    "Interior Design Mumbai",
    "Zenceil",
    "Aditya Interiors",
  ],
  authors: [{ name: "Zenceil Stretch Ceiling" }],
  openGraph: {
    title: "Zenceil | Premium Architectural Stretch Ceilings",
    description:
      "Creating extraordinary spaces above you. Clean, dust-free installation in as little as one day.",
    url: "https://zenceil.com",
    siteName: "Zenceil",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#252925] antialiased selection:bg-[#254C38] selection:text-[#F7F7F2]">
        {children}
      </body>
    </html>
  );
}
