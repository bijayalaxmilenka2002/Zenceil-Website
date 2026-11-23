import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects & Architectural Portfolio (36 Installations)",
  description:
    "Explore 36 landmark stretch ceiling installations executed by Zenceil (Aditya Interiors, Est. 2011) across corporate towers, luxury residences, retail gallerias, and 5-star hospitality throughout India.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Projects Portfolio | Zenceil Stretch Ceiling",
    description:
      "Explore 36 authentic stretch ceiling installations executed across India by Aditya Interiors.",
    url: "https://zenceil.com/projects",
    images: ["/images/projects-hero-visual.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Completed Projects Portfolio | Zenceil Stretch Ceiling",
    description:
      "36 authentic stretch ceiling installations executed across India by Aditya Interiors.",
    images: ["/images/projects-hero-visual.jpg"],
  },
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialCategory = resolvedParams?.category;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://zenceil.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects Portfolio",
        item: "https://zenceil.com/projects",
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#1E242B]">
      {/* Schema Markup for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Projects Dedicated Hero Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 bg-[#FBF9F4] border-b border-[#0B1B33]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-6">
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#5F6C7B] hover:text-[#0B1B33] transition-colors font-medium group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[#5F6C7B]/40">/</span>
            <span className="text-[#0B1B33] font-bold">Projects Portfolio</span>
          </div>

          {/* 2-Column Architectural Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & Tech Assurance */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B33]/10 text-xs font-bold uppercase tracking-widest text-[#0B1B33] border border-[#0B1B33]/15">
                <Sparkles size={13} className="text-[#8A99AC]" />
                <span>Zenceil Architectural Archive • 36 Installations</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[52px] font-extrabold text-[#1E242B] tracking-tight font-manrope leading-[1.12]">
                Every Space Tells an Architectural Story.
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#5F6C7B] leading-relaxed">
                Operating under <strong>Aditya Interiors</strong> since 2011, Zenceil designs, manufactures, and installs bespoke stretch ceiling membranes across India. Explore our comprehensive portfolio categorized across corporate headquarters, luxury villas, flagship retail, 5-star hospitality, and parametric 3D acoustic forms.
              </p>

              {/* Technical Assurance Pillars - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#0B1B33]/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E242B]">
                  <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                  <span>36 Landmark Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E242B]">
                  <ShieldCheck size={16} className="text-[#0B1B33] shrink-0" />
                  <span>10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E242B]">
                  <Building2 size={16} className="text-[#0B1B33] shrink-0" />
                  <span>5 Industry Sectors</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E242B]">
                  <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                  <span>Pan-India Execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Visual */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#0B1B33]/15 bg-[#E8E8DF] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-1000 before:z-20">
                <Image
                  src="/images/projects-hero-visual.jpg"
                  alt="Zenceil Architectural Stretch Ceiling Engineering Visual"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />

                {/* Ambient Balanced Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/85 via-[#0B1B33]/25 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Overhead Ceiling Live Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B33]/85 backdrop-blur-md text-[11px] font-semibold text-[#FBF9F4] border border-white/20 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A99AC] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>Parametric Acoustic Membrane</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1">
                  <span className="text-[10px] font-mono text-[#D8DFE8] font-semibold uppercase tracking-wider block">
                    Turnkey Architectural Engineering
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-manrope leading-snug drop-shadow-md">
                    Seamless Luminous Ceiling Membrane
                  </h4>
                  <p className="text-[11px] text-white/80 font-normal">
                    Aditya Interiors • Engineered for Landmark Atriums
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL PORTFOLIO GALLERY */}
      <ProjectsSection preview={false} initialCategory={initialCategory} />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
