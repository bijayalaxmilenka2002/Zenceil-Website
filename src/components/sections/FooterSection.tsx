"use client";

import React, { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { CONTACT_DETAILS } from "@/data/zenceilData";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";

export const FooterSection: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#who-we-are" },
    { label: "Products", href: "#products" },
    { label: "Expertise", href: "#expertise" },
    { label: "Installation Process", href: "#installation" },
  ];

  const productLinks = [
    { label: "Translucent Ceilings", href: "#products" },
    { label: "Printed Ceilings", href: "#products" },
    { label: "Textured Acoustic Ceilings", href: "#products" },
    { label: "Lacquer Reflective Ceilings", href: "#products" },
    { label: "3D Form Sculptural Ceilings", href: "#products" },
  ];

  return (
    <>
      <footer
        id="footer"
        className="bg-[#252925] text-white pt-20 md:pt-28 pb-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {/* PRIMARY CTA BLOCK: "Let's Create Something Extraordinary." */}
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#254C38] border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Start Your Architectural Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-manrope">
                Let&apos;s Create Something Extraordinary.
              </h2>
              <p className="text-sm sm:text-base text-white/85">
                Have a project in mind? Talk to our team. We partner with architects, interior designers, commercial developers, and homeowners nationwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full sm:w-auto">
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-8 py-4 rounded-full bg-[#F7F7F2] text-[#252925] text-xs font-bold tracking-wider uppercase hover:bg-white hover:shadow-lg transition flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="tel:+919819846701"
                className="px-8 py-4 rounded-full border border-white/30 text-white text-xs font-bold tracking-wider uppercase hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* MAIN FOOTER COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-8">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Logo theme="dark" />
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Operating under <strong>Aditya Interiors</strong> (Est. 2011). Pioneers in high-precision stretch ceiling membranes, integrated lighting, and acoustic architectural systems across India.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {CONTACT_DETAILS.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Product Range (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
                Ceiling Solutions
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {productLinks.map((prod) => (
                  <li key={prod.label}>
                    <a
                      href={prod.href}
                      className="hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span>{prod.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Verified Contact Info (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">
                Verified Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <Phone size={16} className="text-[#254C38] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a href="tel:+919819846701" className="hover:text-white">
                      +91 9819846701
                    </a>
                    <a href="tel:+919892970087" className="hover:text-white">
                      +91 9892970087
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-[#254C38] shrink-0" />
                  <a href="mailto:info@zenceil.com" className="hover:text-white">
                    info@zenceil.com
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#254C38] shrink-0 mt-0.5" />
                  <span className="text-[12px] leading-relaxed text-gray-400">
                    Unit 5 & 6, Vinayak Industrial Estate, Navghar, Vasai East, Palghar – 401208, Maharashtra.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BRANCH OFFICES STRIP */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-400">
            <div>
              <span className="text-white font-semibold block mb-1">New Delhi Office</span>
              <p className="text-[11px] leading-relaxed">
                B1/630-631, 2nd Floor (Above Maruti Suzuki Showroom), Janakpuri East, New Delhi – 110058
              </p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-1">Bangalore Office</span>
              <p className="text-[11px] leading-relaxed">
                Plot no 22, Rangalata Bhavan, 2nd Floor, Gokula Layout, Balagere Road, Varthur, Bangalore – 560087
              </p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-1">Bhubaneswar Office</span>
              <p className="text-[11px] leading-relaxed">
                Plot No - 6, S1/22, BDA Colony, ATM Square, Niladri Vihar, Bhubaneswar, Odisha – 751021
              </p>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© Zenceil. All Rights Reserved. Operating under Aditya Interiors.</p>
            <div className="flex items-center gap-6">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>ISO & Safety Certified</span>
            </div>
          </div>
        </div>
      </footer>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
