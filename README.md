# Zenceil — Luxury Architectural Stretch Ceiling Systems

> **Official Website & Digital Architectural Showcase for Zenceil (Operating under Aditya Interiors, Est. 2011)**  
> Engineered Stretch Ceilings • Integrated Dynamic Lighting • High-Gloss Mirror Membranes • 3D Acoustic Form Sculpting

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)]()

---

## 🏛️ Overview

**Zenceil** is India's premier manufacturer and turnkey installer of German/French polymer stretch ceiling membranes. Operating under **Aditya Interiors**, Zenceil partners with visionary architects, interior designers, corporate real estate developers, and high-end residential owners nationwide.

This web platform showcases Zenceil's complete portfolio, proprietary finishes, technical specifications, project archive, interactive estimate calculator, and certified contact channels.

---

## 🎨 Architectural Color Palette

The site features an editorial, high-contrast, luxury architectural color system:

| Role | Color Name | Hex Code | Visual Application |
| :--- | :--- | :--- | :--- |
| **Primary Base** | Warm Beige | `#EDE7DC` | Site background, section canvas, subtle badges & card borders |
| **Primary Accent** | Espresso | `#302820` | Hero typography, section headings, primary CTA buttons, dark philosophy strip |
| **Surface & High-Contrast** | Pure White | `#FFFFFF` | Card surfaces, modals, interactive dropdown menus, button text contrast |

---

## ✨ Key Features & Solutions

- **Hero Showcase with Auto-Rotating Visuals**: High-resolution gallery featuring Translucent Daylight, High-Gloss Mirror Lacquer, Starlight Fiber-Optics, 3D Parametric Wave Ceilings, and Luxury Spa Hydrophobic Ceilings.
- **Interactive Multi-Level Dropdowns**: Accessible, fully clickable dropdown menus in the navigation bar for instant routing to ceiling categories and project classifications.
- **Ceiling Solutions Portfolio**:
  - **Translucent Ceilings**: 75% uniform light diffusion, tunable CCT backlighting.
  - **High-Gloss Lacquer Reflective Ceilings**: Optical mirror finish, visual volume expansion.
  - **Printed Ceilings**: 1440 DPI UV-curable grand format architectural graphics.
  - **Textured & Micro-Perforated Acoustic Ceilings**: NRC up to 0.85 sound dampening.
  - **3D Sculptural & Multi-Level Ceilings**: Custom CAD/CNC extruded aluminum framework.
- **Projects Showcase & Dynamic Filter**: Filter commercial, hospitality, residential, retail, and healthcare projects across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, and Goa.
- **Step-by-Step Installation Process**: Transparent 4-step engineering breakdown: Site Laser Survey, Perimeter Aluminum Framework, Harpoon Edge Thermal Stretching, and Dynamic LED Commissioning.
- **Verified Client Testimonials & Feedback Carousel**: Reviews from corporate workspace heads, luxury hoteliers, and leading architects.
- **Direct Consultation & Estimate Modal**: Instant inquiry modal with input sanitization and direct WhatsApp/Phone call integration.
- **Comprehensive SEO Infrastructure**:
  - Full OpenGraph & Twitter Card metadata.
  - Dynamic `sitemap.xml` generated via Next.js App Router (`src/app/sitemap.ts`).
  - Search engine crawler rules via `robots.txt` (`src/app/robots.ts`).
  - Google-compliant JSON-LD structured data (`HomeAndConstructionBusiness`, `Organization`, `WebSite`, `BreadcrumbList`).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Manrope)](https://fonts.google.com/specimen/Manrope)
- **Optimization**: Next.js Image Optimization (`next/image`), Webpack production build

---

## 📁 Project Directory Structure

```text
├── public/
│   ├── images/              # Optimized architectural project visuals & logos
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom Tailwind layers and CSS color variables
│   │   ├── layout.tsx       # Root layout, Google Fonts, JSON-LD Schema, SEO metadata
│   │   ├── page.tsx         # Main Landing Page
│   │   ├── robots.ts        # Dynamic robots.txt generation
│   │   ├── sitemap.ts       # Dynamic sitemap.xml generation
│   │   └── projects/
│   │       └── page.tsx     # Full Projects Archive Page
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx   # Interactive Navigation Bar with Desktop & Mobile Dropdowns
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ClientLogosSection.tsx
│   │   │   ├── WhoWeAreSection.tsx
│   │   │   ├── ExpertiseSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── InstallationSection.tsx
│   │   │   ├── BrandQuotesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── FooterSection.tsx
│   │   └── ui/
│   │       ├── Logo.tsx
│   │       └── QuoteModal.tsx
│   └── data/
│       └── zenceilData.ts   # Verified company information, products & project catalogs
├── tailwind.config.ts       # Design system tokens (Warm Beige, Espresso, Pure White)
├── tsconfig.json            # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or higher
- **npm** / **pnpm** / **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/bijayalaxmilenka2002/Zenceil-Website.git

# Enter project directory
cd Zenceil-Website

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## ☁️ Deployment on Vercel

The easiest way to deploy this Next.js project is via [Vercel](https://vercel.com):

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
2. Select **Import Git Repository** and choose `bijayalaxmilenka2002/Zenceil-Website`.
3. In **Build and Output Settings**:
   - Framework Preset: **Next.js**
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (or leave default)
   - Output Directory: `.next` (leave default)
4. Click **Deploy**. Vercel will automatically provision SSL, edge CDN caching, and deploy the application.

---

## 📞 Corporate Contact

**Zenceil (A Brand of Aditya Interiors)**  
- **Registered Office**: Unit 5 & 6, Vinayak Industrial Estate, Navghar, Vasai East, Palghar – 401208, Maharashtra, India.  
- **Branch Offices**: New Delhi • Bengaluru • Bhubaneswar  
- **Direct Phone**: [+91 9819846701](tel:+919819846701) / [+91 9892970087](tel:+919892970087)  
- **Email**: [info@zenceil.com](mailto:info@zenceil.com)  
- **Website**: [https://zenceil.com](https://zenceil.com)

---

© 2026 Zenceil. All Rights Reserved. Operating under Aditya Interiors.
