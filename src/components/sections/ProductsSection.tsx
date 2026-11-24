"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS_DATA, ProductItem } from "@/data/zenceilData";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { ArrowUpRight, Check, X, Layers, Cpu, Eye, Thermometer, Sun, Shield } from "lucide-react";

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [highlightedProduct, setHighlightedProduct] = useState<string | null>(null);

  React.useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<string | { id: string; openModal?: boolean }>;
      const detail = customEvent.detail;
      const productId = typeof detail === "string" ? detail : detail?.id;
      const shouldOpenModal = typeof detail === "object" ? detail?.openModal : false;

      if (productId) {
        setHighlightedProduct(productId);
        const prod = PRODUCTS_DATA.find((p) => p.id === productId);
        if (prod && shouldOpenModal) {
          setSelectedProduct(prod);
        }
        setTimeout(() => {
          const el = document.getElementById(`product-${productId}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 80);
        setTimeout(() => setHighlightedProduct(null), 3500);
      }
    };

    window.addEventListener("zenceil-highlight-product", handleHighlight);
    return () => window.removeEventListener("zenceil-highlight-product", handleHighlight);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkHashOrQuery = () => {
        const hash = window.location.hash;
        const urlParams = new URLSearchParams(window.location.search);
        let targetId = urlParams.get("product");
        if (!targetId && hash.startsWith("#product-")) {
          targetId = hash.replace("#product-", "");
        }
        if (targetId) {
          const prod = PRODUCTS_DATA.find((p) => p.id === targetId);
          if (prod) {
            setSelectedProduct(prod);
          }
          setHighlightedProduct(targetId);
          setTimeout(() => {
            const el = document.getElementById(`product-${targetId}`);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 300);
          setTimeout(() => setHighlightedProduct(null), 3500);
        }
      };

      checkHashOrQuery();
      window.addEventListener("hashchange", checkHashOrQuery);
      return () => window.removeEventListener("hashchange", checkHashOrQuery);
    }
  }, []);

  return (
    <>
      <section
        id="products"
        className="py-16 sm:py-20 md:py-28 bg-[#EDE7DC] text-[#302820] border-b border-[#302820]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
          {/* Section Heading & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#302820]">
                <span className="w-2 h-2 rounded-full bg-[#302820]" />
                <span>Section 05 • Core Product Categories</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#302820] tracking-tight leading-[1.15]">
                Explore Our Ceiling Solutions.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#6E6256] font-normal">
                Discover innovative ceiling designs created to transform modern spaces with precision lighting and acoustic luxury.
              </p>
            </div>

            <div className="hidden md:block">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#302820] px-4 py-2 rounded-full bg-[#302820]/10 border border-[#302820]/20">
                5 Distinct Architectural Finishes
              </span>
            </div>
          </div>

          {/* Product Cards Grid: 5 Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRODUCTS_DATA.map((product, index) => {
              const isWide = index >= 3;
              return (
                <div
                  key={product.id}
                  id={`product-${product.id}`}
                  onClick={() => setSelectedProduct(product)}
                  className={`group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFFFFF] border transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col scroll-mt-28 cursor-pointer ${
                    highlightedProduct === product.id
                      ? "ring-4 ring-[#302820] border-[#302820] shadow-2xl scale-[1.01]"
                      : "border-[#302820]/10 hover:border-[#302820]/30 hover:-translate-y-1"
                  } ${
                    isWide ? "lg:col-span-1 lg:last:col-span-2" : ""
                  }`}
                >
                  {/* Large Product Image with Hover Zoom */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-[#E8E8DF]">
                    <Image
                      src={product.image}
                      alt={`${product.name} Stretch Ceiling - Zenceil`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#302820] text-[#EDE7DC] border border-[#FFFFFF]/30 shadow-sm">
                        {product.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#302820] font-manrope group-hover:text-[#302820] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6E6256] leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2 border-t border-[#302820]/10">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#302820]/85">
                          <Check size={14} className="text-[#302820] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore More Link / Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#302820] group-hover:underline cursor-pointer"
                      >
                        <span>Explore Finish Specifications</span>
                        <ArrowUpRight size={14} className="text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#211B15]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#EDE7DC] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#302820]/20">
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-[#E8E8DF]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/85 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-85 text-[#EDE7DC]">
                  Category {selectedProduct.number} • Technical Datasheet
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-manrope">
                  {selectedProduct.name} Stretch Ceiling
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#302820] mb-1">
                  Design Architecture &amp; Functionality
                </h4>
                <p className="text-sm sm:text-base text-[#302820] leading-relaxed">
                  {selectedProduct.description}
                </p>
                <p className="text-xs text-[#6E6256] mt-2 italic">
                  Visual Direction: {selectedProduct.visualDirection}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#302820] mb-3">
                  Engineered Lighting &amp; Material Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Cpu size={15} />
                      <span>Lighting Engine</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.lightingBrand}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Sun size={15} />
                      <span>Color Temperatures</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.colorTemp}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Eye size={15} />
                      <span>Viewing &amp; Dispersion Angle</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.viewingAngle}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Thermometer size={15} />
                      <span>Operating Temperatures</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.operatingTemp}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Layers size={15} />
                      <span>Luminosity Output</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.brightness}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#302820]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Shield size={15} />
                      <span>Mounting Framework</span>
                    </div>
                    <p className="text-xs text-[#302820] font-medium">
                      {selectedProduct.specs.mounting}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#302820] mb-2">
                  System Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/70 border border-[#302820]/10 text-xs font-medium text-[#302820]">
                      <Check size={14} className="text-[#302820] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/70 border border-[#302820]/10 text-xs font-medium text-[#302820]">
                    <Layers size={14} className="text-[#302820] shrink-0" />
                    <span>European-grade fire rating B-s1, d0</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/70 border border-[#302820]/10 text-xs font-medium text-[#302820]">
                    <Check size={14} className="text-[#302820] shrink-0" />
                    <span>Dust-free, 100% moisture-proof membrane</span>
                  </div>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setQuoteOpen(true);
                  }}
                  className="flex-1 py-3 px-6 bg-[#302820] text-[#EDE7DC] border border-[#FFFFFF]/30 rounded-xl text-xs font-semibold tracking-wider uppercase hover:bg-[#211B15] transition text-center shadow-md cursor-pointer"
                >
                  Request Sample &amp; Pricing for {selectedProduct.name}
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="py-3 px-6 border border-[#302820]/20 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#302820] hover:bg-[#302820]/5 transition cursor-pointer"
                >
                  Close Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
