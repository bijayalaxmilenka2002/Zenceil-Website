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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071224]/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#FBF9F4] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#0B1B33]/20 overflow-hidden text-[#1E242B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Navy, Ivory & Silver */}
        <div className="bg-[#0B1B33] text-[#FBF9F4] px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#D8DFE8]">
              Architectural Consultation
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-manrope">Get an Official Ceiling Estimate</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-4">
              <div className="w-16 h-16 bg-[#0B1B33]/10 text-[#0B1B33] rounded-full flex items-center justify-center mx-auto border border-[#0B1B33]/15">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-manrope text-[#0B1B33]">
                Request Received
              </h4>
              <p className="text-xs sm:text-sm text-[#5F6C7B] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || "Client"}</strong>. Our stretch ceiling engineering specialists will review your project parameters and contact you within 24 hours at <strong>{formData.phone || "your phone"}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919819846701"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B1B33] text-[#FBF9F4] rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#071224] border border-[#8A99AC]/30 transition"
                >
                  <PhoneCall size={16} className="text-[#8A99AC]" /> Direct Call: +91 9819846701
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-[#0B1B33]/25 rounded-xl text-xs sm:text-sm font-semibold text-[#1E242B] hover:bg-[#0B1B33]/5 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#5F6C7B]">
                Direct consultation for architects, developers, interior designers, and property owners across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Rajesh Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] focus:ring-1 focus:ring-[#0B1B33] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] focus:ring-1 focus:ring-[#0B1B33] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="architect@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] focus:ring-1 focus:ring-[#0B1B33] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Project City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Delhi, Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] focus:ring-1 focus:ring-[#0B1B33] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Space / Project Type
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-[#0B1B33]/60" size={16} />
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] text-sm"
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                    Ceiling Finish Interest
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-3 top-3 text-[#0B1B33]/60" size={16} />
                    <select
                      value={formData.ceilingType}
                      onChange={(e) => setFormData({ ...formData, ceilingType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] text-sm"
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                  Estimated Area (Optional, sq. ft.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,200 sq. ft."
                  value={formData.estimatedArea}
                  onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E242B]/80 mb-1">
                  Project Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your design intent or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#0B1B33]/20 bg-[#FFFDF9] focus:outline-none focus:border-[#0B1B33] text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#0B1B33] text-[#FBF9F4] border border-[#8A99AC]/30 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#071224] active:scale-[0.99] transition shadow-md cursor-pointer"
                >
                  <Send size={15} className="text-[#8A99AC]" /> Submit Consultation Request
                </button>
                <p className="text-[11px] text-center text-[#5F6C7B] mt-2">
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
