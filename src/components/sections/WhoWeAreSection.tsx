"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { VERIFIED_STATISTICS } from "@/data/zenceilData";
import { ArrowRight, ShieldCheck } from "lucide-react";

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

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F7F7F2] text-[#252925] border-b border-[#254C38]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Main Grid: Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#254C38]">
              <span className="w-2 h-2 rounded-full bg-[#254C38]" />
              <span>Section 03 • Brand Introduction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.12]">
              Creating Extraordinary Spaces Above You.
            </h2>

            <p className="text-base sm:text-lg text-[#5E645E] leading-relaxed font-normal">
              Zenceil transforms ordinary ceilings into extraordinary design experiences through innovative stretch ceiling solutions. We combine creativity, technology and professional execution to bring your interior vision to life.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] active:scale-95 transition-all shadow-sm"
              >
                <span>Discover Zenceil</span>
                <ArrowRight size={15} />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#5E645E]">
                <ShieldCheck className="text-[#254C38]" size={18} />
                <span>Operating under Aditya Interiors since 2011</span>
              </div>
            </div>
          </div>

          {/* Premium Architectural Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#254C38]/15 bg-[#E8E8DF] group">
              <Image
                src="/images/who-we-are.jpg"
                alt="Zenceil Architectural Stretch Ceiling Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/20">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#254C38] block">
                  Authentic Execution
                </span>
                <span className="text-xs text-[#252925] font-medium">
                  Engineered membrane tension systems tailored to bespoke architectural geometries.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Company Statistics Section */}
        <div className="pt-10 border-t border-[#254C38]/15">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#254C38]">
                Verified Track Record
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#252925]">
                Delivering Excellence Across Sectors
              </h3>
            </div>
            <p className="text-xs text-[#5E645E] max-w-sm">
              Official portfolio statistics published and verified across commercial, hospitality, and luxury residences throughout India.
            </p>
          </div>

          {/* Animated Counters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {VERIFIED_STATISTICS.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/70 border border-[#254C38]/10 hover:border-[#254C38]/30 transition-all duration-300 hover:shadow-sm"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#254C38] font-manrope">
                  {animatedValues[idx].toLocaleString()}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm font-bold text-[#252925] mt-1 font-manrope">
                  {stat.label}
                </div>
                <p className="text-[11px] text-[#5E645E] mt-1 line-clamp-2">
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
