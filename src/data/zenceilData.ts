export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tagline: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  industry: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ExpertiseFeature {
  number: string;
  title: string;
  description: string;
}

export interface ProductItem {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  visualDirection: string;
  features: string[];
}

export interface InstallationStep {
  step: string;
  number: string;
  title: string;
  description: string;
  visual: string;
  image: string;
}

export interface ValueProposition {
  title: string;
  subtitle: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  designation?: string;
  company: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero-slide-1.jpg",
    title: "Transform Your Space with Beautiful Ceilings.",
    subtitle: "Architectural stretch ceiling solutions engineered for modern luxury and acoustic perfection.",
    tagline: "ARCHITECTURAL MEMBRANE SYSTEMS",
  },
  {
    id: "slide-2",
    image: "/images/hero-slide-2.jpg",
    title: "Turn Your Ceiling into a Work of Art.",
    subtitle: "Custom lighting, sculptural 3D forms, and flawless finishes that elevate every room.",
    tagline: "INNOVATIVE INTERIOR CRAFTSMANSHIP",
  },
  {
    id: "slide-3",
    image: "/images/hero-slide-3.jpg",
    title: "Make Every Interior Unforgettable.",
    subtitle: "Trusted by premier architects, corporate headquarters, luxury hotels, and modern residences.",
    tagline: "TIMELESS SPATIAL TRANSFORMATION",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "godrej", name: "Godrej", industry: "Real Estate & Commercial" },
  { id: "nexus", name: "Nexus", industry: "Malls & Retail" },
  { id: "shoppers-stop", name: "Shoppers Stop", industry: "Retail Department Stores" },
  { id: "mac", name: "MAC Cosmetics", industry: "Luxury Beauty Retail" },
  { id: "dlf", name: "DLF", industry: "Corporate Parks & Towers" },
  { id: "oberoi", name: "Oberoi Realty", industry: "Luxury Hospitality & Living" },
  { id: "phoenix", name: "Phoenix Mills", industry: "Premium Retail Centers" },
  { id: "tata", name: "Tata Projects", industry: "Infrastructure & Engineering" },
];

export const VERIFIED_STATISTICS: Statistic[] = [
  { label: "Corporates", value: 7203, suffix: "+", description: "Commercial & corporate office spaces" },
  { label: "Residences", value: 276, suffix: "+", description: "Bespoke luxury residential homes" },
  { label: "Hotels", value: 189, suffix: "+", description: "Hospitality & wellness developments" },
  { label: "Malls", value: 81, suffix: "+", description: "Flagship retail destinations" },
  { label: "Airports", value: 12, suffix: "+", description: "Major transit & terminal ceilings" },
  { label: "Restaurants", value: 165, suffix: "+", description: "Fine dining & hospitality venues" },
];

export const EXPERTISE_FEATURES: ExpertiseFeature[] = [
  {
    number: "01",
    title: "Custom Ceiling Designs",
    description: "Bespoke shapes, multilevel geometries, and unique acoustic formulations tailored to every interior blueprint.",
  },
  {
    number: "02",
    title: "Integrated Lighting Possibilities",
    description: "Seamless incorporation of uniform backlighting, tunable white illumination, magnetic tracks, and perimeter ambient glows.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Certified technicians delivering rapid, dust-free installation in as little as one day without construction debris.",
  },
  {
    number: "04",
    title: "Durable and Recyclable Solutions",
    description: "100% recyclable, moisture-resistant, antimicrobial, and non-flammable membrane solutions built to last for decades.",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "translucent",
    number: "01",
    name: "Translucent",
    description: "Create beautiful lighting effects with translucent stretch ceilings.",
    image: "/images/product-translucent.jpg",
    visualDirection: "Backlit translucent ceiling casting soft, shadowless architectural illumination.",
    features: ["Diffused Light Distribution", "Tunable White & RGBW Options", "Seamless Up to 50 sqm Single Sheets"],
  },
  {
    id: "printed",
    number: "02",
    name: "Printed",
    description: "Bring your creative vision to life with customized ceiling designs.",
    image: "/images/product-printed.jpg",
    visualDirection: "High-definition custom graphic print ceiling with artistic spatial depth.",
    features: ["Ultra-High Definition UV Printing", "Colorfast & Non-Fading", "Architectural Artwork & Biophilic Designs"],
  },
  {
    id: "texture",
    number: "03",
    name: "Texture",
    description: "Add depth, character and elegance to your interiors.",
    image: "/images/product-texture.jpg",
    visualDirection: "Detailed tactile textured stretch ceiling membrane with micro-grain relief.",
    features: ["Acoustic Dampening Micro-Perforations", "Tactile Matte & Satin Finishes", "Sophisticated Organic Textures"],
  },
  {
    id: "lacquer",
    number: "04",
    name: "Lacquer",
    description: "Enhance your interiors with elegant reflective ceiling finishes.",
    image: "/images/product-lacquer.jpg",
    visualDirection: "High-gloss reflective mirror finish expanding vertical spatial perception.",
    features: ["Mirror-Like Optical Reflection", "Enhances Room Height & Volume", "Stain & Water Resistant Surface"],
  },
  {
    id: "3d-form",
    number: "05",
    name: "3D Form",
    description: "Create distinctive spaces with sculptural ceiling designs.",
    image: "/images/product-3d-form.jpg",
    visualDirection: "Sophisticated curved or sculptural multi-level 3D spatial installation.",
    features: ["Free-Form Parametric Curves", "Wave, Cone & Vaulted Geometries", "Structural Lightweight Aluminum Framing"],
  },
];

