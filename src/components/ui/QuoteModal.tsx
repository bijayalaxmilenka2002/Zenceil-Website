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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252925]/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#F7F7F2] rounded-2xl shadow-2xl border border-[#254C38]/20 overflow-hidden text-[#252925]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#254C38] text-[#F7F7F2] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-80">
              Architectural Consultation
            </span>
            <h3 className="text-xl font-bold font-manrope">Get an Official Ceiling Estimate</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#254C38]/10 text-[#254C38] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-2xl font-bold font-manrope text-[#254C38]">
                Request Received
              </h4>
              <p className="text-sm text-[#252925]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || "Client"}</strong>. Our stretch ceiling engineering specialists will review your project parameters and contact you within 24 hours at <strong>{formData.phone || "your phone"}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919819846701"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#254C38] text-[#F7F7F2] rounded-lg text-sm font-medium hover:bg-[#1a3627] transition"
                >
                  <PhoneCall size={16} /> Direct Call: +91 9819846701
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-[#254C38]/30 rounded-lg text-sm font-medium hover:bg-[#254C38]/5 transition"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#252925]/70">
                Direct consultation for architects, developers, interior designers, and property owners across India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Rajesh Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] focus:ring-1 focus:ring-[#254C38] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] focus:ring-1 focus:ring-[#254C38] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="architect@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] focus:ring-1 focus:ring-[#254C38] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Project City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Delhi, Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] focus:ring-1 focus:ring-[#254C38] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Space / Project Type
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-[#254C38]/60" size={16} />
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] text-sm"
                    >
                      <option value="Commercial Office">Commercial / Corporate Office</option>
                      <option value="Luxury Residence">Luxury Residence / Penthouse</option>
                      <option value="Hotel & Spa">Hotel, Resort & Spa</option>
                      <option value="Shopping Mall">Shopping Mall & Retail Center</option>
                      <option value="Airport / Transit">Airport / Transit Hub</option>
                      <option value="Restaurant / Lounge">Restaurant / Fine Dining</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                    Ceiling Finish Interest
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-3 top-3 text-[#254C38]/60" size={16} />
                    <select
                      value={formData.ceilingType}
                      onChange={(e) => setFormData({ ...formData, ceilingType: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] text-sm"
                    >
                      <option value="Translucent">Translucent (Backlit Illumination)</option>
                      <option value="Printed">Printed (Custom Graphic Art)</option>
                      <option value="Texture">Texture (Acoustic & Tactile)</option>
                      <option value="Lacquer">Lacquer (Reflective High-Gloss)</option>
                      <option value="3D Form">3D Form (Sculptural & Multi-Level)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                  Estimated Area (Optional, sq. ft.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1,200 sq. ft."
                  value={formData.estimatedArea}
                  onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#252925]/80 mb-1">
                  Project Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your design intent or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#252925]/20 bg-white focus:outline-none focus:border-[#254C38] text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#254C38] text-[#F7F7F2] rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1a3627] active:scale-[0.99] transition shadow-md"
                >
                  <Send size={16} /> Submit Consultation Request
                </button>
                <p className="text-[11px] text-center text-[#252925]/60 mt-2">
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
