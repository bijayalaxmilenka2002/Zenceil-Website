"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { VERIFIED_STATISTICS } from "@/data/zenceilData";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Building2,
  Home,
  Hotel,
  ShoppingBag,
  Plane,
  Utensils
} from "lucide-react";

export const WhoWeAreSection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    VERIFIED_STATISTICS.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics counter smoothly
          const duration = 1800;
          const steps = 40;
          const intervalTime = duration / steps;
          let step = 0;

          const counter = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out

            setAnimatedValues(
              VERIFIED_STATISTICS.map((stat) =>
                Math.floor(stat.value * easeOutProgress)
              )
            );

            if (step >= steps) {
              clearInterval(counter);
              setAnimatedValues(VERIFIED_STATISTICS.map((stat) => stat.value));
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const sectorIcons: Record<string, React.ReactNode> = {
    Corporates: <Building2 size={22} />,
    Residences: <Home size={22} />,
    Hotels: <Hotel size={22} />,
    Malls: <ShoppingBag size={22} />,
    Airports: <Plane size={22} />,
    Restaurants: <Utensils size={22} />,
  };

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 bg-[#FBF9F4] text-[#1E242B] border-b border-[#0B1B33]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
        {/* Main Grid: Narrative & Authentic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#0B1B33]">
              <span className="w-2 h-2 rounded-full bg-[#0B1B33]" />
              <span>Section 03 • Brand Introduction</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-[1.15]">
              Creating Extraordinary Spaces Above You.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#5F6C7B] leading-relaxed font-normal">
              Zenceil transforms ordinary ceilings into extraordinary design experiences through innovative stretch ceiling solutions. Operating under <strong>Aditya Interiors</strong> since 2011, we combine creativity, engineering technology, and professional execution to bring your architectural vision to life.
            </p>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E242B]">
                <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                <span>10-Year Comprehensive Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E242B]">
                <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                <span>Euroclass B-s1, d0 Fire Retardant</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E242B]">
                <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                <span>Anti-Microbial &amp; 100% Moisture Proof</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E242B]">
                <CheckCircle2 size={16} className="text-[#0B1B33] shrink-0" />
                <span>Dust-Free 1–2 Day Clean Installation</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0B1B33] text-[#FBF9F4] text-xs font-semibold tracking-wider uppercase hover:bg-[#071224] border border-[#8A99AC]/30 active:scale-95 transition-all shadow-sm"
              >
                <span>Discover Products</span>
                <ArrowRight size={15} />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#5F6C7B]">
                <ShieldCheck className="text-[#0B1B33]" size={18} />
                <span>Pioneers in Architectural Membranes since 2011</span>
              </div>
            </div>
          </div>

          {/* Authentic Zenceil Project Visual from zenceil.com */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#0B1B33]/15 bg-[#E8E8DF] group">
              <Image
                src="/images/original/home-product-img.png"
                alt="Zenceil Architectural Stretch Ceiling Interior Installation"
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 shadow-lg">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1B33] block">
                  Authentic Zenceil Execution
                </span>
                <span className="text-xs text-[#1E242B] font-medium leading-relaxed">
                  Engineered membrane tension systems tailored to bespoke architectural geometries.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Company Statistics Section */}
        <div className="pt-8 sm:pt-10 border-t border-[#0B1B33]/15">
          <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0B1B33]">
                Verified Track Record
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E242B]">
                Delivering Excellence Across Sectors
              </h3>
            </div>
            <p className="text-xs text-[#5F6C7B] max-w-sm">
              Official portfolio statistics published and verified across commercial, hospitality, and luxury residences throughout India.
            </p>
          </div>

          {/* Animated Counters Grid: Responsive for mobile, tablet & desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {VERIFIED_STATISTICS.map((stat, idx) => (
              <div
                key={stat.label}
                className="group p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#0B1B33]/10 hover:border-[#8A99AC]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Subject Logo / Icon Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0B1B33]/10 text-[#0B1B33] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#0B1B33] group-hover:text-[#FBF9F4] group-hover:scale-105 transition-all duration-300 shadow-xs">
                    {sectorIcons[stat.label] || <Building2 size={20} />}
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B33] font-manrope tracking-tight">
                    {animatedValues[idx].toLocaleString()}
                    <span className="text-[#8A99AC]">{stat.suffix}</span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-[#1E242B] mt-1 font-manrope">
                    {stat.label}
                  </div>
                </div>

                <p className="text-[10px] sm:text-[11px] text-[#5F6C7B] mt-2 line-clamp-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
