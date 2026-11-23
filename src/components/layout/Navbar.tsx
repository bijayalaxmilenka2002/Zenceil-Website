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
  name: string;
  finish: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

interface ProjectDropdownItem {
  name: string;
  category: string;
  count: number;
  tag: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

const PRODUCT_ITEMS: ProductDropdownItem[] = [
  {
    name: "Translucent Ceilings",
    finish: "01 • Diffused Lighting",
    desc: "Even, shadowless daylighting with integrated GOQ LEDs",
    href: "/#products",
    icon: SunMedium,
  },
  {
    name: "Printed Ceilings",
    finish: "02 • High-Res Graphics",
    desc: "Infinite custom UV prints, celestial skies & motifs",
    href: "/#products",
    icon: Palette,
  },
  {
    name: "Textured Ceilings",
    finish: "03 • Acoustic Relief",
    desc: "Tactile micro-grain surfaces with acoustic dampening",
    href: "/#products",
    icon: Layers,
  },
  {
    name: "Lacquer Ceilings",
    finish: "04 • High-Gloss Mirror",
    desc: "85%+ optical reflection visually doubling room height",
    href: "/#products",
    icon: Sparkles,
  },
  {
    name: "3D Form Ceilings",
    finish: "05 • Parametric Waves",
    desc: "Compound curves, floating halo rings & fluid canopies",
    href: "/#products",
    icon: Box,
  },
];

const PROJECT_ITEMS: ProjectDropdownItem[] = [
  {
    name: "All Landmark Projects",
    category: "All",
    count: 36,
    tag: "Comprehensive Archive",
    desc: "Browse our entire nationwide portfolio of realized installations",
    href: "/projects",
    icon: Grid,
  },
  {
    name: "Commercial & Corporate",
    category: "Commercial",
    count: 9,
    tag: "Corporate Campuses",
    desc: "Executive boardrooms, high-tech atriums & airport terminals",
    href: "/projects?category=Commercial",
    icon: Building2,
  },
  {
    name: "Retail & Malls",
    category: "Retail",
    count: 8,
    tag: "Flagship Gallerias",
    desc: "Atrium wave canopies, luxury boutiques & luminous storefronts",
    href: "/projects?category=Retail",
    icon: ShoppingBag,
  },
  {
    name: "Luxury Residential",
    category: "Residential",
    count: 7,
    tag: "Bespoke Villas & Penthouses",
    desc: "Double-height living rooms, mirror penthouses & cinema ceilings",
    href: "/projects?category=Residential",
    icon: Home,
  },
  {
    name: "Hospitality & Spas",
    category: "Hospitality",
    count: 7,
    tag: "5-Star Resorts & Wellness",
    desc: "Grand hotel lobbies, moisture-proof hydrotherapy & fine dining",
    href: "/projects?category=Hospitality",
    icon: Hotel,
  },
  {
    name: "3D & Acoustic Forms",
    category: "3D & Acoustic",
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-navbar-menu]")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
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

  const handleProductItemClick = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  const handleProjectCategoryClick = (category: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (category === "All") {
      if (pathname === "/projects") {
        window.history.pushState(null, "", "/projects");
        window.dispatchEvent(new CustomEvent("zenceil-category-change", { detail: "All" }));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/projects");
      }
      return;
    }

    const url = `/projects?category=${encodeURIComponent(category)}`;
    if (pathname === "/projects") {
      window.history.pushState(null, "", url);
      window.dispatchEvent(new CustomEvent("zenceil-category-change", { detail: category }));
    } else {
      router.push(url);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
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
              href="/"
              onClick={handleLogoClick}
              className="focus:outline-none flex items-center cursor-pointer"
              aria-label="Zenceil Stretch Ceiling Home"
            >
              <Logo theme="light" />
            </a>

            {/* CENTER: Navigation Links with Interactive Dropdowns */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
              {navLinks.map((link) => {
                const isActive = link.isRoute
                  ? pathname === "/projects"
                  : pathname === "/" && link.targetId === "hero" && false;

                if (link.hasDropdown) {
                  const isOpen = activeDropdown === link.dropdownKey;
                  return (
                    <div
                      key={link.label}
                      className="relative py-1.5"
                      onMouseEnter={() => handleMouseEnter(link.dropdownKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => handleNavClick(link)}
                        className={`text-base lg:text-[17px] transition-colors relative group py-1 tracking-[-0.01em] cursor-pointer inline-flex items-center gap-1.5 ${
                          isActive || isOpen
                            ? "text-[#254C38] font-bold"
                            : "font-medium text-[#252925]/90 hover:text-[#254C38]"
                        }`}
                        aria-expanded={isOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#254C38]" : "text-[#252925]/50 group-hover:text-[#254C38]"
                          }`}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-[1.5px] bg-[#254C38] transition-all duration-300 rounded-full ${
                            isActive || isOpen ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </button>

                      {/* Dropdown Container */}
                      {isOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fadeIn">
                          {link.dropdownKey === "products" ? (
                            /* PRODUCTS DROPDOWN CARD */
                            <div className="w-[380px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#254C38]/15 overflow-hidden p-2.5 space-y-1">
                              <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-[#254C38]/10 text-xs text-[#5E645E]">
                                <span className="font-bold uppercase tracking-wider text-[11px] text-[#254C38]">
                                  Stretch Ceiling Solutions
                                </span>
                                <span className="font-mono text-[10px] bg-[#254C38]/10 text-[#254C38] px-2 py-0.5 rounded-full font-bold">
                                  5 Finishes
                                </span>
                              </div>

                              <div className="py-1 space-y-0.5">
                                {PRODUCT_ITEMS.map((item) => (
                                  <button
                                    key={item.name}
                                    onClick={() => handleProductItemClick(item.href)}
                                    className="w-full group/item flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#254C38]/8 text-left transition-all duration-200 cursor-pointer"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-[#254C38]/10 text-[#254C38] flex items-center justify-center shrink-0 group-hover/item:bg-[#254C38] group-hover/item:text-[#F7F7F2] transition-colors shadow-sm">
                                      <item.icon size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#252925] group-hover/item:text-[#254C38] transition-colors">
                                          {item.name}
                                        </span>
                                        <span className="text-[10px] font-mono text-[#5E645E]">
                                          {item.finish.split("•")[0]}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#5E645E] truncate">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>

                              {/* Bottom CTA */}
                              <div className="pt-2 border-t border-[#254C38]/10">
                                <button
                                  onClick={() => handleProductItemClick("/#products")}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#254C38] hover:bg-[#254C38]/10 transition-colors cursor-pointer group/cta"
                                >
                                  <span>Explore All 5 Products &amp; Finishes</span>
                                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            /* PROJECTS DROPDOWN CARD */
                            <div className="w-[410px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#254C38]/15 overflow-hidden p-2.5 space-y-1">
                              <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-[#254C38]/10 text-xs text-[#5E645E]">
                                <span className="font-bold uppercase tracking-wider text-[11px] text-[#254C38]">
                                  Architectural Archive
                                </span>
                                <span className="font-mono text-[10px] bg-[#254C38]/10 text-[#254C38] px-2 py-0.5 rounded-full font-bold">
                                  36 Projects • 5 Sectors
                                </span>
                              </div>

                              <div className="py-1 space-y-0.5">
                                {PROJECT_ITEMS.map((item) => (
                                  <button
                                    key={item.name}
                                    onClick={() => handleProjectCategoryClick(item.category)}
                                    className="w-full group/item flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#254C38]/8 text-left transition-all duration-200 cursor-pointer"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-[#254C38]/10 text-[#254C38] flex items-center justify-center shrink-0 group-hover/item:bg-[#254C38] group-hover/item:text-[#F7F7F2] transition-colors shadow-sm">
                                      <item.icon size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#252925] group-hover/item:text-[#254C38] transition-colors">
                                          {item.name}
                                        </span>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#254C38]/10 text-[#254C38]">
                                          {item.count}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-[#5E645E] truncate">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </button>
                                ))}
                              </div>

                              {/* Bottom CTA */}
                              <div className="pt-2 border-t border-[#254C38]/10">
                                <button
                                  onClick={() => handleProjectCategoryClick("All")}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#254C38] hover:bg-[#254C38]/10 transition-colors cursor-pointer group/cta"
                                >
                                  <span>Explore Full 36-Project Archive</span>
                                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                                </button>
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
                    className={`text-base lg:text-[17px] transition-colors relative group py-1.5 tracking-[-0.01em] cursor-pointer ${
                      isActive
                        ? "text-[#254C38] font-bold"
                        : "font-medium text-[#252925]/90 hover:text-[#254C38]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#254C38] transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                );
              })}
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

        {/* Mobile Navigation Drawer with Accordion Dropdowns */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F7F2] border-b border-[#254C38]/15 px-6 py-6 space-y-4 animate-fadeIn shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = link.isRoute && pathname === "/projects";

                if (link.dropdownKey === "products") {
                  return (
                    <div key={link.label} className="border-b border-[#252925]/5 py-1">
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between text-left text-base sm:text-lg py-2 font-medium text-[#252925] hover:text-[#254C38] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>Products</span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#254C38]/10 text-[#254C38]">
                            5 Finishes
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#252925]/60 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180 text-[#254C38]" : ""
                          }`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="pl-2 pr-1 pb-2 space-y-1 animate-fadeIn">
                          {PRODUCT_ITEMS.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleProductItemClick(item.href)}
                              className="w-full text-left p-2 rounded-xl flex items-center gap-3 hover:bg-[#254C38]/10 transition-colors"
                            >
                              <div className="w-7 h-7 rounded-lg bg-[#254C38]/10 text-[#254C38] flex items-center justify-center shrink-0">
                                <item.icon size={15} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-[#252925]">{item.name}</div>
                                <div className="text-[10px] text-[#5E645E] truncate">{item.finish}</div>
                              </div>
                            </button>
                          ))}
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              handleNavClick(link);
                            }}
                            className="w-full text-left p-2 text-xs font-bold text-[#254C38] flex items-center justify-between pt-2.5 border-t border-[#254C38]/10"
                          >
                            <span>Explore All 5 Products &amp; Finishes</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.dropdownKey === "projects") {
                  return (
                    <div key={link.label} className="border-b border-[#252925]/5 py-1">
                      <button
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className="w-full flex items-center justify-between text-left text-base sm:text-lg py-2 font-medium text-[#252925] hover:text-[#254C38] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className={pathname === "/projects" ? "text-[#254C38] font-bold" : ""}>
                            Projects
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#254C38]/10 text-[#254C38]">
                            36 Projects
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#252925]/60 transition-transform duration-200 ${
                            mobileProjectsOpen ? "rotate-180 text-[#254C38]" : ""
                          }`}
                        />
                      </button>

                      {mobileProjectsOpen && (
                        <div className="pl-2 pr-1 pb-2 space-y-1 animate-fadeIn">
                          {PROJECT_ITEMS.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleProjectCategoryClick(item.category)}
                              className="w-full text-left p-2 rounded-xl flex items-center justify-between hover:bg-[#254C38]/10 transition-colors"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-7 h-7 rounded-lg bg-[#254C38]/10 text-[#254C38] flex items-center justify-center shrink-0">
                                  <item.icon size={15} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-[#252925] truncate">{item.name}</div>
                                  <div className="text-[10px] text-[#5E645E] truncate">{item.tag}</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#254C38]/10 text-[#254C38] shrink-0">
                                {item.count}
                              </span>
                            </button>
                          ))}
                          <button
                            onClick={() => handleProjectCategoryClick("All")}
                            className="w-full text-left p-2 text-xs font-bold text-[#254C38] flex items-center justify-between pt-2.5 border-t border-[#254C38]/10"
                          >
                            <span>Explore Full 36-Project Archive</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`text-left text-base sm:text-lg py-2.5 border-b border-[#252925]/5 transition cursor-pointer ${
                      isActive
                        ? "text-[#254C38] font-bold"
                        : "font-medium text-[#252925] hover:text-[#254C38]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
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
              className="w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#254C38] text-[#F7F7F2] flex items-center justify-center gap-2 shadow-md hover:bg-[#1a3627] transition"
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
