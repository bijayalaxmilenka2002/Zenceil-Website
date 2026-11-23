"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Cinematic 4-second autoplay interval
  const SLIDE_DURATION = 4000;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Continuous Autoplay Engine with pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full pt-20 sm:pt-24 md:pt-28 bg-[#FBF9F4] overflow-hidden select-none"
    >
      {/* 100% FULL-BLEED EDGE-TO-EDGE HERO VISUAL */}
      <div 
        className="w-full relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full h-[76vh] sm:h-[82vh] md:h-[88vh] lg:h-[92vh] overflow-hidden bg-[#071224]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-[4500ms] ease-out ${
                    isActive ? "scale-100" : "scale-[1.04]"
                  }`}
                  sizes="100vw"
                />

                {/* Ambient Balanced Architectural Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />
              </div>
            );
          })}

          {/* PREV / NEXT ARROWS (Visible on hover on desktop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0B1B33] text-white backdrop-blur-md border border-white/15 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0B1B33] text-white backdrop-blur-md border border-white/15 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* REFINED ARCHITECTURAL TEXT OVERLAY */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4 sm:px-6 max-w-4xl pointer-events-none">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#D8DFE8] border border-white/20 mb-2.5 sm:mb-3 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A99AC] animate-pulse" />
              <span>{activeSlideData.tagline}</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-manrope drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] leading-tight transition-all duration-500">
              {activeSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal tracking-wide mt-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] max-w-2xl mx-auto leading-relaxed line-clamp-2 sm:line-clamp-none">
              {activeSlideData.subtitle}
            </p>

            {/* AUTOPLAY PROGRESS BARS & NAVIGATION DOTS */}
            <div className="flex items-center justify-center gap-2.5 mt-6 pointer-events-auto">
              {HERO_SLIDES.map((slide, i) => {
                const isActive = i === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer group/dot focus:outline-none"
                    style={{
                      width: isActive ? "42px" : "14px",
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    {isActive && (
                      <span
                        key={`${slide.id}-${isPaused ? 'paused' : 'running'}`}
                        className="absolute inset-0 bg-white rounded-full"
                        style={{
                          animation: isPaused
                            ? "none"
                            : `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
