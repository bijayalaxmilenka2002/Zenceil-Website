"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, PhoneCall, Building2, Layers } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "Commercial Office",
    ceilingType: "Translucent",
    estimatedArea: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#241E18]/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#EDE7DC] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#302820]/20 overflow-hidden text-[#302820]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Espresso & Warm Beige */}
        <div className="bg-[#302820] text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#EDE7DC]/80">
              Architectural Consultation
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-manrope">Get an Official Ceiling Estimate</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#302820] transition-all flex items-center justify-center cursor-pointer shadow-xs border border-white/25"
          >
            <X size={18} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-4">
              <div className="w-16 h-16 bg-[#302820]/10 text-[#302820] rounded-full flex items-center justify-center mx-auto border border-[#302820]/15">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-manrope text-[#302820]">
                Request Received
              </h4>
              <p className="text-xs sm:text-sm text-[#6E6256] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || "Client"}</strong>. Our stretch ceiling engineering specialists will review your project parameters and contact you within 24 hours at <strong>{formData.phone || "your phone"}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919819846701"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#302820] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#241E18] border border-white/20 transition"
                >
                  <PhoneCall size={16} className="text-[#EDE7DC]" /> Direct Call: +91 9819846701
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-[#302820]/25 rounded-xl text-xs sm:text-sm font-semibold text-[#302820] hover:bg-[#302820]/5 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#6E6256]">
                Direct consultation for architects, developers, interior designers, and property owners across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Ar. Rajesh Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="architect@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Project City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="e.g. Mumbai, Delhi, Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] focus:ring-1 focus:ring-[#302820] text-base sm:text-sm text-[#302820]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Space / Project Type
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-[#302820]/60" size={16} />
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] text-base sm:text-sm text-[#302820]"
                    >
                      <option value="Commercial Office">Commercial / Corporate Office</option>
                      <option value="Luxury Residence">Luxury Residence / Penthouse</option>
                      <option value="Hotel & Spa">Hotel, Resort &amp; Spa</option>
                      <option value="Shopping Mall">Shopping Mall &amp; Retail Center</option>
                      <option value="Airport / Transit">Airport / Transit Hub</option>
                      <option value="Restaurant / Lounge">Restaurant / Fine Dining</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                    Ceiling Finish Interest
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-3 top-3 text-[#302820]/60" size={16} />
                    <select
                      value={formData.ceilingType}
                      onChange={(e) => setFormData({ ...formData, ceilingType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] text-base sm:text-sm text-[#302820]"
                    >
                      <option value="Translucent">Translucent (Backlit Illumination)</option>
                      <option value="Printed">Printed (Custom Graphic Art)</option>
                      <option value="Texture">Texture (Acoustic &amp; Tactile)</option>
                      <option value="Lacquer">Lacquer (Reflective High-Gloss)</option>
                      <option value="3D Form">3D Form (Sculptural &amp; Multi-Level)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                  Estimated Area (Optional, sq. ft.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,200 sq. ft."
                  value={formData.estimatedArea}
                  onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] text-base sm:text-sm text-[#302820]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#302820]/85 mb-1">
                  Project Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your design intent or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#302820]/20 bg-white focus:outline-none focus:border-[#302820] text-base sm:text-sm resize-none text-[#302820]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#302820] text-white border border-[#302820] rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#241E18] active:scale-[0.99] transition shadow-md cursor-pointer"
                >
                  <Send size={15} className="text-[#EDE7DC]" /> Submit Consultation Request
                </button>
                <p className="text-[11px] text-center text-[#6E6256] mt-2">
                  No obligation. Direct response from certified Zenceil stretch ceiling engineers.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
