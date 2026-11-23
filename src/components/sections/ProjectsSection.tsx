"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { REAL_PROJECT_GALLERY, ProjectPhoto } from "@/data/zenceilData";
import { 
  ArrowUpRight, 
  ArrowRight, 
  X, 
  Building2, 
  Home, 
  Hotel, 
  ShoppingBag, 
  Box, 
  MapPin, 
  Zap, 
  Layers,
  Sparkles
} from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";

interface ProjectsSectionProps {
  preview?: boolean;
}

// 6 HIGHLY IN-DEMAND PRODUCTS WITH CURATED SPECIFICATIONS & ANIMATIONS
const IN_DEMAND_META = [
  {
    id: "proj-1",
    demandTag: "Commercial Benchmark",
    demandCategory: "Translucent Light",
    featureKey: "95+ CRI Uniform Daylighting",
  },
  {
    id: "proj-18",
    demandTag: "#1 Luxury Residential Trend",
    demandCategory: "Mirror Lacquer",
    featureKey: "85%+ Visual Optical Reflection",
  },
  {
    id: "proj-32",
    demandTag: "Architectural Flagship",
    demandCategory: "3D Wave Form",
    featureKey: "Compound Curvature & Acoustics",
  },
  {
    id: "proj-24",
    demandTag: "Bespoke Art Statement",
    demandCategory: "Printed Canvas",
    featureKey: "UV Printed Art + Starlight Fiber",
  },
  {
    id: "proj-10",
    demandTag: "High-Traffic Retail",
    demandCategory: "Floating Halo",
    featureKey: "Large-Span Floating Halo Ring Light",
  },
  {
    id: "proj-26",
    demandTag: "100% Moisture Proof",
    demandCategory: "Spa & Wellness",
    featureKey: "Steam & Humidity Immune • Zero Sagging",
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ preview = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [inDemandFilter, setInDemandFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectPhoto | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "sections">("grid");

  const categories = [
    { id: "All", label: "All Projects", count: REAL_PROJECT_GALLERY.length },
    { id: "Commercial", label: "Commercial & Corporate", count: REAL_PROJECT_GALLERY.filter(p => p.category === "Commercial").length },
    { id: "Retail", label: "Retail & Malls", count: REAL_PROJECT_GALLERY.filter(p => p.category === "Retail").length },
    { id: "Residential", label: "Luxury Residential", count: REAL_PROJECT_GALLERY.filter(p => p.category === "Residential").length },
    { id: "Hospitality", label: "Hospitality & Spas", count: REAL_PROJECT_GALLERY.filter(p => p.category === "Hospitality").length },
    { id: "3D & Acoustic", label: "3D & Acoustic Forms", count: REAL_PROJECT_GALLERY.filter(p => p.category === "3D & Acoustic").length },
  ];

  const sectionsList: Array<{
    id: ProjectPhoto["category"];
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  }> = [
    {
      id: "Commercial",
      title: "Commercial Headquarters & Innovation Hubs",
      subtitle: "Corporate campuses, executive boardrooms, and international aviation terminals across India.",
      icon: <Building2 className="text-[#254C38]" size={18} />,
    },
    {
      id: "Retail",
      title: "Flagship Retail Gallerias & Malls",
      subtitle: "Atrium wave canopies, luxury fashion boutiques, and high-CRI beauty showrooms.",
      icon: <ShoppingBag className="text-[#254C38]" size={18} />,
    },
    {
      id: "Residential",
      title: "Bespoke Residences & Sky Villas",
      subtitle: "Double-height living rooms, mirror lacquer penthouses, and private home cinema acoustics.",
      icon: <Home className="text-[#254C38]" size={18} />,
    },
    {
      id: "Hospitality",
      title: "5-Star Hotels, Wellness Spas & Fine Dining",
      subtitle: "Grand hotel atriums, moisture-proof hydrotherapy spas, and intimate acoustic dining ceilings.",
      icon: <Hotel className="text-[#254C38]" size={18} />,
    },
    {
      id: "3D & Acoustic",
      title: "Parametric 3D Forms & Acoustic Canopies",
      subtitle: "Structural compound curvature, multi-level fluid wave canopies, and suspended halo rings.",
      icon: <Box className="text-[#254C38]" size={18} />,
    },
  ];

  // In preview mode: populate the 6 highly in-demand products with metadata safely
  const inDemandProjects = IN_DEMAND_META.map((meta) => {
    const found = REAL_PROJECT_GALLERY.find((p) => p.id === meta.id) || REAL_PROJECT_GALLERY[0];
    return {
      ...found,
      ...meta,
    };
  });

  const displayedPreviewProjects =
    inDemandFilter === "All"
      ? inDemandProjects
      : inDemandProjects.filter((p) => p.demandCategory === inDemandFilter);

  // In full mode: filter according to category
  const filteredProjects =
    activeCategory === "All"
      ? REAL_PROJECT_GALLERY
      : REAL_PROJECT_GALLERY.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Commercial":
        return <Building2 size={13} className="text-[#254C38]" />;
      case "Residential":
        return <Home size={13} className="text-[#254C38]" />;
      case "Hospitality":
        return <Hotel size={13} className="text-[#254C38]" />;
      case "Retail":
        return <ShoppingBag size={13} className="text-[#254C38]" />;
      case "3D & Acoustic":
        return <Box size={13} className="text-[#254C38]" />;
      default:
        return <Building2 size={13} className="text-[#254C38]" />;
    }
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 md:py-28 bg-[#F7F7F2] text-[#252925] border-b border-[#254C38]/10 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#254C38]">
                <span className="w-2 h-2 rounded-full bg-[#254C38] animate-pulse" />
                <span>
                  {preview
                    ? "Featured Portfolio • Most In-Demand Architectural Products"
                    : "Complete Architectural Portfolio (36 Verified Projects)"}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.12]">
                Crafted for Visionary Spaces.
              </h2>
              <p className="text-base sm:text-lg text-[#5E645E] font-normal">
                {preview
                  ? "Explore our most requested stretch ceiling systems across commercial headquarters, luxury penthouses, flagship retail, and wellness spas."
                  : "Authentic stretch ceiling installations executed by Zenceil across corporate towers, luxury residences, retail gallerias, and 5-star hotels throughout India."}
              </p>
            </div>

            {/* PREVIEW MODE: Direct Link to Full Projects */}
            {preview && (
              <div className="self-start md:self-end">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#254C38]/20 text-xs font-bold text-[#254C38] hover:bg-[#254C38] hover:text-[#F7F7F2] transition-all shadow-xs group cursor-pointer"
                >
                  <span>Explore All 36 Projects</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}

            {/* FULL MODE: View Switcher */}
            {!preview && (
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/80 border border-[#254C38]/15 self-start md:self-end shadow-xs">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-[#254C38] text-[#F7F7F2] shadow-xs"
                      : "text-[#5E645E] hover:text-[#252925]"
                  }`}
                >
                  Filtered Grid ({REAL_PROJECT_GALLERY.length})
                </button>
                <button
                  onClick={() => setViewMode("sections")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    viewMode === "sections"
                      ? "bg-[#254C38] text-[#F7F7F2] shadow-xs"
                      : "text-[#5E645E] hover:text-[#252925]"
                  }`}
                >
                  Section-by-Section
                </button>
              </div>
            )}
          </div>

          {/* PREVIEW MODE: Interactive Filter Tabs for High-Demand Products */}
          {preview && (
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <button
                onClick={() => setInDemandFilter("All")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  inDemandFilter === "All"
                    ? "bg-[#254C38] text-[#F7F7F2] shadow-sm"
                    : "bg-white/80 text-[#252925] border border-[#254C38]/15 hover:border-[#254C38]/40"
                }`}
              >
                <span>All In-Demand (6)</span>
              </button>

              {IN_DEMAND_META.map((meta) => (
                <button
                  key={meta.demandCategory}
                  onClick={() => setInDemandFilter(meta.demandCategory)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    inDemandFilter === meta.demandCategory
                      ? "bg-[#254C38] text-[#F7F7F2] shadow-sm font-semibold"
                      : "bg-white/80 text-[#5E645E] border border-[#254C38]/10 hover:text-[#252925] hover:border-[#254C38]/30"
                  }`}
                >
                  <span>{meta.demandCategory}</span>
                </button>
              ))}
            </div>
          )}

          {/* FULL MODE ONLY: Category Filter Pills */}
          {!preview && viewMode === "grid" && (
            <div className="flex items-center gap-2 flex-wrap pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? "bg-[#254C38] text-[#F7F7F2] shadow-sm"
                      : "bg-white/80 text-[#252925] border border-[#254C38]/15 hover:border-[#254C38]/40"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-[#254C38]/10 text-[#254C38]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* PREVIEW MODE: HIGH-DEMAND ANIMATED CARD SHOWCASE */}
          {preview && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedPreviewProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-3xl overflow-hidden bg-[#E8E8DF] border border-[#254C38]/15 hover:border-[#254C38]/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-1000 before:z-20"
                >
                  {/* Image Aspect Box - Always Preserves Overhead Rooftop & Ceiling View */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Ambient Lighting Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/95 via-[#252925]/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                    {/* In-Demand Live Pulse Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252925]/85 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20 shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span>{project.demandTag}</span>
                    </div>

                    {/* Quick View Button */}
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#254C38] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <ArrowUpRight size={16} />
                    </div>

                    {/* In-Card Title Info: Main Subject Line First, Location Underneath */}
                    <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold font-manrope leading-snug drop-shadow-md">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-[11px] text-white/85 font-medium">
                        <MapPin size={12} className="text-emerald-300 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FULL MODE ONLY: GRID VIEW (ALL 36 PROJECTS) */}
          {!preview && viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-3xl overflow-hidden bg-[#E8E8DF] border border-[#254C38]/15 hover:border-[#254C38]/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/90 via-[#252925]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#252925] border border-white/40 shadow-xs">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#254C38] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight size={16} />
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold font-manrope leading-snug drop-shadow-md">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-white/85 font-medium">
                        <MapPin size={12} className="text-emerald-300 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PREVIEW MODE: MORE PROJECTS REDIRECT BANNER */}
          {preview && (
            <div className="mt-8 p-8 sm:p-10 rounded-3xl bg-white border border-[#254C38]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#254C38]/10 text-xs font-semibold text-[#254C38] tracking-wide">
                  <Layers size={13} />
                  <span>36 Realized Projects Across 5 Sectors</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#252925] font-manrope">
                  Want to explore our complete portfolio?
                </h3>
                <p className="text-xs sm:text-sm text-[#5E645E] max-w-xl">
                  Discover all 36 authentic stretch ceiling installations across Commercial Towers, Luxury Sky Villas, Flagship Malls, 5-Star Hotels, and 3D Acoustic Forms.
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-[#1a3627] active:scale-95 transition-all shadow-md shrink-0 group cursor-pointer"
              >
                <span>View Complete Projects (36)</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {/* FULL MODE ONLY: SECTION-WISE ARCHITECTURAL SHOWCASE */}
          {!preview && viewMode === "sections" && (
            <div className="space-y-16">
              {sectionsList.map((sec, secIdx) => {
                const secProjects = REAL_PROJECT_GALLERY.filter((p) => p.category === sec.id);
                return (
                  <div key={sec.id} className="space-y-6 pt-6 first:pt-0 border-t first:border-t-0 border-[#254C38]/15">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#254C38]">
                          {sec.icon}
                          <span>Section 0{secIdx + 1} • {sec.id} Sector</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252925] font-manrope">
                          {sec.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5E645E]">
                          {sec.subtitle}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#254C38]/10 text-xs font-mono font-bold text-[#254C38] self-start md:self-end">
                        {secProjects.length} Verified Installations
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {secProjects.map((project) => (
                        <div
                          key={project.id}
                          onClick={() => setSelectedProject(project)}
                          className="group relative rounded-3xl overflow-hidden bg-[#E8E8DF] border border-[#254C38]/15 hover:border-[#254C38]/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/90 via-[#252925]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#252925] border border-white/40 shadow-xs">
                              <MapPin size={11} className="text-[#254C38]" />
                              <span>{project.location.split(",")[0]}</span>
                            </div>

                            <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#254C38] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                              <ArrowUpRight size={16} />
                            </div>

                            <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1">
                              <h4 className="text-base sm:text-lg font-bold font-manrope leading-snug drop-shadow-md">
                                {project.title}
                              </h4>
                              <div className="flex items-center gap-1.5 text-[11px] text-white/85 font-medium">
                                <MapPin size={12} className="text-emerald-300 shrink-0" />
                                <span className="truncate">{project.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* FULL MODE ONLY: Spec & Inquiry Footer Banner */}
          {!preview && (
            <div className="p-6 md:p-8 rounded-3xl bg-white/80 border border-[#254C38]/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#254C38]">
                  Enterprise &amp; Residential Execution
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#252925] font-manrope">
                  Need CAD Drawings or Lumen Specifications for Your Project?
                </h4>
                <p className="text-xs text-[#5E645E]">
                  We partner with architects, interior designers, commercial developers, and homeowners nationwide.
                </p>
              </div>
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] active:scale-95 transition shadow-sm shrink-0 cursor-pointer"
              >
                Request Spec Consultation
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Full-Screen Project Lightbox Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252925]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F7F7F2] rounded-3xl shadow-2xl border border-[#254C38]/20">
            {/* Modal Image Header */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#E8E8DF]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-center"
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
                  {selectedProject.category} Sector • Zenceil Certified
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-[#254C38]/10 space-y-1">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#254C38]" /> Location
                  </span>
                  <span className="text-sm font-bold text-[#252925] block">
                    {selectedProject.location}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#254C38]/10 space-y-1">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block flex items-center gap-1.5">
                    <Box size={12} className="text-[#254C38]" /> Ceiling System
                  </span>
                  <span className="text-sm font-bold text-[#252925] block">
                    {selectedProject.system}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#254C38]/10 space-y-1">
                  <span className="text-[11px] font-mono text-[#5E645E] uppercase block flex items-center gap-1.5">
                    <Zap size={12} className="text-[#254C38]" /> Lighting Engine
                  </span>
                  <span className="text-sm font-bold text-[#252925] block">
                    {selectedProject.lighting || "Korean GOQ High-CRI LED Modules"}
                  </span>
                </div>
              </div>

              {selectedProject.description && (
                <div className="p-4 rounded-2xl bg-[#254C38]/5 border border-[#254C38]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#254C38] mb-1">
                    Architectural Execution Details
                  </h4>
                  <p className="text-xs sm:text-sm text-[#252925] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#5E645E]">
                  Designed and installed by Zenceil (Aditya Interiors, Est. 2011). Fully dust-free installation with a 10-year manufacturer warranty.
                </p>
                <div className="flex gap-3 shrink-0 w-full sm:w-auto">
                  {preview && (
                    <Link
                      href="/projects"
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-full bg-[#254C38]/10 text-[#254C38] hover:bg-[#254C38] hover:text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase transition flex items-center gap-2"
                    >
                      <span>All 36 Projects</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setQuoteOpen(true);
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] transition cursor-pointer"
                  >
                    Inquire Similar Project
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-full border border-[#254C38]/20 text-[#252925] text-xs font-semibold tracking-wider uppercase hover:bg-[#254C38]/5 transition cursor-pointer"
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
