import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1B33", // Royal Architectural Navy
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zenceil.com"),
  title: {
    default: "Zenceil | Premium Stretch Ceiling Solutions & Architectural Interiors",
    template: "%s | Zenceil Stretch Ceiling",
  },
  description:
    "Transform ordinary ceilings into visionary design experiences. Zenceil (Aditya Interiors, Est. 2011) specializes in translucent, UV printed, textured acoustic, high-gloss mirror lacquer, and parametric 3D form stretch ceiling systems across India.",
  keywords: [
    "Stretch Ceilings",
    "Stretch Ceilings India",
    "Stretch Ceiling Mumbai",
    "Translucent Ceilings",
    "Acoustic Ceilings",
    "3D Form Ceilings",
    "Printed Ceilings",
    "Lacquer Ceilings",
    "Mirror Ceilings",
    "Architectural Lighting",
    "GOQ LED Daylighting",
    "Interior Design Mumbai",
    "Zenceil",
    "Aditya Interiors",
  ],
  authors: [{ name: "Zenceil Stretch Ceiling", url: "https://zenceil.com" }],
  creator: "Aditya Interiors",
  publisher: "Zenceil",
  category: "Interior Design & Architecture",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zenceil | Premium Architectural Stretch Ceilings",
    description:
      "Creating extraordinary spaces above you. Clean, dust-free installation in as little as one day with 10-year warranty.",
    url: "https://zenceil.com",
    siteName: "Zenceil Stretch Ceiling",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-1-translucent.jpg",
        width: 1200,
        height: 630,
        alt: "Zenceil Architectural Stretch Ceiling Interior Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenceil | Premium Architectural Stretch Ceilings",
    description:
      "Pioneers in high-precision stretch ceiling membranes, integrated daylighting, and acoustic architectural systems across India.",
    images: ["/images/hero-1-translucent.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  // Rich Structured Data Schema (JSON-LD) for LocalBusiness & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://zenceil.com/#organization",
        name: "Zenceil Stretch Ceiling - Aditya Interiors",
        legalName: "Aditya Interiors",
        foundingDate: "2011",
        url: "https://zenceil.com",
        logo: "https://zenceil.com/images/zenceil-logo.png",
        image: "https://zenceil.com/images/hero-1-translucent.jpg",
        description:
          "Zenceil designs, manufactures, and installs bespoke stretch ceiling systems across India including translucent daylighting, mirror lacquer, UV prints, textured acoustic reliefs, and 3D wave forms.",
        telephone: ["+91 9819846701", "+91 9892970087"],
        email: "info@zenceil.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Unit 5 & 6, Vinayak Ind. Estate, Vasai East",
          addressLocality: "Palghar, Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "401208",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "19.3800",
          longitude: "72.8500",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "$$$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/zenceilstretchceiling",
          "https://www.instagram.com/zenceil_stretch_ceiling/",
          "https://www.linkedin.com/company/zenceil-stretch-ceiling/",
          "https://www.youtube.com/@stretchceilinginteriors7362",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://zenceil.com/#website",
        url: "https://zenceil.com",
        name: "Zenceil Stretch Ceiling",
        publisher: {
          "@id": "https://zenceil.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#1E242B] antialiased selection:bg-[#0B1B33] selection:text-[#FBF9F4]">
        {children}
      </body>
    </html>
  );
}
