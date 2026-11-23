"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REAL_PROJECT_GALLERY, ProjectPhoto } from "@/data/zenceilData";
import { ArrowUpRight, X, Sparkles, Building2, Home, Hotel, ShoppingBag } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const ProjectsGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectPhoto | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const categories = ["All", "Commercial", "Residential", "Hospitality", "Retail"];

  const filteredProjects =
    activeCategory === "All"
      ? REAL_PROJECT_GALLERY
      : REAL_PROJECT_GALLERY.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Commercial":
        return <Building2 size={14} className="text-[#254C38]" />;
      case "Residential":
        return <Home size={14} className="text-[#254C38]" />;
      case "Hospitality":
        return <Hotel size={14} className="text-[#254C38]" />;
      case "Retail":
        return <ShoppingBag size={14} className="text-[#254C38]" />;
      default:
        return <Sparkles size={14} className="text-[#254C38]" />;
    }
  };

  return (
    <>
      <section
        id="portfolio"
        className="py-20 md:py-28 bg-[#F7F7F2] text-[#252925] border-b border-[#254C38]/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#254C38]">
                <span className="w-2 h-2 rounded-full bg-[#254C38]" />
                <span>Real Work Showcase • Zenceil Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.12]">
                Our Completed Projects Across India.
              </h2>
              <p className="text-base sm:text-lg text-[#5E645E] font-normal">
                Authentic stretch ceiling installations executed for corporate offices, luxury residences, flagship retail stores, and 5-star hotels.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#254C38] text-[#F7F7F2] shadow-sm"
                      : "bg-white/80 text-[#252925] border border-[#254C38]/15 hover:border-[#254C38]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid: 12 Real Original Photographs from zenceil.com */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-[#E8E8DF] border border-[#254C38]/15 hover:border-[#254C38]/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#252925] border border-white/40 shadow-xs">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#254C38] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* In-Card Title Info */}
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <h3 className="text-base sm:text-lg font-bold font-manrope leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 font-mono uppercase tracking-wider">
                      Zenceil Certified Installation
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/70 border border-[#254C38]/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#254C38]">
                Proven Across 7,800+ Installations
              </span>
              <h4 className="text-lg font-bold text-[#252925] font-manrope">
                Need Custom Architectural Specifications for Your Next Blueprint?
              </h4>
              <p className="text-xs text-[#5E645E]">
                We provide CAD details, lighting lumen calculations, and physical membrane sample kits directly to architects and designers.
              </p>
            </div>
            <button
              onClick={() => setQuoteOpen(true)}
              className="px-7 py-3.5 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] active:scale-95 transition shadow-sm shrink-0"
            >
              Request Spec Kit
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252925]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#F7F7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#254C38]/20">
            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#E8E8DF]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/90 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#254C38] text-xs font-mono font-semibold tracking-widest uppercase mb-2">
                  {selectedProject.category} Sector
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/80 border border-[#254C38]/10">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block">
                    Membrane System
                  </span>
                  <span className="text-sm font-bold text-[#252925] mt-1 block">
                    European Tensile Membrane
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-[#254C38]/10">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block">
                    Lighting Engine
                  </span>
                  <span className="text-sm font-bold text-[#252925] mt-1 block">
                    GOQ Korean High-Lumen LEDs
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-[#254C38]/10">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block">
                    Fire & Safety Grade
                  </span>
                  <span className="text-sm font-bold text-[#252925] mt-1 block">
                    Euroclass B-s1, d0 / ISO Compliant
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#5E645E]">
                  Designed and installed by Zenceil (Aditya Interiors, Est. 2011). Fully dust-free installation with a 10-year manufacturer warranty.
                </p>
                <div className="flex gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setQuoteOpen(true);
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] transition"
                  >
                    Inquire Similar Project
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full border border-[#254C38]/20 text-[#252925] text-xs font-semibold tracking-wider uppercase hover:bg-[#254C38]/5 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
