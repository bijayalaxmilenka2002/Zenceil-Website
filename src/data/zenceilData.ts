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
  specs: {
    lightingBrand: string;
    colorTemp: string;
    viewingAngle: string;
    operatingTemp: string;
    brightness: string;
    mounting: string;
  };
}

export interface ProjectPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
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

// 1. AUTHENTIC HERO SLIDES (Using real banner images and real copy from zenceil.com)
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/original/banner-img-1-1.jpg",
    title: "Tired Of Staring At A Boring Ceiling?",
    subtitle: "Transform your space with a beautiful, low-maintenance ceiling solution installed quickly and easily.",
    tagline: "ARCHITECTURAL MEMBRANE SYSTEMS",
  },
  {
    id: "slide-2",
    image: "/images/original/banner-img-2-1.jpg",
    title: "Want Your Interior To Look Truly Unique?",
    subtitle: "Zenceil can even install printed ceilings featuring your favorite artwork or photos, making your space truly unique.",
    tagline: "INNOVATIVE INTERIOR CRAFTSMANSHIP",
  },
  {
    id: "slide-3",
    image: "/images/original/banner-img-1.jpg",
    title: "Attract Potential Buyers Or Impress Your Clients.",
    subtitle: "Give your offices, malls, hotels, and luxury residences a look that makes people say wow.",
    tagline: "COMMERCIAL & RESIDENTIAL EXCELLENCE",
  },
  {
    id: "slide-4",
    image: "/images/original/cta-banner-1.jpg",
    title: "Be Inspired By Our Incredible Portfolio.",
    subtitle: "See how Zenceil stretch ceilings have transformed ordinary spaces into extraordinary experiences.",
    tagline: "PROVEN PROJECT EXECUTION",
  },
  {
    id: "slide-5",
    image: "/images/original/f453dca0-bfb5-48a2-a894-266995756d05.jpg",
    title: "Ceilings Beyond Imagination.",
    subtitle: "Zenceil stretch ceilings offer a world of design possibilities to unlock the full potential of any room.",
    tagline: "LIMITLESS DESIGN FREEDOM",
  },
  {
    id: "slide-6",
    image: "/images/original/6.jpg",
    title: "Picture Your Dream Space: See It. Believe It. Achieve It.",
    subtitle: "Let Zenceil turn your vision into a reality and create your own dream architectural ceiling.",
    tagline: "BESPOKE SPATIAL TRANSFORMATION",
  },
  {
    id: "slide-7",
    image: "/images/original/4.jpg",
    title: "Stop Dreaming, Start Creating.",
    subtitle: "Elevate your everyday experience with a custom Zenceil ceiling that speaks volumes about your style.",
    tagline: "TIMELESS ARCHITECTURAL LUXURY",
  },
];

// 2. CLIENT BRANDS
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "godrej", name: "Godrej", industry: "Real Estate & Commercial" },
  { id: "nexus", name: "Nexus Malls", industry: "Retail Destinations" },
  { id: "shoppers-stop", name: "Shoppers Stop", industry: "Department Stores" },
  { id: "mac", name: "MAC Cosmetics", industry: "Speciality Luxury Retail" },
  { id: "dlf", name: "DLF", industry: "Corporate Parks & Towers" },
  { id: "oberoi", name: "Oberoi Realty", industry: "Luxury Living & Hospitality" },
  { id: "phoenix", name: "Phoenix Mills", industry: "Premium Retail Centers" },
  { id: "tata", name: "Tata Projects", industry: "Infrastructure & Engineering" },
];