export const INSTALLATION_STEPS: InstallationStep[] = [
  {
    step: "STEP 01",
    number: "01",
    title: "Consultation & Planning",
    description: "Understand the space, requirements and design expectations.",
    visual: "Professional site consultation and laser ceiling measurements.",
    image: "/images/step-consultation.jpg",
  },
  {
    step: "STEP 02",
    number: "02",
    title: "Design & Lighting",
    description: "Plan the ceiling finish, structure and compatible lighting.",
    visual: "Architectural planning, structural 3D CAD framing and lighting layout.",
    image: "/images/step-design.jpg",
  },
  {
    step: "STEP 03",
    number: "03",
    title: "Professional Installation",
    description: "Execute the stretch ceiling installation with a clean and efficient process.",
    visual: "Certified technicians securing precision harpoon membrane into profiles.",
    image: "/images/step-installation.jpg",
  },
  {
    step: "STEP 04",
    number: "04",
    title: "Final Handover",
    description: "Review the completed ceiling and bring the project to completion.",
    visual: "Finished premium interior with a flawless stretch ceiling handover.",
    image: "/images/step-handover.svg",
  },
];

export const ROTATING_STATEMENTS: string[] = [
  "Your ceiling deserves more than ordinary.",
  "Light, design and innovation — beautifully connected.",
  "Transform the fifth wall into your greatest design feature.",
  "Every space has a story. Let your ceiling tell it.",
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    title: "Rapid Installation",
    subtitle: "In as little as one day",
    description: "Installed quickly without mess, painting delays, or heavy structural remodeling.",
  },
  {
    title: "Complete Customisation",
    subtitle: "Limitless architectural freedom",
    description: "Custom curves, colors, dimensions, and seamless acoustic lighting integrations.",
  },
  {
    title: "Professional Expertise",
    subtitle: "Over 10 years of experience",
    description: "Pioneers in Indian architectural membrane installations since 2011.",
  },
  {
    title: "Recyclable Materials",
    subtitle: "100% recyclable & safe",
    description: "Eco-friendly, European-grade polymer membranes meeting strict safety standards.",
  },
  {
    title: "Clean Installation",
    subtitle: "Dust-free & non-invasive",
    description: "Zero demolition dust or wet plastering, preserving existing luxury interiors.",
  },
  {
    title: "Durable Solutions",
    subtitle: "Moisture & sag resistant",
    description: "Will never crack, peel, or fade, providing lasting beauty for decades to come.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "Attentiveness! Someone's effort is a reflection of their dedication to work.",
    author: "Anup Patil",
    company: "Godrej",
  },
  {
    id: "testimonial-2",
    quote: "Dedication towards deliverable, always work at pressure and complete on time without deviating quality.",
    author: "Raj Narayan Sahu",
    designation: "GM – Project Management",
    company: "Nexus",
  },
  {
    id: "testimonial-3",
    quote: "They delivered the works even better than what was originally planned and expected.",
    author: "Sanjay K Patil",
    designation: "CCA & Maintenance Head, Speciality Stores",
    company: "MAC (Shoppers Stop)",
  },
];

export const CONTACT_DETAILS = {
  brand: "Zenceil Stretch Ceiling",
  company: "Aditya Interiors",
  establishedYear: 2011,
  phones: ["+91 9819846701", "+91 9892970087", "+91 8655559011"],
  emails: ["info@zenceil.com", "support@zenceil.com"],
  headOffice: {
    title: "Head Office (Mumbai / Palghar)",
    address: "Unit no 5 & 6, Vinayak Industrial Estate, Survey No-29, Plot No 6, Navghar, Vasai East, Palghar – 401208, Maharashtra, India",
  },
  branches: [
    {
      city: "New Delhi",
      address: "B1/630-631, 2nd Floor (Above Maruti Suzuki Showroom), Janakpuri East, New Delhi – 110058",
    },
    {
      city: "Bangalore",
      address: "Plot no 22, Rangalata Bhavan, 2nd Floor, Gokula Layout, Balagere Road, Varthur, Bangalore – 560087",
    },
    {
      city: "Bhubaneswar",
      address: "Plot No - 6, S1/22, BDA Colony, ATM Square, Niladri Vihar, Bhubaneswar, Odisha – 751021",
    },
  ],
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/zenceil" },
    { name: "Instagram", href: "https://www.instagram.com/zenceilceilings" },
    { name: "Facebook", href: "https://www.facebook.com/zenceil" },
  ],
};

// CENTRAL MEDIA ASSET REGISTRY - TO STRICTLY PREVENT DUPLICATE IMAGE USAGE
export const MEDIA_REGISTRY = {
  hero: [
    "/images/hero-slide-1.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
  ],
  whoWeAre: "/images/who-we-are.jpg",
  expertise: "/images/expertise-visual.jpg",
  products: {
    translucent: "/images/product-translucent.jpg",
    printed: "/images/product-printed.jpg",
    texture: "/images/product-texture.jpg",
    lacquer: "/images/product-lacquer.jpg",
    threeDForm: "/images/product-3d-form.jpg",
  },
  installation: {
    step1: "/images/step-consultation.jpg",
    step2: "/images/step-design.jpg",
    step3: "/images/step-installation.jpg",
    step4: "/images/step-handover.svg",
  },
};
