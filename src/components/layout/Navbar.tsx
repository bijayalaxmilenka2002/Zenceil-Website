"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

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
        {/* TOP BAR ABOVE NAVBAR (Contact Info & Office Address) */}
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

            {/* Right: Office Address */}
            <div className="hidden sm:flex items-center gap-2 text-white/90 text-[11px] md:text-xs">
              <MapPin size={13} className="text-emerald-300 shrink-0" />
              <span>Unit 5 &amp; 6, Vinayak Ind. Estate, Vasai East, Palghar – 401208, Mumbai (MH)</span>
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
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base lg:text-[17px] font-bold text-[#252925] hover:text-[#254C38] transition-colors relative group py-1.5"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#254C38] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* RIGHT: CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] hover:bg-[#1a3627] transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight size={15} />
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
                  className="text-lg font-bold text-[#252925] py-2.5 border-b border-[#252925]/5 hover:text-[#254C38] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 text-xs text-[#5E645E] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#254C38] shrink-0" />
              <span>Vasai East, Palghar – 401208, Mumbai (MH)</span>
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