// 3. AUTHENTIC STATISTICS FROM ZENCEIL.COM
export const VERIFIED_STATISTICS: Statistic[] = [
  { label: "Corporates", value: 7203, suffix: "+", description: "Commercial office towers and headquarters" },
  { label: "Residences", value: 276, suffix: "+", description: "Bespoke luxury residences & penthouses" },
  { label: "Hotels", value: 189, suffix: "+", description: "Hospitality, resorts & wellness spas" },
  { label: "Malls", value: 81, suffix: "+", description: "Flagship retail destinations & shopping malls" },
  { label: "Airports", value: 12, suffix: "+", description: "Aviation terminals & transit hubs" },
  { label: "Restaurants", value: 165, suffix: "+", description: "Fine dining & hospitality venues" },
];

// 4. EXPERTISE & TECHNICAL CAPABILITIES FROM ZENCEIL.COM
export const EXPERTISE_FEATURES: ExpertiseFeature[] = [
  {
    number: "01",
    title: "Custom Ceiling Designs",
    description: "Bespoke geometries, parametric curves, and multilevel framing tailored to every architectural blueprint.",
  },
  {
    number: "02",
    title: "Integrated Lighting Possibilities",
    description: "Seamless integration with GOQ Korean LED modules, 150° viewing angles, and tunable white color temperatures (3200K–7100K).",
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Certified technicians delivering rapid, clean, and dust-free installations in as little as one day with zero construction debris.",
  },
  {
    number: "04",
    title: "Durable and Recyclable Solutions",
    description: "100% recyclable, lightweight, moisture-resistant, antimicrobial, and Euroclass B-s1, d0 fire-rated membranes.",
  },
];

// 5. AUTHENTIC PRODUCTS DATA (With real photos and exact specs from zenceil.com)
export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "translucent",
    number: "01",
    name: "Translucent",
    description: "Imagine the feeling of a spa-like retreat in your own home or office. Translucent ceilings diffuse natural or artificial light, creating a luxurious and airy ambiance.",
    image: "/images/original/1-2.png",
    visualDirection: "Backlit translucent ceiling casting soft, shadowless architectural illumination.",
    features: [
      "100% Recyclable Material",
      "Quick and Clean Installation",
      "Highly Durable & Lightweight",
      "Perimeter Aluminium Track Mounted",
    ],
    specs: {
      lightingBrand: "GOQ (Korean Premium LED Modules)",
      colorTemp: "7100K, 5000K, 4100K, 3200K (Warm to Cool White)",
      viewingAngle: "150° Ultra-Wide Optical Lens",
      operatingTemp: "-40ºC to +60ºC",
      brightness: "130–102 Lumens/Module (195–153 Lumens/Ft.)",
      mounting: "Perimeter Aluminum Track Profile",
    },
  },
  {
    id: "printed",
    number: "02",
    name: "Printed",
    description: "Turn your ceiling into a personal masterpiece. The choices are infinite (photos or geometric patterns). High-precision large-format printing on architectural membranes.",
    image: "/images/original/2-1.png",
    visualDirection: "High-definition custom graphic print ceiling with artistic spatial depth.",
    features: [
      "Infinite Design Choices (Photos or Patterns)",
      "Large-Format UV Direct Printing",
      "Colorfast & Non-Fading Longevity",
      "Enhances Room Decor Seamlessly",
    ],
    specs: {
      lightingBrand: "Optional Perimeter or Backlit GOQ LEDs",
      colorTemp: "3200K–7100K Compatible",
      viewingAngle: "150° Dispersion",
      operatingTemp: "-40ºC to +60ºC",
      brightness: "Customizable Architectural Lux Levels",
      mounting: "Perimeter Aluminum Track Profile",
    },
  },
  {
    id: "texture",
    number: "03",
    name: "Texture",
    description: "Add depth and character to your interiors. Textured stretch ceilings provide rich tactile surface reliefs, acoustic dampening, and elegant architectural sophistication.",
    image: "/images/original/3-1.png",
    visualDirection: "Detailed tactile textured stretch ceiling membrane with micro-grain relief.",
    features: [
      "Acoustic Dampening Micro-Perforations",
      "Tactile Matte, Satin & Suede Textures",
      "Moisture Resistant & Sag-Proof",
      "100% Recyclable Eco-Friendly Poly",
    ],
    specs: {
      lightingBrand: "Compatible with Recessed Spotlights & Tracks",
      colorTemp: "Tunable Ambient Light Options",
      viewingAngle: "150° Standard",
      operatingTemp: "-40ºC to +60ºC",
      brightness: "Integrated Spot & Grazing Lighting",
      mounting: "Perimeter Aluminum Track Profile",
    },
  },
  {
    id: "lacquer",
    number: "04",
    name: "Lacquer",
    description: "The main feature of lacquer finish is to reflect direct and indirect light. This makes the setting wider and brighter, increasing room volume and height like a mirror.",
    image: "/images/original/4-1.png",
    visualDirection: "High-gloss reflective mirror finish expanding vertical spatial perception.",
    features: [
      "Mirror-Like Optical Reflection",
      "Increases Perceived Room Height & Volume",
      "Available in Mirror, Chrome & Rich Colors",
      "Stain, Dust & Moisture Resistant",
    ],
    specs: {
      lightingBrand: "Reflective Ambient & Chandelier Accents",
      colorTemp: "All Architectural Light Temperatures",
      viewingAngle: "Direct Specular Reflection",
      operatingTemp: "-40ºC to +60ºC",
      brightness: "Doubles Ambient Spatial Illumination",
      mounting: "Perimeter Aluminum Track Profile",
    },
  },
  {
    id: "3d-form",
    number: "05",
    name: "3D Form",
    description: "The stretched ceiling is structured to give 3D architectural structures by integrating multilevel framing. Unlocks extraordinarily creative, dynamic, and inviting spaces.",
    image: "/images/original/5-1.png",
    visualDirection: "Sophisticated curved or sculptural multi-level 3D spatial installation.",
    features: [
      "Multilevel 3-Dimensional Aluminum Framing",
      "Waves, Cones, Domes & Vaulted Geometries",
      "Versatile Dynamic Spatial Aesthetics",
      "Structural Lightweight Engineering",
    ],
    specs: {
      lightingBrand: "Custom Curved Linear & Modular LEDs",
      colorTemp: "3200K, 4100K, 5000K, 7100K",
      viewingAngle: "150° Radial Dispersion",
      operatingTemp: "-40ºC to +60ºC",
      brightness: "Engineered Lumens for Volumetric Spaces",
      mounting: "Custom Formed Aluminum Structural Frames",
    },
  },
];

