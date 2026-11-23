import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects & Architectural Portfolio | Zenceil Stretch Ceiling",
  description:
    "Explore 36 authentic stretch ceiling installations executed by Zenceil (Aditya Interiors, Est. 2011) across corporate towers, luxury residences, retail gallerias, and 5-star hospitality throughout India.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#252925]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Projects Dedicated Hero Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#F7F7F2] border-b border-[#254C38]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#5E645E] hover:text-[#254C38] transition-colors font-medium group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[#5E645E]/40">/</span>
            <span className="text-[#254C38] font-bold">Projects Portfolio</span>
          </div>

          {/* 2-Column Architectural Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & Tech Assurance */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#254C38]/10 text-xs font-bold uppercase tracking-widest text-[#254C38]">
                <Sparkles size={13} />
                <span>Zenceil Architectural Archive • 36 Installations</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#252925] tracking-tight font-manrope leading-[1.08]">
                Every Space Tells an Architectural Story.
              </h1>

              <p className="text-base sm:text-lg text-[#5E645E] leading-relaxed">
                Operating under <strong>Aditya Interiors</strong> since 2011, Zenceil designs, manufactures, and installs bespoke stretch ceiling membranes across India. Explore our comprehensive portfolio categorized across corporate headquarters, luxury villas, flagship retail, 5-star hospitality, and parametric 3D acoustic forms.
              </p>

              {/* Technical Assurance Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#254C38]/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#252925]">
                  <CheckCircle2 size={16} className="text-[#254C38] shrink-0" />
                  <span>36 Landmark Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#252925]">
                  <ShieldCheck size={16} className="text-[#254C38] shrink-0" />
                  <span>10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#252925]">
                  <Building2 size={16} className="text-[#254C38] shrink-0" />
                  <span>5 Industry Sectors</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#252925]">
                  <CheckCircle2 size={16} className="text-[#254C38] shrink-0" />
                  <span>Pan-India Execution</span>
                </div>
              </div>
            </div>

            {/* Right Column: AI Architectural Ceiling Visual Describing Projects */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#254C38]/15 bg-[#E8E8DF] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-1000 before:z-20">
                <Image
                  src="/images/projects-hero-visual.jpg"
                  alt="Zenceil Architectural Stretch Ceiling Engineering Visual"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />

                {/* Subtle Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/85 via-[#252925]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Overhead Ceiling Live Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252925]/85 backdrop-blur-md text-[11px] font-semibold text-[#F7F7F2] border border-white/20 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>Parametric Acoustic Membrane</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold uppercase tracking-wider block">
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

      {/* FULL PORTFOLIO GALLERY (ALL 36 PROJECTS + CATEGORY FILTERS + SECTION SHOWCASE + LIGHTBOX) */}
      <ProjectsSection preview={false} />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
