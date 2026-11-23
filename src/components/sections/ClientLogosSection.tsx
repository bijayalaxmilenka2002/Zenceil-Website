"use client";

import React from "react";

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  logo: React.ReactNode;
}

export const ClientLogosSection: React.FC = () => {
  const brands: ClientBrand[] = [
    {
      id: "godrej",
      name: "Godrej",
      category: "Real Estate & Commercial",
      logo: (
        <div className="flex items-center gap-2">
          {/* Authentic Godrej Red Script Wordmark */}
          <svg className="h-8 w-auto" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34 16C31 9 22 8 16 13C9 18 8 28 14 34C20 40 31 38 35 32V24H23V20H39V34C33 42 20 45 11 39C2 33 2 19 12 11C21 3 35 5 40 14L34 16Z"
              fill="#E31837"
            />
            <circle cx="28" cy="24" r="3" fill="#E31837" />
            <text x="46" y="32" fontFamily="serif" fontSize="24" fontWeight="bold" fontStyle="italic" fill="#E31837" letterSpacing="1">
              Godrej
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "nexus",
      name: "Nexus Malls",
      category: "Retail Destinations",
      logo: (
        <div className="flex items-center gap-2">
          {/* Nexus Vibrant Geometric Spectrum Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Colorful Geometric Nexus Polyhedral Mark */}
            <path d="M12 12L24 6L36 14L24 22L12 12Z" fill="#FF5722" />
            <path d="M24 22L36 14L40 28L28 36L24 22Z" fill="#9C27B0" />
            <path d="M12 12L24 22L20 36L8 26L12 12Z" fill="#00BCD4" />
            <path d="M20 36L28 36L24 42L20 36Z" fill="#E91E63" />
            <text x="48" y="30" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="#252925" letterSpacing="2">
              NEXUS
            </text>
            <text x="124" y="24" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#FF5722">
              MALLS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "shoppers-stop",
      name: "Shoppers Stop",
      category: "Department Stores",
      logo: (
        <div className="flex items-center gap-2">
          {/* Shoppers Stop Iconic Bridge Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="8" width="6" height="32" rx="2" fill="#D32F2F" />
            <path d="M14 18C14 14 26 14 26 18C26 26 14 24 14 31C14 36 26 36 26 31" stroke="#252925" strokeWidth="3" strokeLinecap="round" />
            <text x="32" y="24" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#252925" letterSpacing="1">
              SHOPPERS STOP
            </text>
            <text x="32" y="36" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#D32F2F" letterSpacing="3">
              START SOMETHING NEW
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "mac",
      name: "MAC Cosmetics",
      category: "Speciality Luxury Retail",
      logo: (
        <div className="flex items-center gap-2">
          {/* MAC Cosmetics Signature Typography */}
          <svg className="h-8 w-auto" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="8" width="156" height="32" rx="6" fill="#1A1A1A" />
            <text x="80" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#FFFFFF" letterSpacing="6">
              M · A · C
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "dlf",
      name: "DLF",
      category: "Commercial Parks & Towers",
      logo: (
        <div className="flex items-center gap-2">
          {/* DLF Corporate Blue-Red Landmark Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3 Building Blocks in DLF Brand Blue and Scarlet Red */}
            <rect x="6" y="10" width="8" height="28" fill="#003B71" rx="1" />
            <rect x="18" y="16" width="8" height="22" fill="#D9222A" rx="1" />
            <rect x="30" y="22" width="8" height="16" fill="#003B71" rx="1" />
            <text x="46" y="32" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#003B71" letterSpacing="2">
              DLF
            </text>
            <text x="100" y="22" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#D9222A">
              BUILDING INDIA
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "oberoi",
      name: "Oberoi Realty",
      category: "Luxury Living & Hospitality",
      logo: (
        <div className="flex items-center gap-2">
          {/* Oberoi Realty Crimson & Gold Royal Monogram */}
          <svg className="h-8 w-auto" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="24" r="14" fill="#800020" />
            <path d="M15 17L25 24L15 31V17Z" fill="#D4AF37" />
            <text x="40" y="24" fontFamily="serif" fontSize="16" fontWeight="bold" fill="#800020" letterSpacing="1">
              OBEROI
            </text>
            <text x="40" y="36" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#B8860B" letterSpacing="3">
              REALTY
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "phoenix",
      name: "Phoenix Mills",
      category: "Premium Retail Centers",
      logo: (
        <div className="flex items-center gap-2">
          {/* Phoenix Mills Heraldic Gold & Crimson Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="18,8 30,18 26,36 10,36 6,18" fill="#C2185B" />
            <path d="M18 12L22 22H14L18 12Z" fill="#FFD700" />
            <text x="38" y="24" fontFamily="sans-serif" fontSize="14" fontWeight="800" fill="#252925" letterSpacing="1">
              THE PHOENIX
            </text>
            <text x="38" y="36" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#C2185B" letterSpacing="3">
              MILLS LIMITED
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: "tata",
      name: "Tata Projects",
      category: "Infrastructure & Engineering",
      logo: (
        <div className="flex items-center gap-2">
          {/* Iconic Tata Blue Roundel Logo */}
          <svg className="h-8 w-auto" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="24" r="14" fill="#005696" />
            <path d="M13 20C17 17 23 17 27 20M15 25C18 22 22 22 25 25" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <text x="42" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#005696" letterSpacing="2">
              TATA
            </text>
            <text x="42" y="36" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#5E645E" letterSpacing="2">
              PROJECTS
            </text>
          </svg>
        </div>
      ),
    },
  ];

  // Triplicate array for seamless infinite marquee loop
  const marqueeList = [...brands, ...brands, ...brands];

  return (
    <section className="py-14 md:py-20 bg-[#FBF9F4] border-y border-[#0B1B33]/10 overflow-hidden">
      {/* SECTION HEADER: SUBJECT HEADLINE "WHO WE WORK WITH" */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10 space-y-2">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0B1B33] block">
          PARTNERS IN EXCELLENCE • COMMERCIAL &amp; RETAIL
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E242B] tracking-tight font-manrope">
          Who We Work With
        </h2>
        <div className="w-16 h-1 bg-[#0B1B33] mx-auto rounded-full mt-2" />
        <p className="text-sm md:text-base text-[#5F6C7B] max-w-2xl mx-auto pt-2 font-normal">
          Partnering with India&apos;s premier commercial developers, retail mall operators, luxury hospitality destinations, and architectural studios.
        </p>
      </div>

      {/* CONTINUOUS HORIZONTAL MARQUEE WITH COLORFUL LOGOS */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle Edge Vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-36 bg-gradient-to-r from-[#FBF9F4] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-36 bg-gradient-to-l from-[#FBF9F4] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 md:gap-10 py-4 cursor-pointer">
          {marqueeList.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center px-6 py-4 rounded-2xl bg-white border border-[#0B1B33]/15 shadow-sm hover:shadow-xl hover:border-[#8A99AC]/50 hover:-translate-y-1 transition-all duration-300 shrink-0 group"
            >
              {/* Colorful Logo Component */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#5F6C7B] bg-[#0B1B33]/5 px-4 py-1.5 rounded-full border border-[#0B1B33]/10">
          Over 7,200+ Enterprise Ceiling Installations Delivered Nationwide
        </span>
      </div>
    </section>
  );
};