// 6. REAL PROJECT GALLERY PHOTOGRAPHS FROM ZENCEIL.COM
export const REAL_PROJECT_GALLERY: ProjectPhoto[] = [
  { id: "p1", title: "Corporate Headquarters Translucent Ceiling", category: "Commercial", image: "/images/original/10.png" },
  { id: "p2", title: "Luxury Penthouse Reflective Lacquer Ceiling", category: "Residential", image: "/images/original/11.png" },
  { id: "p3", title: "Shopping Mall Flagship Curved Form", category: "Retail", image: "/images/original/12.png" },
  { id: "p4", title: "Hotel Grand Atrium Ambient Ceiling", category: "Hospitality", image: "/images/original/13.png" },
  { id: "p5", title: "Executive Boardroom Custom Printed Art Ceiling", category: "Commercial", image: "/images/original/14.png" },
  { id: "p6", title: "Wellness Spa Luminous Light Ceiling", category: "Hospitality", image: "/images/original/15.png" },
  { id: "p7", title: "Modern Villa Double-Height Living Room", category: "Residential", image: "/images/original/16.png" },
  { id: "p8", title: "High-End Retail Showroom Track Ceiling", category: "Retail", image: "/images/original/17.png" },
  { id: "p9", title: "Parametric 3D Curved Auditorium Installation", category: "Commercial", image: "/images/original/18.png" },
  { id: "p10", title: "Luxury Master Suite Soft Glow Ceiling", category: "Residential", image: "/images/original/19.png" },
  { id: "p11", title: "Fine Dining Restaurant Textured Acoustic Ceiling", category: "Hospitality", image: "/images/original/20.png" },
  { id: "p12", title: "Airport Transit Terminal Membrane Canopy", category: "Commercial", image: "/images/original/21.png" },
];

