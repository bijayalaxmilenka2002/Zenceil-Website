"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/zenceilData";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-28 bg-[#FBF9F4] text-[#1E242B] border-b border-[#0B1B33]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#0B1B33]">
              <span className="w-2 h-2 rounded-full bg-[#0B1B33]" />
              <span>Section 08 • Verified Client Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-[1.15]">
              Our Work. Their Words.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#5F6C7B] font-normal">
              Authentic words from enterprise project directors, store managers, and corporate leaders.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-[#0B1B33]/20 bg-[#FFFDF9] hover:bg-[#0B1B33] hover:text-[#FBF9F4] text-[#1E242B] transition shadow-xs active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs font-mono font-semibold text-[#5F6C7B]">
              0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-[#0B1B33]/20 bg-[#FFFDF9] hover:bg-[#0B1B33] hover:text-[#FBF9F4] text-[#1E242B] transition shadow-xs active:scale-95 cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFDF9] transition-all duration-500 border flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? "border-[#0B1B33] shadow-xl ring-2 ring-[#8A99AC]/30 scale-[1.01]"
                    : "border-[#0B1B33]/10 hover:border-[#8A99AC]/50 shadow-sm opacity-85 hover:opacity-100"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="text-[#0B1B33] opacity-80" size={32} />
                    <div className="flex items-center gap-1 text-[#0B1B33]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#0B1B33" strokeWidth={0} />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#1E242B] italic leading-relaxed font-manrope">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-[#0B1B33]/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#1E242B] font-manrope">
                      {t.author}
                    </h3>
                    {t.designation && (
                      <p className="text-xs text-[#5F6C7B] mt-0.5">
                        {t.designation}
                      </p>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B1B33]/10 text-[#0B1B33]">
                    {t.company}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
