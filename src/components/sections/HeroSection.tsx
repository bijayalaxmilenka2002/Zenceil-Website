"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";
import { Sparkles } from "lucide-react";

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
      className="relative w-full pt-16 md:pt-20 pb-4 md:pb-6 bg-[#F7F7F2] overflow-hidden"
    >
      {/* FULL-WIDTH IMMERSIVE PRESENTATION CONTAINER */}
      <div className="w-full px-2 sm:px-4 md:px-8 max-w-[1920px] mx-auto">
        {/* Full-Screen Architectural Visual */}
        <div className="relative w-full h-[75vh] sm:h-[82vh] md:h-[88vh] lg:h-[90vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#254C38]/15 bg-[#E8E8DF]">
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

                {/* Luxury Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/85 via-[#252925]/20 to-black/20 pointer-events-none" />

                {/* Top Corner Architectural Tag */}
                <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#254C38]/90 text-[#F7F7F2] backdrop-blur-md shadow-lg border border-white/20">
                    <Sparkles size={13} className="text-emerald-300" />
                    <span>0{index + 1} / 0{HERO_SLIDES.length} • {slide.tagline}</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* EYE-CATCHING TEXT AT THE END PART CENTER OF THE IMAGE */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4 max-w-4xl pointer-events-none">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#254C38]/90 backdrop-blur-md border border-white/30 text-[#F7F7F2] shadow-2xl mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
                {activeSlideData.tagline}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-manrope drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-tight transition-all duration-500">
              {activeSlideData.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-medium text-white/95 tracking-wide mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] max-w-2xl mx-auto">
              {activeSlideData.subtitle}
            </p>

            {/* Minimal In-Image Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-5 pointer-events-auto">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentSlide
                      ? "w-8 bg-white shadow-lg"
                      : "w-2 bg-white/40 hover:bg-white/80"
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
