"use client";

import React, { useState } from "react";
import { ARCHITECTURAL_FAQS } from "@/data/zenceilData";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-28 bg-[#EDE7DC] text-[#302820] border-b border-[#302820]/10"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#302820]">
            <span className="w-2 h-2 rounded-full bg-[#302820]" />
            <span>Section 09 • Architectural Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#302820] tracking-tight leading-[1.15]">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6E6256] font-normal leading-relaxed">
            Essential technical insights on installation timelines, lighting integration, acoustic dampening, and long-term durability.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {ARCHITECTURAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden shadow-xs ${
                  isOpen
                    ? "border-[#302820] ring-1 ring-[#302820]/15 shadow-md"
                    : "border-[#302820]/10 hover:border-[#302820]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#302820]/8 text-[#302820] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#302820] font-manrope pr-2">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#6E6256] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#302820]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm md:text-base text-[#6E6256] leading-relaxed border-t border-[#302820]/5 animate-fadeIn"
                  >
                    <div className="pl-10 sm:pl-11 pr-2">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#302820]/10 text-[#302820]">
                          {faq.category} Architecture
                        </span>
                        <span className="text-[11px] text-[#6E6256]/80 flex items-center gap-1 font-medium">
                          <Sparkles size={11} className="text-[#302820]" /> Zenceil Certified Standard
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 border border-[#302820]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#302820]/10 text-[#302820] flex items-center justify-center shrink-0">
              <HelpCircle size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#302820]">
                Have a unique structural or acoustic requirement?
              </h4>
              <p className="text-[11px] sm:text-xs text-[#6E6256]">
                Speak directly with certified Aditya Interiors stretch ceiling engineers.
              </p>
            </div>
          </div>
          <a
            href="tel:+919819846701"
            className="px-5 py-2.5 rounded-full bg-[#302820] text-[#EDE7DC] text-xs font-bold uppercase tracking-wider hover:bg-[#211B15] transition shrink-0 active:scale-95 shadow-xs"
          >
            Call Engineer: +91 9819846701
          </a>
        </div>
      </div>
    </section>
  );
};

