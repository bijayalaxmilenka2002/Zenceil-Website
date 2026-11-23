"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Snappy, dynamic 2.5s autoplay interval
  const SLIDE_DURATION = 2500;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Continuous Autoplay Engine across all 7 slides
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [handleNext]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full pt-16 md:pt-20 bg-[#F7F7F2] overflow-hidden"
    >
      {/* 100% FULL-BLEED EDGE-TO-EDGE HERO VISUAL (ZERO SIDE BORDER SPACE) */}
      <div className="w-full">
        <div className="relative w-full h-[78vh] sm:h-[84vh] md:h-[88vh] lg:h-[92vh] overflow-hidden bg-[#E8E8DF]">
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

                {/* Subtle Ambient Vignette for optimal contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 pointer-events-none" />
              </div>
            );
          })}

          {/* REFINED, COMPACT ARCHITECTURAL TEXT (NO GREEN BADGES, REDUCED TEXT SIZE) */}
          <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6 max-w-3xl pointer-events-none">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight font-manrope drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] leading-snug transition-all duration-500">
              {activeSlideData.title}
            </h1>

            <p className="text-xs sm:text-sm text-white/85 font-normal tracking-wide mt-1.5 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] max-w-xl mx-auto">
              {activeSlideData.subtitle}
            </p>

            {/* Minimal Navigational Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4 pointer-events-auto">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentSlide
                      ? "w-6 bg-white shadow-md"
                      : "w-1.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
