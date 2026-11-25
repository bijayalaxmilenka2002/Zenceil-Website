"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight,
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  SunMedium,
  Palette,
  Layers,
  Sparkles,
  Box,
  Grid,
  Building2,
  ShoppingBag,
  Home,
  Hotel,
  LucideIcon
} from "lucide-react";

interface ProductDropdownItem {
  id: string;
  name: string;
  finish: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

interface ProjectDropdownItem {
  category: string;
  name: string;
  count: number;
  tag: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

const PRODUCT_ITEMS: ProductDropdownItem[] = [
  {
    id: "translucent",
    name: "Translucent Ceilings",
    finish: "01 • Diffused Lighting",
    desc: "Even, shadowless daylighting with integrated GOQ LEDs",
    href: "/#product-translucent",
    icon: SunMedium,
  },
  {
    id: "printed",
    name: "Printed Ceilings",
    finish: "02 • High-Res Graphics",
    desc: "Infinite custom UV prints, celestial skies & motifs",
    href: "/#product-printed",
    icon: Palette,
  },
  {
    id: "texture",
    name: "Textured Ceilings",
    finish: "03 • Acoustic Relief",
    desc: "Tactile micro-grain surfaces with acoustic dampening",
    href: "/#product-texture",
    icon: Layers,
  },
  {
    id: "lacquer",
    name: "Lacquer Ceilings",
    finish: "04 • High-Gloss Mirror",
    desc: "85%+ optical reflection visually doubling room height",
    href: "/#product-lacquer",
    icon: Sparkles,
  },
  {
    id: "3d-form",
    name: "3D Form Ceilings",
    finish: "05 • Parametric Waves",
    desc: "Compound curves, floating halo rings & fluid canopies",
    href: "/#product-3d-form",
    icon: Box,
  },
];

const PROJECT_ITEMS: ProjectDropdownItem[] = [
  {
    category: "All",
    name: "All Landmark Projects",
    count: 36,
    tag: "Comprehensive Archive",
    desc: "Browse our entire nationwide portfolio of realized installations",
    href: "/projects",
    icon: Grid,
  },
  {
    category: "Commercial",
    name: "Commercial & Corporate",
    count: 9,
    tag: "Corporate Campuses",
    desc: "Executive boardrooms, high-tech atriums & airport terminals",
    href: "/projects?category=Commercial",
    icon: Building2,
  },
  {
    category: "Retail",
    name: "Retail & Malls",
    count: 8,
    tag: "Flagship Gallerias",
    desc: "Atrium wave canopies, luxury boutiques & luminous storefronts",
    href: "/projects?category=Retail",
    icon: ShoppingBag,
  },
  {
    category: "Residential",
    name: "Luxury Residential",
    count: 7,
    tag: "Bespoke Villas & Penthouses",
    desc: "Double-height living rooms, mirror penthouses & cinema ceilings",
    href: "/projects?category=Residential",
    icon: Home,
  },
  {
    category: "Hospitality",
    name: "Hospitality & Spas",
    count: 7,
    tag: "5-Star Resorts & Wellness",
    desc: "Grand hotel lobbies, moisture-proof hydrotherapy & fine dining",
    href: "/projects?category=Hospitality",
    icon: Hotel,
  },
  {
    category: "3D & Acoustic",
    name: "3D & Acoustic Forms",
    count: 5,
    tag: "Parametric Engineering",
    desc: "Sculptural multi-level curved clouds & suspended halo rings",
    href: "/projects?category=3D%20%26%20Acoustic",
    icon: Box,
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "projects" | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  // Close on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-navbar-menu]")) {
        setActiveDropdown(null);
        setIsPinned(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsPinned(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu: "products" | "projects") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (isPinned) return;
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleDropdown = (menu: "products" | "projects") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (activeDropdown === menu) {
      setActiveDropdown(null);
      setIsPinned(false);
    } else {
      setActiveDropdown(menu);
      setIsPinned(true);
    }
  };

  const navLinks = [
    { label: "Home", href: "/#hero", targetId: "hero" },
    { label: "About", href: "/#who-we-are", targetId: "who-we-are" },
    { label: "Products", href: "/#products", targetId: "products", hasDropdown: true, dropdownKey: "products" as const },
    { label: "Projects", href: "/projects", isRoute: true, hasDropdown: true, dropdownKey: "projects" as const },
    { label: "Expertise", href: "/#expertise", targetId: "expertise" },
    { label: "Contact", href: "/#footer", targetId: "footer" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setActiveDropdown(null);
    setIsPinned(false);
    setMobileMenuOpen(false);

    if (link.isRoute) {
      if (pathname === "/projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/projects");
      }
      return;
    }

    // Anchor navigation
    if (pathname === "/") {
      const element = document.getElementById(link.targetId!);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(link.href);
    }
  };

  const handleProductSelect = (productId: string, e?: React.MouseEvent) => {
    setActiveDropdown(null);
    setIsPinned(false);
    setMobileMenuOpen(false);

    if (pathname === "/") {
      if (e) e.preventDefault();
      window.dispatchEvent(
        new CustomEvent("zenceil-highlight-product", {
          detail: { id: productId, openModal: true },
        })
      );
      const el = document.getElementById(`product-${productId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      window.history.pushState(null, "", `/#product-${productId}`);
    } else {
      router.push(`/?product=${productId}#product-${productId}`);
    }
  };

  const handleAllProductsClick = (e?: React.MouseEvent) => {
    setActiveDropdown(null);
    setIsPinned(false);
    setMobileMenuOpen(false);

    if (pathname === "/") {
      if (e) e.preventDefault();
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", "/#products");
    } else {
      router.push("/#products");
    }
  };

  const handleProjectCategorySelect = (category: string, e?: React.MouseEvent) => {
    setActiveDropdown(null);
    setIsPinned(false);
    setMobileMenuOpen(false);

    const targetUrl =
      category === "All"
        ? "/projects#projects-gallery"
        : `/projects?category=${encodeURIComponent(category)}#projects-gallery`;

    if (pathname === "/projects") {
      if (e) e.preventDefault();
      window.history.pushState(null, "", targetUrl);
      window.dispatchEvent(
        new CustomEvent("zenceil-category-change", { detail: category })
      );
      const galleryEl =
        document.getElementById("projects-gallery") ||
        document.getElementById("projects");
      if (galleryEl) {
        galleryEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(targetUrl);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    setIsPinned(false);
    setMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40" data-navbar-menu>
        {/* TOP BAR: Navy, Ivory & Silver Theme */}
        <div
          className={`bg-[#302820] text-[#EDE7DC] text-xs border-b border-white/10 transition-all duration-300 ${
            scrolled ? "hidden" : "block"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2 flex items-center justify-between">
            {/* Left: Contact Numbers & Email */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <a
                href="tel:+919819846701"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-[11px] sm:text-xs"
              >
                <Phone size={12} className="text-[#6E6256]" />
                <span>+91 9819846701</span>
              </a>
              <a
                href="tel:+919892970087"
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors text-[11px] sm:text-xs"
              >
                <Phone size={12} className="text-[#6E6256]" />
                <span>+91 9892970087</span>
              </a>
              <a
                href="mailto:info@zenceil.com"
                className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors text-[11px] sm:text-xs"
              >
                <Mail size={12} className="text-[#6E6256]" />
                <span>info@zenceil.com</span>
              </a>
            </div>

            {/* Right: Office Address */}
            <div className="hidden sm:flex items-center gap-2 text-white/85 text-[11px] md:text-xs truncate max-w-md">
              <MapPin size={13} className="text-[#6E6256] shrink-0" />
              <span className="truncate">Vinayak Ind. Estate, Vasai East, Palghar – 401208, Mumbai (MH)</span>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-[#EDE7DC]/95 backdrop-blur-md shadow-sm border-b border-[#302820]/10 py-3"
              : "bg-[#EDE7DC] py-3.5 sm:py-4 border-b border-[#302820]/5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
            {/* LEFT: Authentic Zenceil Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="focus:outline-none flex items-center cursor-pointer"
              aria-label="Zenceil Stretch Ceiling Home"
            >
              <Logo theme="light" />
            </Link>

            {/* CENTER: Navigation Links (Desktop: lg screens and above) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = link.isRoute
                  ? pathname === "/projects"
                  : pathname === "/" && link.targetId === "hero" && false;

                if (link.hasDropdown) {
                  const isOpen = activeDropdown === link.dropdownKey;
                  return (
                    <div
                      key={link.label}
                      className="relative py-1"
                      onMouseEnter={() => handleMouseEnter(link.dropdownKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="inline-flex items-center rounded-lg hover:bg-[#302820]/5 transition-colors">
                        <Link
                          href={link.href}
                          onClick={() => handleNavClick(link)}
                          className={`text-[15px] xl:text-[17px] transition-colors relative group py-1.5 pl-2.5 pr-1 tracking-[-0.01em] cursor-pointer inline-flex items-center select-none ${
                            isActive || isOpen
                              ? "text-[#302820] font-bold"
                              : "font-medium text-[#302820]/90 hover:text-[#302820]"
                          }`}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`absolute bottom-0 left-2.5 right-1 h-[2px] bg-[#302820] transition-all duration-300 rounded-full ${
                              isActive || isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(link.dropdownKey);
                          }}
                          className="py-1.5 pr-2 pl-0.5 text-[#6E6256] hover:text-[#302820] cursor-pointer transition-colors"
                          aria-label={`Toggle ${link.label} menu`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#302820]" : "text-[#6E6256]"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Dropdown Container */}
                      {isOpen && (
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-fadeIn"
                          onMouseEnter={() => handleMouseEnter(link.dropdownKey)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {link.dropdownKey === "products" ? (
                            /* PRODUCTS DROPDOWN CARD */
                            <div className="w-[390px] bg-[#FFFFFF] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#302820]/15 overflow-hidden p-2.5 space-y-1">
                              <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-[#302820]/10 text-xs text-[#6E6256]">
                                <span className="font-bold uppercase tracking-wider text-[11px] text-[#302820]">
                                  Stretch Ceiling Solutions
                                </span>
                                <span className="font-mono text-[10px] bg-[#302820]/10 text-[#302820] px-2 py-0.5 rounded-full font-bold">
                                  5 Finishes
                                </span>
                              </div>

                              <div className="py-1 space-y-0.5">
                                {PRODUCT_ITEMS.map((item) => (
                                  <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => handleProductSelect(item.id, e)}
                                    className="w-full group/item flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#302820]/8 text-left transition-all duration-200 cursor-pointer block"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-[#302820]/10 text-[#302820] flex items-center justify-center shrink-0 group-hover/item:bg-[#302820] group-hover/item:text-[#EDE7DC] transition-colors shadow-sm">
                                      <item.icon size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#302820] group-hover/item:text-[#302820] transition-colors">
                                          {item.name}
                                        </span>
                                        <span className="text-[10px] font-mono text-[#6E6256]">
                                          {item.finish.split("•")[0]}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#6E6256] truncate">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* Bottom CTA */}
                              <div className="pt-2 border-t border-[#302820]/10">
                                <Link
                                  href="/#products"
                                  onClick={(e) => handleAllProductsClick(e)}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#302820] hover:bg-[#302820]/10 transition-colors cursor-pointer group/cta block"
                                >
                                  <span>Explore All 5 Products &amp; Finishes</span>
                                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform inline" />
                                </Link>
                              </div>
                            </div>
                          ) : (
                            /* PROJECTS DROPDOWN CARD */
                            <div className="w-[415px] bg-[#FFFFFF] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#302820]/15 overflow-hidden p-2.5 space-y-1">
                              <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-[#302820]/10 text-xs text-[#6E6256]">
                                <span className="font-bold uppercase tracking-wider text-[11px] text-[#302820]">
                                  Architectural Archive
                                </span>
                                <span className="font-mono text-[10px] bg-[#302820]/10 text-[#302820] px-2 py-0.5 rounded-full font-bold">
                                  36 Projects • 5 Sectors
                                </span>
                              </div>

                              <div className="py-1 space-y-0.5">
                                {PROJECT_ITEMS.map((item) => (
                                  <Link
                                    key={item.category}
                                    href={item.href}
                                    onClick={(e) => handleProjectCategorySelect(item.category, e)}
                                    className="w-full group/item flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#302820]/8 text-left transition-all duration-200 cursor-pointer block"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-[#302820]/10 text-[#302820] flex items-center justify-center shrink-0 group-hover/item:bg-[#302820] group-hover/item:text-[#EDE7DC] transition-colors shadow-sm">
                                      <item.icon size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#302820] group-hover/item:text-[#302820] transition-colors">
                                          {item.name}
                                        </span>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#302820]/10 text-[#302820]">
                                          {item.count}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#6E6256] truncate">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* Bottom CTA */}
                              <div className="pt-2 border-t border-[#302820]/10">
                                <Link
                                  href="/projects"
                                  onClick={(e) => handleProjectCategorySelect("All", e)}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#302820] hover:bg-[#302820]/10 transition-colors cursor-pointer group/cta block"
                                >
                                  <span>Explore Full 36-Project Archive</span>
                                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform inline" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`text-[15px] xl:text-[17px] transition-colors relative group py-1.5 px-2 tracking-[-0.01em] cursor-pointer rounded-lg hover:bg-[#302820]/5 ${
                      isActive
                        ? "text-[#302820] font-bold"
                        : "font-medium text-[#302820]/90 hover:text-[#302820]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2px] bg-[#302820] transition-all duration-300 rounded-full ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* RIGHT: CTA Button (Desktop: lg screens and up) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#302820] text-[#EDE7DC] hover:bg-[#211B15] border border-[#6E6256]/30 transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight size={15} className="text-[#6E6256]" />
              </button>
            </div>

            {/* Mobile / Tablet Header Controls (Visible below lg) */}
            <div className="flex items-center lg:hidden gap-2 sm:gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#302820] text-[#EDE7DC] border border-[#6E6256]/30 active:scale-95"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#302820] focus:outline-none rounded-lg hover:bg-[#302820]/5 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordion Dropdowns */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EDE7DC] border-b border-[#302820]/15 px-5 sm:px-8 py-6 space-y-4 animate-fadeIn shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = link.isRoute && pathname === "/projects";

                if (link.dropdownKey === "products") {
                  return (
                    <div key={link.label} className="border-b border-[#302820]/5 py-1">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between text-left text-base sm:text-lg py-2.5 font-medium text-[#302820] hover:text-[#302820] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>Products</span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#302820]/10 text-[#302820]">
                            5 Finishes
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#6E6256] transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180 text-[#302820]" : ""
                          }`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="pl-2 pr-1 pb-2 space-y-1 animate-fadeIn">
                          {PRODUCT_ITEMS.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={(e) => handleProductSelect(item.id, e)}
                              className="w-full text-left p-2.5 rounded-xl flex items-center gap-3 hover:bg-[#302820]/8 transition-colors block"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#302820]/10 text-[#302820] flex items-center justify-center shrink-0">
                                <item.icon size={16} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-[#302820]">{item.name}</div>
                                <div className="text-[10px] text-[#6E6256] truncate">{item.finish}</div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/#products"
                            onClick={(e) => handleAllProductsClick(e)}
                            className="w-full text-left p-2.5 text-xs font-bold text-[#302820] flex items-center justify-between pt-2.5 border-t border-[#302820]/10 block"
                          >
                            <span>Explore All 5 Products &amp; Finishes</span>
                            <ArrowRight size={13} className="inline" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.dropdownKey === "projects") {
                  return (
                    <div key={link.label} className="border-b border-[#302820]/5 py-1">
                      <button
                        type="button"
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className="w-full flex items-center justify-between text-left text-base sm:text-lg py-2.5 font-medium text-[#302820] hover:text-[#302820] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className={pathname === "/projects" ? "text-[#302820] font-bold" : ""}>
                            Projects
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#302820]/10 text-[#302820]">
                            36 Projects
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#6E6256] transition-transform duration-200 ${
                            mobileProjectsOpen ? "rotate-180 text-[#302820]" : ""
                          }`}
                        />
                      </button>

                      {mobileProjectsOpen && (
                        <div className="pl-2 pr-1 pb-2 space-y-1 animate-fadeIn">
                          {PROJECT_ITEMS.map((item) => (
                            <Link
                              key={item.category}
                              href={item.href}
                              onClick={(e) => handleProjectCategorySelect(item.category, e)}
                              className="w-full text-left p-2.5 rounded-xl flex items-center justify-between hover:bg-[#302820]/8 transition-colors block"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-[#302820]/10 text-[#302820] flex items-center justify-center shrink-0">
                                  <item.icon size={16} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-[#302820] truncate">{item.name}</div>
                                  <div className="text-[10px] text-[#6E6256] truncate">{item.tag}</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#302820]/10 text-[#302820] shrink-0">
                                {item.count}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/projects"
                            onClick={(e) => handleProjectCategorySelect("All", e)}
                            className="w-full text-left p-2.5 text-xs font-bold text-[#302820] flex items-center justify-between pt-2.5 border-t border-[#302820]/10 block"
                          >
                            <span>Explore Full 36-Project Archive</span>
                            <ArrowRight size={13} className="inline" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`text-left text-base sm:text-lg py-2.5 border-b border-[#302820]/5 transition cursor-pointer ${
                      isActive
                        ? "text-[#302820] font-bold"
                        : "font-medium text-[#302820] hover:text-[#302820]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            
            <div className="pt-2 text-xs text-[#6E6256] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#302820] shrink-0" />
              <span>Vasai East, Palghar – 401208, Mumbai (MH)</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#302820] text-[#EDE7DC] border border-[#6E6256]/30 flex items-center justify-center gap-2 shadow-md hover:bg-[#211B15] transition"
            >
              <span>Get an Architectural Quote</span>
              <ArrowUpRight size={14} className="text-[#6E6256]" />
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
