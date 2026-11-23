"use client";

import React, { useState, useEffect } from "react";
import { ROTATING_STATEMENTS, VALUE_PROPOSITIONS } from "@/data/zenceilData";
import { Clock, Sliders, Award, RefreshCw, Sparkles, Shield } from "lucide-react";

export const BrandQuotesSection: React.FC = () => {
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % ROTATING_STATEMENTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const valueIcons = [Clock, Sliders, Award, RefreshCw, Sparkles, Shield];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#302820] text-[#EDE7DC] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-20 relative z-10">
        {/* TOP: Brand Statements & Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#EDE7DC]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EDE7DC]" />
            <span>Section 07 • Brand Philosophy</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-manrope">
            &ldquo;An Ordinary Ceiling Covers a Space. An Extraordinary Ceiling Defines It.&rdquo;
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#EDE7DC]/90 tracking-wide font-manrope">
            Designed to inspire. Built to transform.
          </p>

          {/* Dynamic Rotating Statement */}
          <div className="pt-2 sm:pt-4 h-12 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-white transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-[#EDE7DC] animate-pulse" />
              <span>{ROTATING_STATEMENTS[statementIndex]}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM: Value Proposition Benefits (6 Cards) */}
        <div className="pt-8 sm:pt-10 border-t border-white/15">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EDE7DC]/80">
              The Zenceil Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-manrope">
              Engineered Precision &amp; Lasting Quality
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {VALUE_PROPOSITIONS.map((prop, idx) => {
              const IconComponent = valueIcons[idx];
              return (
                <div
                  key={prop.title}
                  className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#EDE7DC] flex items-center justify-center group-hover:scale-110 transition-transform border border-white/15">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-manrope">
                        {prop.title}
                      </h4>
                      <span className="text-[11px] text-[#EDE7DC]/70 font-mono">
                        {prop.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#EDE7DC]/85 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
