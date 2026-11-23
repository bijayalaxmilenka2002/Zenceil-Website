"use client";

import React from "react";
import Image from "next/image";
import { INSTALLATION_STEPS } from "@/data/zenceilData";
import { Calendar, PenTool, Wrench, Award } from "lucide-react";

export const InstallationSection: React.FC = () => {
  const stepIcons = [Calendar, PenTool, Wrench, Award];

  return (
    <section
      id="installation"
      className="py-16 sm:py-20 md:py-28 bg-[#FBF9F4] text-[#1E242B] border-b border-[#0B1B33]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#0B1B33]">
            <span className="w-2 h-2 rounded-full bg-[#0B1B33]" />
            <span>Section 06 • Engineered Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-[1.15]">
            From Concept to Completion.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5F6C7B] font-normal">
            Every successful ceiling begins with a clear plan and professional execution.
          </p>
        </div>

        {/* 4-Step Timeline: Horizontal on Desktop, Vertical Stacked on Mobile */}
        <div className="relative">
          {/* Connecting Line behind steps on Desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-0.5 bg-[#8A99AC]/25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {INSTALLATION_STEPS.map((step, idx) => {
              const StepIcon = stepIcons[idx];

              return (
                <div
                  key={step.number}
                  className="flex flex-col bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#0B1B33]/10 hover:border-[#8A99AC]/50 transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#0B1B33] uppercase">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B1B33] text-[#FBF9F4] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 border border-[#8A99AC]/30 transition-transform">
                      <StepIcon size={18} className="text-[#8A99AC]" />
                    </div>
                  </div>

                  {/* Step Visual Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-[#E8E8DF]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Zenceil Process`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Step Description */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1E242B] font-manrope group-hover:text-[#0B1B33] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#5F6C7B] mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#0B1B33]/10 text-[11px] font-mono text-[#0B1B33] uppercase tracking-wider font-semibold">
                      Phase {step.number} Complete
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Installation Assurance */}
        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#0B1B33]/5 border border-[#0B1B33]/15 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#1E242B] font-manrope">
              Zero Demolition • No Painting Mess • Ready in 1–2 Days
            </h4>
            <p className="text-xs text-[#5F6C7B]">
              Stretch ceiling installation is non-invasive, preserving existing floorings, furnishings, and corporate workflows.
            </p>
          </div>
          <a
            href="#footer"
            className="px-6 py-3 rounded-full bg-[#0B1B33] text-[#FBF9F4] text-xs font-semibold tracking-wider uppercase hover:bg-[#071224] border border-[#8A99AC]/30 transition shrink-0 shadow-sm"
          >
            Schedule Site Survey
          </a>
        </div>
      </div>
    </section>
  );
};
