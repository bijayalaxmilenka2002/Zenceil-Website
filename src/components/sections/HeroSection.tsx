"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";
import { Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // REDUCED AUTOPLAY TIME: 2.5 seconds for snappy, dynamic slide show
  const SLIDE_DURATION = 2500;
  const UPDATE_FREQ = 25; // 25ms smooth progress bar update

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Continuous Autoplay Engine (loops through all 7 slides)
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, UPDATE_FREQ);

    const timer = setTimeout(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentSlide, handleNext]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full pt-16 md:pt-20 pb-12 md:pb-16 bg-[#F7F7F2] overflow-hidden"
    >
      {/* FULL-WIDTH IMMERSIVE PRESENTATION CONTAINER - TAKES COMPLETE SECTION */}
      <div className="w-full px-2 sm:px-4 md:px-8 max-w-[1920px] mx-auto">
        {/* Large Full-Screen Architectural Visual */}
        <div className="relative w-full h-[70vh] sm:h-[78vh] md:h-[84vh] lg:h-[88vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#254C38]/15 bg-[#E8E8DF]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 scale-100 pointer-events-auto"
                    : "opacity-0 z-0 scale-105 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-[2500ms] ease-out"
                  sizes="100vw"
                />

                {/* Subtle Luxury Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/75 via-[#252925]/15 to-black/20 pointer-events-none" />

                {/* Top Corner Architectural Tag */}
                <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#254C38]/90 text-[#F7F7F2] backdrop-blur-md shadow-lg border border-white/20">
                    <Sparkles size={13} className="text-emerald-300" />
                    <span>{slide.tagline}</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* EYE-CATCHING TEXT IN THE END PART CENTER OF THE IMAGE */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4 max-w-4xl pointer-events-none">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#254C38]/85 backdrop-blur-md border border-white/30 text-[#F7F7F2] shadow-2xl mb-2 sm:mb-3 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
                ARCHITECTURAL STRETCH CEILINGS
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-manrope drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight">
              Transforming The Fifth Wall Into Living Art
            </h2>
            
            <p className="text-xs sm:text-sm font-medium text-white/95 tracking-widest uppercase mt-1.5 sm:mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Bespoke Engineering • Seamless Light • 1-Day Clean Installation
            </p>
          </div>
        </div>

        {/* ELEGANT EDITORIAL DETAILS BELOW THE IMAGE */}
        <div className="mt-6 md:mt-8 pt-5 border-t border-[#254C38]/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Main Headline & Description below image */}
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#254C38] bg-[#254C38]/10 px-2.5 py-1 rounded">
                0{currentSlide + 1} / 0{HERO_SLIDES.length} • {activeSlideData.tagline}
              </span>
              <div className="h-px w-10 bg-[#254C38]/30" />
              <span className="text-xs font-semibold text-[#5E645E] uppercase tracking-wider">
                Automated Architectural Gallery
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252925] tracking-tight leading-[1.15] font-manrope transition-all duration-500">
              {activeSlideData.title}
            </h1>

            <p className="text-sm md:text-base text-[#5E645E] max-w-3xl font-normal leading-relaxed">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Minimal 7-Slide Progress Bar */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-3">
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative flex-1 h-2 bg-[#254C38]/15 rounded-full overflow-hidden transition-all group cursor-pointer"
                >
                  {i === currentSlide && (
                    <div
                      className="absolute inset-y-0 left-0 bg-[#254C38] rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {i < currentSlide && (
                    <div className="absolute inset-0 bg-[#254C38] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#5E645E]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold tracking-wider text-[#254C38]">
                  AUTOPLAY: 2.5s INTERVAL (7 SLIDES)
                </span>
              </div>
              <span className="font-medium text-[11px] text-[#5E645E]">
                Click bar to navigate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
