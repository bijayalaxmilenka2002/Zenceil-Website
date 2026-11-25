"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, Send, CheckCircle, PhoneCall, Sparkles, MessageSquare } from "lucide-react";

interface TimedLeadModalProps {
  delayMs?: number; // Default 15000ms = 15 seconds
}

export const TimedLeadModal: React.FC<TimedLeadModalProps> = ({ delayMs = 15000 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("zenceil_timed_popup_dismissed", "true");
    } catch {
      // In case storage is restricted
    }
  }, []);

  useEffect(() => {
    let isTest = false;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      isTest = urlParams.get("popup") === "test";
      const isDismissed = sessionStorage.getItem("zenceil_timed_popup_dismissed");
      if (isDismissed && !isTest) return;
    } catch {
      // Ignore storage errors
    }

    const timer = setTimeout(() => {
      try {
        const dismissedCheck = sessionStorage.getItem("zenceil_timed_popup_dismissed");
        if (!dismissedCheck || isTest) {
          setIsOpen(true);
        }
      } catch {
        setIsOpen(true);
      }
    }, isTest ? 300 : delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      sessionStorage.setItem("zenceil_timed_popup_dismissed", "true");
    } catch {
      // In case storage is restricted
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#211B15]/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="timed-lead-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#EDE7DC] rounded-3xl shadow-2xl border border-[#302820]/15 overflow-hidden text-[#302820] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CUT / CLOSE BUTTON IN RIGHT-SIDE CORNER (WHITE COLOR) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close and remove form"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#302820] transition-all flex items-center justify-center cursor-pointer shadow-md border border-white/30 group active:scale-95"
          title="Cut & Remove Form"
        >
          <X size={18} className="text-white group-hover:text-[#302820] stroke-[2.5] transition-transform group-hover:scale-110" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#302820] text-[#EDE7DC] px-6 sm:px-8 pt-7 pb-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles size={12} className="text-[#EDE7DC]" />
            <span>Architectural Consultation</span>
          </div>

          <h3 id="timed-lead-title" className="text-xl sm:text-2xl font-bold font-manrope pr-8 leading-snug">
            Planning a Stretch Ceiling for Your Space?
          </h3>
          <p className="text-xs sm:text-sm text-[#EDE7DC]/80 mt-1.5 leading-relaxed max-w-sm">
            Leave your query below and our senior Aditya Interiors engineers will provide instant technical feasibility and WhatsApp pricing.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#302820]/10 text-[#302820] rounded-full flex items-center justify-center mx-auto border border-[#302820]/20">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl font-bold font-manrope text-[#302820]">
                Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-[#6E6256] leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.name || "Client"}</strong>. Our certified stretch ceiling team has received your query and will connect with you at <strong>{formData.phone || "your number"}</strong> within 15 minutes.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href="tel:+919819846701"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#302820] text-[#EDE7DC] rounded-xl text-xs font-semibold hover:bg-[#211B15] transition shadow-xs"
                >
                  <PhoneCall size={14} /> Call Engineer: +91 9819846701
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl border border-[#302820]/20 text-xs font-semibold text-[#302820] hover:bg-[#302820]/5 transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/90 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Ar. Rajesh Mehta / Vikram Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820] placeholder:text-[#302820]/40"
                />
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/90 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820] placeholder:text-[#302820]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/90 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820] placeholder:text-[#302820]/40"
                  />
                </div>
              </div>

              {/* Query / Requirements */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/90 mb-1 flex items-center justify-between">
                  <span>Your Query / Requirements *</span>
                  <span className="text-[11px] text-[#6E6256] font-normal normal-case">Area, location, or finish</span>
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your room size, ceiling type (Translucent, Printed, Lacquer, 3D), or project timeline..."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820] placeholder:text-[#302820]/40 resize-none"
                  />
                  <MessageSquare size={15} className="absolute right-3 bottom-3 text-[#302820]/30 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#302820] hover:bg-[#211B15] text-[#EDE7DC] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-md active:scale-[0.99] border border-white/20"
              >
                <Send size={14} className="text-[#EDE7DC]" />
                <span>Submit Query &amp; Get Free Estimate</span>
              </button>

              <div className="pt-1 flex items-center justify-between text-[11px] text-[#6E6256]">
                <span>🔒 Confidential &amp; Zero Spam Guaranteed</span>
                <span>Direct Office: Mumbai &amp; All India</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
