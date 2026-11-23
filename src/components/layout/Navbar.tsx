"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#who-we-are" },
    { label: "Products", href: "#products" },
    { label: "Expertise", href: "#expertise" },
    { label: "Installation", href: "#installation" },
    { label: "Contact", href: "#footer" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* TOP BAR ABOVE NAVBAR (Authentic Information from zenceil.com) */}
        <div
          className={`bg-[#254C38] text-[#F7F7F2] text-xs border-b border-white/10 transition-all duration-300 ${
            scrolled ? "hidden" : "block"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
            {/* Left: Contact Numbers & Email */}
            <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
              <a
                href="tel:+919819846701"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone size={12} className="text-emerald-300" />
                <span>+91 9819846701</span>
              </a>
              <a
                href="tel:+919892970087"
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone size={12} className="text-emerald-300" />
                <span>+91 9892970087</span>
              </a>
              <a
                href="mailto:info@zenceil.com"
                className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={12} className="text-emerald-300" />
                <span>info@zenceil.com</span>
              </a>
            </div>

            {/* Right: Official Channels (WhatsApp, FB, IG, LinkedIn, YouTube) */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/+919819846701"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-200 hover:text-white transition-colors"
                aria-label="WhatsApp Contact"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <div className="hidden sm:flex items-center gap-3 text-white/80">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/zenceilstretchceiling"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/zenceil_stretch_ceiling/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/zenceil-stretch-ceiling/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@stretchceilinginteriors7362"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-[#F7F7F2]/95 backdrop-blur-md shadow-sm border-b border-[#254C38]/10 py-3"
              : "bg-[#F7F7F2] py-4 border-b border-[#254C38]/5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* LEFT: Authentic Original Zenceil Logo */}
            <a
              href="#hero"
              className="focus:outline-none flex items-center"
              aria-label="Zenceil Stretch Ceiling Home"
            >
              <Logo theme="light" />
            </a>

            {/* CENTER: Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-semibold text-[#252925] hover:text-[#254C38] transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#254C38] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* RIGHT: CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] hover:bg-[#1a3627] transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center md:hidden gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#254C38] text-[#F7F7F2]"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#252925] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F7F2] border-b border-[#254C38]/15 px-6 py-6 space-y-4 animate-fadeIn shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-semibold text-[#252925] py-2 border-b border-[#252925]/5 hover:text-[#254C38] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] flex items-center justify-center gap-2"
            >
              <span>Get an Architectural Quote</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}
      </header>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
};
