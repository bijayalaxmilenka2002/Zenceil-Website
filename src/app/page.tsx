import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { InstallationSection } from "@/components/sections/InstallationSection";
import { BrandQuotesSection } from "@/components/sections/BrandQuotesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#252925]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* SECTION 01: HERO SECTION */}
      <HeroSection />

      {/* SECTION 02: CLIENT LOGO SLIDER */}
      <ClientLogosSection />

      {/* SECTION 03: WHO WE ARE */}
      <WhoWeAreSection />

      {/* SECTION 04: OUR EXPERTISE / ABOUT OUR SOLUTIONS */}
      <ExpertiseSection />

      {/* SECTION 05: OUR PRODUCTS */}
      <ProductsSection />

      {/* SECTION 06: INSTALLATION PROCESS */}
      <InstallationSection />

      {/* SECTION 07: BRAND QUOTES / VALUE PROPOSITION */}
      <BrandQuotesSection />

      {/* SECTION 08: CUSTOMER TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 09: FOOTER */}
      <FooterSection />
    </main>
  );
}