// 7. INSTALLATION STEPS (Authentic Zenceil Methodology)
export const INSTALLATION_STEPS: InstallationStep[] = [
  {
    step: "STEP 01",
    number: "01",
    title: "Consultation & Planning",
    description: "Understand the space, site dimensions, design requirements, and lighting expectations.",
    visual: "Professional site consultation and laser ceiling measurements.",
    image: "/images/original/f453dca0-bfb5-48a2-a894-266995756d05.jpg",
  },
  {
    step: "STEP 02",
    number: "02",
    title: "Design & Lighting",
    description: "Plan the ceiling finish, perimeter aluminum framework, and GOQ LED lighting layout.",
    visual: "Architectural CAD planning, structural framing, and lighting calculation.",
    image: "/images/original/6.jpg",
  },
  {
    step: "STEP 03",
    number: "03",
    title: "Professional Installation",
    description: "Execute the stretch ceiling installation with a clean, dust-free process in as little as 1 day.",
    visual: "Certified technicians securing precision harpoon membrane into aluminum tracks.",
    image: "/images/original/4.jpg",
  },
  {
    step: "STEP 04",
    number: "04",
    title: "Final Handover & Warranty",
    description: "Review completed ceiling tension, activate warranty, and deliver the finished space.",
    visual: "Flawless tension inspection and handover of the completed interior.",
    image: "/images/original/banner-img-1-1.jpg",
  },
];

// 8. BRAND STATEMENTS FROM ZENCEIL.COM
export const ROTATING_STATEMENTS: string[] = [
  "Your ceiling deserves more than ordinary.",
  "Light, design and innovation — beautifully connected.",
  "Transform the fifth wall into your greatest design feature.",
  "Every space has a story. Let your ceiling tell it.",
];

// 9. CORE VALUE PROPOSITIONS FROM ZENCEIL.COM
export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    title: "Rapid Installation",
    subtitle: "In as little as one day",
    description: "Installed quickly without mess, wet plastering, painting fumes, or long construction delays.",
  },
  {
    title: "Complete Customisation",
    subtitle: "Limitless architectural freedom",
    description: "Custom curves, digital printed art, mirror lacquer, 3D forms, and integrated lighting systems.",
  },
  {
    title: "Professional Expertise",
    subtitle: "Established in 2011",
    description: "Operating under Aditya Interiors with over 13+ years of dedicated stretch ceiling mastery.",
  },
  {
    title: "Recyclable Materials",
    subtitle: "100% recyclable & safe",
    description: "European-certified polymer membranes, non-toxic, antimicrobial, and Euroclass B-s1, d0 fire rated.",
  },
  {
    title: "Clean Installation",
    subtitle: "Dust-free & non-invasive",
    description: "Zero demolition debris, protecting existing flooring, furniture, and corporate workflows.",
  },
  {
    title: "Durable Solutions",
    subtitle: "Moisture & sag resistant",
    description: "Will never crack, peel, or discolor, providing enduring beauty for decades to come.",
  },
];

// 10. AUTHENTIC TESTIMONIALS FROM ZENCEIL.COM
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

// 11. AUTHENTIC CONTACT DETAILS FROM ZENCEIL.COM
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
    { name: "WhatsApp", href: "https://wa.me/+919819846701" },
    { name: "Facebook", href: "https://www.facebook.com/zenceilstretchceiling" },
    { name: "Instagram", href: "https://www.instagram.com/zenceil_stretch_ceiling/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/zenceil-stretch-ceiling/" },
    { name: "YouTube", href: "https://www.youtube.com/@stretchceilinginteriors7362" },
  ],
};
