"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EXPERTISE_FEATURES } from "@/data/zenceilData";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        id="expertise"
        className="py-16 sm:py-20 md:py-28 bg-[#FBF9F4] text-[#1E242B] border-b border-[#0B1B33]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Header Tag */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#0B1B33] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0B1B33]" />
            <span>Section 04 • Architectural Solutions</span>
          </div>

          {/* TWO-COLUMN LAYOUT: 50% Visual / 50% Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE: Visual */}
            <div className="lg:col-span-6 order-1 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#0B1B33]/15 bg-[#E8E8DF] group">
                <Image
                  src="/images/original/24.png"
                  alt="Zenceil Stretch Ceiling Installation & Precision Lighting"
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 via-transparent to-transparent opacity-85" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1B33] text-[#FBF9F4] flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles size={20} className="text-[#8A99AC]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E242B] font-manrope">
                        Integrated Engineering
                      </h4>
                      <p className="text-xs text-[#5F6C7B]">
                        Seamless ceiling tension membranes paired with modular magnetic track &amp; ambient LED diffusers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="lg:col-span-6 order-2 lg:order-2 space-y-5 sm:space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-[1.15]">
                  Innovation Meets Interior Design.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#5F6C7B] leading-relaxed font-normal">
                  From customized ceiling designs to innovative lighting solutions, Zenceil helps create beautiful, functional and distinctive interiors.
                </p>
              </div>

              {/* Four Short Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                {EXPERTISE_FEATURES.map((feature) => (
                  <div
                    key={feature.number}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#0B1B33]/10 hover:border-[#8A99AC]/50 transition-all duration-300 hover:shadow-sm group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#0B1B33] px-2 py-0.5 rounded bg-[#0B1B33]/10">
                        {feature.number}
                      </span>
                      <CheckCircle2 size={16} className="text-[#0B1B33]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E242B] group-hover:text-[#0B1B33] transition-colors font-manrope">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#5F6C7B] mt-1.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#0B1B33] text-[#FBF9F4] text-xs font-semibold tracking-wider uppercase hover:bg-[#071224] border border-[#8A99AC]/30 active:scale-95 transition-all shadow-md group cursor-pointer"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowUpRight size={16} className="text-[#8A99AC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
