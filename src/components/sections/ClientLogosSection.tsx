"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/zenceilData";

export const ClientLogosSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 md:py-16 bg-[#F7F7F2] border-y border-[#254C38]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#254C38]">
          Proven Enterprise Trust
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[#252925] mt-1">
          Trusted by Leading Brands
        </h2>
        <div className="w-12 h-0.5 bg-[#254C38] mx-auto mt-2" />
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Subtle edge fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F7F7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F7F7F2] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 md:gap-16 py-3 cursor-pointer">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/70 border border-[#254C38]/10 shadow-xs hover:border-[#254C38]/30 transition-all duration-300 shrink-0 group"
            >
              {/* Minimalist Architectural Monogram Badge */}
              <div className="w-8 h-8 rounded-lg bg-[#254C38]/10 text-[#254C38] font-bold text-xs flex items-center justify-center font-manrope group-hover:bg-[#254C38] group-hover:text-[#F7F7F2] transition-colors">
                {client.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm md:text-base text-[#252925] tracking-tight group-hover:text-[#254C38] transition-colors font-manrope">
                  {client.name}
                </span>
                <span className="text-[10px] text-[#5E645E] uppercase tracking-wider font-medium">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-[#5E645E] mt-4 uppercase tracking-widest font-mono">
        Commercial Corporate • Retail Malls • Luxury Hospitality
      </p>
    </section>
  );
};
