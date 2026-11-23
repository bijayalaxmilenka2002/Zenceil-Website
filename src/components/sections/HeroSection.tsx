"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";
import { ArrowLeft, ArrowRight, Pause, Play, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4000; // 4 seconds autoplay interval
  const UPDATE_FREQ = 25; // 25ms smooth progress bar update

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Continuous Autoplay Engine (does not stall on hover)
  useEffect(() => {
    if (!isPlaying) return;

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
  }, [currentSlide, isPlaying, handleNext]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full pt-16 md:pt-20 pb-12 md:pb-16 bg-[#F7F7F2] overflow-hidden"
    >
      {/* FULL-WIDTH HERO PRESENTATION CONTAINER */}
      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-12 max-w-[1720px] mx-auto">
        {/* Large, Immersive Full-Screen Visual */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[82vh] lg:h-[86vh] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-[#254C38]/15 bg-[#E8E8DF]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
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
                  className="object-cover object-center transition-transform duration-[4000ms] ease-out"
                  sizes="100vw"
                />

                {/* Subtle Luxury Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/60 via-transparent to-black/15 pointer-events-none" />

                {/* Architectural Tag Badge */}
                <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#254C38]/90 text-[#F7F7F2] backdrop-blur-md shadow-lg border border-white/15">
                    <Sparkles size={13} className="text-emerald-300" />
                    <span>{slide.tagline}</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* Minimal Glassmorphic Controls Bar */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-20 flex items-center gap-3 bg-[#252925]/75 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-[#F7F7F2] shadow-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F7F7F2]/90">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
            <div className="h-4 w-px bg-white/20" />
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2] active:scale-95"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2] active:scale-95"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2] active:scale-95"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* STRICT REQUIREMENT: Text appears in an elegant position BELOW the hero image */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-[#254C38]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline & Description below image */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#254C38] bg-[#254C38]/10 px-2.5 py-1 rounded">
                SLIDE 0{currentSlide + 1} • {activeSlideData.tagline}
              </span>
              <div className="h-px w-10 bg-[#254C38]/30" />
              <span className="text-xs font-semibold text-[#5E645E] uppercase tracking-wider">
                Automated Gallery Showcase
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.15] font-manrope transition-all duration-700">
              {activeSlideData.title}
            </h1>

            <p className="text-sm md:text-base text-[#5E645E] max-w-3xl font-normal leading-relaxed">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Minimal Slide Progress Indicator & Timeline */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-3.5">
            <div className="flex items-center gap-2.5">
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
                <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                <span className="font-mono text-[11px] font-semibold tracking-wider">
                  {isPlaying ? "AUTOPLAY: 4.0 SECONDS" : "AUTOPLAY PAUSED"}
                </span>
              </div>
              <span className="font-medium text-xs text-[#254C38]">
                Click progress bar to jump
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
