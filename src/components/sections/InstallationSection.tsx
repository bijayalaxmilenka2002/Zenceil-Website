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
      className="py-20 md:py-28 bg-[#F7F7F2] text-[#252925] border-b border-[#254C38]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#254C38]">
            <span className="w-2 h-2 rounded-full bg-[#254C38]" />
            <span>Section 06 • Engineered Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.12]">
            From Concept to Completion.
          </h2>
          <p className="text-base sm:text-lg text-[#5E645E] font-normal">
            Every successful ceiling begins with a clear plan and professional execution.
          </p>
        </div>

        {/* 4-Step Timeline: Horizontal on Desktop, Vertical Stacked on Mobile */}
        <div className="relative">
          {/* Connecting Line behind steps on Desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-0.5 bg-[#254C38]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {INSTALLATION_STEPS.map((step, idx) => {
              const StepIcon = stepIcons[idx];

              return (
                <div
                  key={step.number}
                  className="flex flex-col bg-white/70 rounded-3xl p-6 border border-[#254C38]/10 hover:border-[#254C38]/30 transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#254C38] uppercase">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#254C38] text-[#F7F7F2] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                      <StepIcon size={18} />
                    </div>
                  </div>

                  {/* Step Visual Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#E8E8DF]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Zenceil Process`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Step Description */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#252925] font-manrope group-hover:text-[#254C38] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#5E645E] mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#254C38]/10 text-[11px] font-mono text-[#254C38] uppercase tracking-wider font-semibold">
                      Phase {step.number} Complete
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Installation Assurance */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#254C38]/5 border border-[#254C38]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#252925] font-manrope">
              Zero Demolition • No Painting Mess • Ready in 1–2 Days
            </h4>
            <p className="text-xs text-[#5E645E]">
              Stretch ceiling installation is non-invasive, preserving existing floorings, furnishings, and corporate workflows.
            </p>
          </div>
          <a
            href="#footer"
            className="px-6 py-3 rounded-full bg-[#254C38] text-[#F7F7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#1a3627] transition shrink-0"
          >
            Schedule Site Survey
          </a>
        </div>
      </div>
    </section>
  );
};
