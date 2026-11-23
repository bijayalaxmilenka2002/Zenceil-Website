"use client";

import React, { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
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

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/+919819846701",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/zenceilstretchceiling",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zenceil_stretch_ceiling/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/zenceil-stretch-ceiling/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@stretchceilinginteriors7362",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
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
                className="px-8 py-4 rounded-full bg-[#F7F7F2] text-[#252925] text-xs font-bold tracking-wider uppercase hover:bg-white hover:shadow-lg transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
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
            {/* Col 1: Brand Info & Social Media Logos (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Logo theme="dark" />
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Operating under <strong>Aditya Interiors</strong> (Est. 2011). Pioneers in high-precision stretch ceiling membranes, integrated lighting, and acoustic architectural systems across India.
              </p>

              {/* SOCIAL MEDIA LOGOS IN FOOTER */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/80 block">
                  Connect With Us
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#254C38] hover:border-emerald-400/50 hover:scale-105 transition-all shadow-sm"
                      aria-label={s.name}
                      title={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
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
                  <Phone size={16} className="text-emerald-400 shrink-0 mt-0.5" />
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
                  <Mail size={16} className="text-emerald-400 shrink-0" />
                  <a href="mailto:info@zenceil.com" className="hover:text-white">
                    info@zenceil.com
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[12px] leading-relaxed text-gray-400">
                    Unit 5 &amp; 6, Vinayak Industrial Estate, Navghar, Vasai East, Palghar – 401208, Maharashtra.
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
              <span>ISO &amp; Safety Certified</span>
            </div>
          </div>
        </div>
      </footer>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
