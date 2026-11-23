"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/zenceilData";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4000; // 4 seconds autoplay interval as strictly specified
  const UPDATE_FREQ = 40; // 40ms progress bar update

  // Auto-advance logic with progress
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, UPDATE_FREQ);

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentSlide, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full pt-20 md:pt-24 pb-12 md:pb-16 bg-[#F7F7F2] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* TOP: Large Full-Width Hero Visual - Occupies most of visible screen */}
        <div className="relative w-full h-[58vh] sm:h-[65vh] md:h-[72vh] lg:h-[76vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#254C38]/10 bg-[#E8E8DF]">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none scale-105"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center transform transition-transform duration-[4000ms] ease-out"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Subtle ambient gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#252925]/40 via-transparent to-black/10" />

              {/* Minimal Slide Tag in Corner */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#254C38]/85 text-[#F7F7F2] backdrop-blur-md shadow-sm border border-white/10">
                  {slide.tagline}
                </span>
              </div>
            </div>
          ))}

          {/* Controls overlay at bottom right of image */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 flex items-center gap-2 bg-[#252925]/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/15 text-[#F7F7F2]">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2]"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-1.5 rounded-full hover:bg-white/20 transition text-[#F7F7F2]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* STRICT REQUIREMENT: Text appears in a small, elegant position BELOW the hero image */}
        <div className="mt-6 md:mt-8 pt-4 border-t border-[#254C38]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Main Headline & Subtitle below image */}
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#254C38]">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
              <div className="h-px w-8 bg-[#254C38]/30" />
              <span className="text-xs font-medium text-[#5E645E] uppercase tracking-wider">
                Architectural Ceiling Innovation
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#252925] tracking-tight leading-[1.15] transition-all duration-500">
              {activeSlideData.title}
            </h1>
            <p className="text-sm md:text-base text-[#5E645E] max-w-2xl font-normal leading-relaxed">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Minimal Slide Progress Indicator & Switchers */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-3">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative flex-1 h-1.5 bg-[#254C38]/15 rounded-full overflow-hidden transition-all"
                >
                  {i === currentSlide && (
                    <div
                      className="absolute inset-y-0 left-0 bg-[#254C38] rounded-full transition-all"
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
              <span className="font-mono text-[11px]">
                AUTO TRANSITION: 4.0s
              </span>
              <span className="font-medium">
                {isPlaying ? "Autoplay Active" : "Paused"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
