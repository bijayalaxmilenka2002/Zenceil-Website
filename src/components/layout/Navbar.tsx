"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F7F2]/95 backdrop-blur-md shadow-sm border-b border-[#254C38]/10 py-3.5"
            : "bg-[#F7F7F2] py-5 border-b border-[#254C38]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* LEFT: Authentic Zenceil Logo */}
          <a
            href="#hero"
            className="focus:outline-none"
            aria-label="Zenceil Home"
          >
            <Logo className="h-9" theme="light" />
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
                className="text-sm font-medium text-[#252925] hover:text-[#254C38] transition-colors relative group py-1"
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
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] hover:bg-[#1a3627] transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#254C38] text-[#F7F7F2]"
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F7F2] border-b border-[#254C38]/15 px-6 py-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-[#252925] py-2 border-b border-[#252925]/5 hover:text-[#254C38] transition"
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
              className="w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] flex items-center justify-center gap-2"
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
