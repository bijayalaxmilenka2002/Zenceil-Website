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
      className="py-16 sm:py-20 md:py-28 bg-[#EDE7DC] text-[#302820] border-b border-[#302820]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#302820]">
              <span className="w-2 h-2 rounded-full bg-[#302820]" />
              <span>Section 08 • Verified Client Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#302820] tracking-tight leading-[1.15]">
              Our Work. Their Words.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6E6256] font-normal">
              Authentic words from enterprise project directors, store managers, and corporate leaders.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-[#302820]/20 bg-white hover:bg-[#302820] hover:text-[#EDE7DC] text-[#302820] transition shadow-xs active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-xs font-mono font-semibold text-[#6E6256]">
              0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-[#302820]/20 bg-white hover:bg-[#302820] hover:text-[#EDE7DC] text-[#302820] transition shadow-xs active:scale-95 cursor-pointer"
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
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white transition-all duration-500 border flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? "border-[#302820] shadow-xl ring-2 ring-[#302820]/20 scale-[1.01]"
                    : "border-[#302820]/10 hover:border-[#302820]/30 shadow-sm opacity-85 hover:opacity-100"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="text-[#302820] opacity-80" size={32} />
                    <div className="flex items-center gap-1 text-[#302820]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#302820" strokeWidth={0} />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#302820] italic leading-relaxed font-manrope">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-[#302820]/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#302820] font-manrope">
                      {t.author}
                    </h3>
                    {t.designation && (
                      <p className="text-xs text-[#6E6256] mt-0.5">
                        {t.designation}
                      </p>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#302820]/10 text-[#302820]">
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
