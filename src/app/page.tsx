import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { InstallationSection } from "@/components/sections/InstallationSection";
import { BrandQuotesSection } from "@/components/sections/BrandQuotesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { TimedLeadModal } from "@/components/ui/TimedLeadModal";
import { ARCHITECTURAL_FAQS } from "@/data/zenceilData";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ARCHITECTURAL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#EDE7DC] text-[#302820]">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* SECTION 01: HERO SECTION */}
      <HeroSection />

      {/* SECTION 02: CLIENT LOGO SLIDER */}
      <ClientLogosSection />

      {/* SECTION 03: WHO WE ARE (ADITYA INTERIORS EST. 2011 & VERIFIED NUMBERS) */}
      <WhoWeAreSection />

      {/* SECTION 04: OUR EXPERTISE / ARCHITECTURAL CAPABILITIES */}
      <ExpertiseSection />

      {/* SECTION 05: OUR PRODUCTS (TRANSLUCENT, PRINTED, TEXTURE, LACQUER, 3D FORM) */}
      <ProductsSection />

      {/* SECTION 06: OUR WORK & REAL PROJECTS PREVIEW (6 CURATED PROJECTS + REDIRECT TO FULL GALLERY) */}
      <ProjectsSection preview={true} />

      {/* SECTION 07: INSTALLATION PROCESS (4-STEP TIMELINE) */}
      <InstallationSection />

      {/* SECTION 08: BRAND QUOTES / VALUE PROPOSITION */}
      <BrandQuotesSection />

      {/* SECTION 09: CUSTOMER TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 10: ARCHITECTURAL FAQS & SPECIFICATIONS */}
      <FAQSection />

      {/* SECTION 11: FOOTER */}
      <FooterSection />

      {/* 1-MINUTE TIMED LEAD INQUIRY MODAL WITH TOP-RIGHT CUT/DISMISS */}
      <TimedLeadModal delayMs={60000} />
    </main>
  );
}
