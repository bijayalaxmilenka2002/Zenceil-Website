import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

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

          {/* Headline & Narrative */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#254C38]/10 text-xs font-bold uppercase tracking-widest text-[#254C38]">
              <Sparkles size={13} />
              <span>Zenceil Architectural Archive • 36 Installations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#252925] tracking-tight font-manrope leading-[1.1]">
              Every Space Tells an Architectural Story.
            </h1>

            <p className="text-base sm:text-lg text-[#5E645E] leading-relaxed">
              Operating under <strong>Aditya Interiors</strong> since 2011, Zenceil designs, manufactures, and installs bespoke stretch ceiling membranes across India. Explore our comprehensive portfolio categorized across corporate headquarters, luxury villas, flagship retail, 5-star hospitality, and parametric 3D acoustic forms.
            </p>
          </div>

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
      </section>

      {/* FULL PORTFOLIO GALLERY (ALL 36 PROJECTS + CATEGORY FILTERS + SECTION SHOWCASE + LIGHTBOX) */}
      <ProjectsSection preview={false} />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
