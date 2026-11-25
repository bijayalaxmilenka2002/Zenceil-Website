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
  category: "Commercial" | "Retail" | "Residential" | "Hospitality" | "3D & Acoustic";
  image: string;
  system: string;
  location: string;
  lighting?: string;
  description?: string;
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

// 1. AUTHENTIC HERO SLIDES (5 Curated Flagship Stretch Ceiling Systems)
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero-1-translucent.jpg",
    title: "Tired Of Staring At A Boring Ceiling?",
    subtitle: "Transform your interiors with luminous, shadowless architectural stretch ceilings engineered for seamless brilliance.",
    tagline: "TRANSLUCENT LUMINOUS MEMBRANE",
  },
  {
    id: "slide-2",
    image: "/images/hero-2-lacquer.jpg",
    title: "Want Your Interior To Look Truly Unique?",
    subtitle: "Over 85% mirror optical reflection visually doubles room height, creating breathtaking vertical drama and luxury.",
    tagline: "HIGH-GLOSS MIRROR LACQUER CEILING",
  },
  {
    id: "slide-3",
    image: "/images/hero-3-3d-wave.jpg",
    title: "Parametric 3D Forms & Acoustic Canopies.",
    subtitle: "Sculptural multi-level curved stretch ceilings engineered with lightweight aluminum framing and acoustic dampening.",
    tagline: "PARAMETRIC 3D ACOUSTIC CANOPY",
  },
  {
    id: "slide-4",
    image: "/images/hero-4-starlight.jpg",
    title: "Ceilings Beyond Imagination.",
    subtitle: "Bespoke acoustic stretch ceilings embedded with twinkling fiber optic starlight constellations and celestial nebulae.",
    tagline: "PRINTED ART & FIBER OPTIC STARLIGHT",
  },
  {
    id: "slide-5",
    image: "/images/hero-5-spa-pool.jpg",
    title: "100% Moisture-Proof Spa & Wellness Atriums.",
    subtitle: "Impervious to steam, chlorinated pool vapor, and humidity with a 10-year anti-sag guarantee across 5-star hotels.",
    tagline: "WELLNESS & SPA MEMBRANE SYSTEMS",
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
    image: "/images/products/texture-wave-ceiling.jpg",
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

// 6. ALL 36 AUTHENTIC PROJECT PHOTOGRAPHS FROM ZENCEIL.COM/OUR-WORK/
export const REAL_PROJECT_GALLERY: ProjectPhoto[] = [
  // SECTION: Commercial & Corporate (9 projects)
  {
    id: "proj-1",
    title: "Corporate Headquarters Translucent Light Paneling",
    category: "Commercial",
    image: "/images/projects/1-2.png",
    system: "Translucent Light Ceiling",
    location: "Bandra Kurla Complex (BKC), Mumbai",
    lighting: "GOQ Korean 5000K Natural White LEDs",
    description: "Seamless acoustic translucent ceiling casting shadowless architectural illumination across executive workstations."
  },
  {
    id: "proj-2",
    title: "Godrej Corporate Innovation Hub",
    category: "Commercial",
    image: "/images/projects/1-3.png",
    system: "Micro-Perforated Acoustic Light Membrane",
    location: "Vikhroli, Mumbai",
    lighting: "Circadian 4000K Daylighting Grid",
    description: "Integrated acoustic dampening paired with 95+ CRI backlighting engineered for collaborative engineering pods."
  },
  {
    id: "proj-3",
    title: "Executive Boardroom Geometric Diffuser",
    category: "Commercial",
    image: "/images/projects/1-4.png",
    system: "Architectural Translucent Diffuser",
    location: "Golf Course Road, Gurugram",
    lighting: "Tunable White (3200K–7100K) LED System",
    description: "Laser-aligned geometric ceiling framing engineered with French harpoon tension locking profiles."
  },
  {
    id: "proj-4",
    title: "Corporate Executive Suites Backlit Membrane",
    category: "Commercial",
    image: "/images/projects/10.png",
    system: "Seamless Translucent Membrane",
    location: "Nariman Point, Mumbai",
    lighting: "High-Lumen Perimeter Diffuser",
    description: "Dust-free single-day installation delivering uniform surface radiance for corporate leadership suites."
  },
  {
    id: "proj-5",
    title: "Airport Transit Terminal Membrane Canopy",
    category: "Commercial",
    image: "/images/projects/11.png",
    system: "Aviation-Grade Tensioned Canopy",
    location: "Terminal 2, Mumbai International Airport",
    lighting: "High-Efficiency Commercial Lighting Array",
    description: "Euroclass B-s1, d0 fire-rated architectural membrane engineered for high-traffic international passenger transit."
  },
  {
    id: "proj-6",
    title: "Tech Park Central Innovation Galleria",
    category: "Commercial",
    image: "/images/projects/12.png",
    system: "Large-Format Translucent Light Ceiling",
    location: "Whitefield, Bengaluru",
    lighting: "Korean GOQ High-CRI Backlight Array",
    description: "Over 4,200 sq. ft. of seamless ceiling membrane installed over a multi-floor technology atrium."
  },
  {
    id: "proj-7",
    title: "Airport VIP Executive Lounge Stretch Canopy",
    category: "Commercial",
    image: "/images/projects/21.png",
    system: "Acoustic Translucent Floating Canopy",
    location: "IGI Airport T3, New Delhi",
    lighting: "Circadian Tunable Ambient LEDs",
    description: "Acoustic attenuation and soft ambient luminescence tailored for first-class passenger relaxation."
  },
  {
    id: "proj-8",
    title: "Precision Harpoon Perimeter Engineering",
    category: "Commercial",
    image: "/images/projects/24.png",
    system: "Heavy-Duty Aluminum Harpoon Framework",
    location: "Vasai Fabrication Facility, Mumbai",
    lighting: "Integrated Magnetic Track Channels",
    description: "Certified technicians heat-welding high-tension polymer membrane to proprietary perimeter aluminum rails."
  },
  {
    id: "proj-9",
    title: "Acoustic Micro-Perforated Commercial Pods",
    category: "Commercial",
    image: "/images/projects/25.png",
    system: "Micro-Perforated Acoustic Ceiling",
    location: "Cyber City, Hyderabad",
    lighting: "Recessed Magnetic Spotlight Channels",
    description: "Sound-absorbing micro-perforations reduce speech reverberation while maintaining clean architectural surfaces."
  },

  // SECTION: Retail & Malls (8 projects)
  {
    id: "proj-10",
    title: "Nexus Malls Grand Atrium Parametric Wave",
    category: "Retail",
    image: "/images/projects/2-1.png",
    system: "Parametric 3D Curved Wave Canopy",
    location: "Koramangala, Bengaluru",
    lighting: "RGBW Dynamic DMX Programmed LEDs",
    description: "Cascading 3D wave canopy traversing multi-level shopping gallerias, engineered with curved aluminum framework."
  },
  {
    id: "proj-11",
    title: "Nexus Flagship Galleria Structural Contour",
    category: "Retail",
    image: "/images/projects/2-3.png",
    system: "Contour Harpoon Track & Light Canopy",
    location: "Seawoods Grand Central, Navi Mumbai",
    lighting: "Perimeter Grazing Linear Luminescence",
    description: "Custom radiused perimeter tracks matching complex architectural curves of the flagship retail promenade."
  },
  {
    id: "proj-12",
    title: "Multi-Level Retail Shopping Promenade",
    category: "Retail",
    image: "/images/projects/2-4.png",
    system: "Continuous Translucent Light Ribbon",
    location: "Phoenix Marketcity, Kurla, Mumbai",
    lighting: "Uniform 4100K Neutral White System",
    description: "Linear daylighting ribbon providing comfortable glare-free illumination throughout prime commercial shopping zones."
  },
  {
    id: "proj-13",
    title: "Retail Mall Galleria Ambient Canopy",
    category: "Retail",
    image: "/images/projects/2-5.png",
    system: "High-Transmittance Daylighting Membrane",
    location: "Viman Nagar, Pune",
    lighting: "150° Wide-Dispersion Optical Modules",
    description: "Natural-feel ambient ceiling engineered to elevate shopper footfall dwell time and retail aesthetics."
  },
  {
    id: "proj-14",
    title: "MAC Cosmetics Luxury Flagship Showroom",
    category: "Retail",
    image: "/images/projects/3-1.png",
    system: "Museum-Grade High-CRI 98+ Daylighting",
    location: "Palladium Mall, Lower Parel, Mumbai",
    lighting: "Color-True 5000K Daylight LED Array",
    description: "Delivers exact color fidelity required for high-end luxury cosmetics, makeover consultations, and beauty retail."
  },
  {
    id: "proj-15",
    title: "Shoppers Stop Luxury Department Flagship",
    category: "Retail",
    image: "/images/projects/3-2.png",
    system: "Integrated Track & Ambient Ceiling",
    location: "Ambience Mall, Vasant Kunj, New Delhi",
    lighting: "Dual-Engine Accent & Diffused Luminescence",
    description: "Combines overall ambient stretch ceiling glow with flush-mounted spotlight tracks for premium merchandise."
  },
  {
    id: "proj-16",
    title: "Specialty Beauty Retail Daylighting Grid",
    category: "Retail",
    image: "/images/projects/3-3.png",
    system: "Architectural Translucent Diffuser System",
    location: "Inorbit Mall, Malad, Mumbai",
    lighting: "High-Lumen Korean GOQ Lighting",
    description: "Dust-free overnight installation meeting stringent commercial mall night-work safety protocols."
  },
  {
    id: "proj-17",
    title: "Designer Fashion Boutique Light Canopy",
    category: "Retail",
    image: "/images/projects/3-4.png",
    system: "Floating Luminous Frame Ceiling",
    location: "Jubilee Hills, Hyderabad",
    lighting: "3200K Warm Atmospheric Lighting",
    description: "Ultra-thin perimeter reveal delivering the impression of a floating illuminated architectural skybox."
  },

  // SECTION: Luxury Residential (7 projects)
  {
    id: "proj-18",
    title: "Luxury Penthouse High-Gloss Mirror Lacquer",
    category: "Residential",
    image: "/images/projects/4-1.png",
    system: "High-Gloss Mirror Lacquer Ceiling",
    location: "Altamount Road, South Mumbai",
    lighting: "Reflected Crystal Chandelier & Accents",
    description: "Over 85% optical mirror reflection visually doubles room height, creating majestic vertical spatial drama."
  },
  {
    id: "proj-19",
    title: "Modern Seaside Villa Double-Height Living Room",
    category: "Residential",
    image: "/images/projects/4-2.png",
    system: "Seamless Stretch Ceiling Membrane",
    location: "Awas Beach Villa, Alibaug",
    lighting: "Tunable Warm Ambient Perimeter Grazing",
    description: "Moisture-resistant, anti-fungal membrane engineered to withstand humid coastal conditions with zero sagging."
  },
  {
    id: "proj-20",
    title: "Horizon Penthouse Sky Villa Living Suite",
    category: "Residential",
    image: "/images/projects/5-1.png",
    system: "Reflective Lacquer & Translucent Border",
    location: "Worli Seaface, Mumbai",
    lighting: "Circadian Sunset Warm-Dim LEDs",
    description: "Bespoke dual-finish installation combining central mirror lacquer with backlit perimeter diffuser frames."
  },
  {
    id: "proj-21",
    title: "Private Villa Home Cinema Acoustic Ceiling",
    category: "Residential",
    image: "/images/projects/5-2.png",
    system: "Black Textured Acoustic Membrane",
    location: "Golf Links, New Delhi",
    lighting: "Starlight Fiber Optic Constellation",
    description: "Micro-perforated acoustic membrane dampens bass resonance and creates a mesmerizing private star-field experience."
  },
  {
    id: "proj-22",
    title: "Custom Printed Classical Artwork Ceiling",
    category: "Residential",
    image: "/images/projects/14.png",
    system: "High-Definition Large-Format Printed Art",
    location: "Banjara Hills, Hyderabad",
    lighting: "Perimeter Cove Warm Backlighting",
    description: "Ultra-wide UV printed digital artwork on non-fading architectural polymer, creating an Italian fresco ambiance."
  },
  {
    id: "proj-23",
    title: "Duplex Penthouse Soft-Glow Master Bedroom",
    category: "Residential",
    image: "/images/projects/15.png",
    system: "Translucent Soft Diffuser Ceiling",
    location: "Boat Club Road, Pune",
    lighting: "3000K Warm Dimming Optical Modules",
    description: "Soft uniform illumination replacing harsh ceiling fixtures with soothing, hotel-grade spatial serenity."
  },
  {
    id: "proj-24",
    title: "Luxury Penthouse Cosmic Nebula Printed Ceiling",
    category: "Residential",
    image: "/images/projects/19.png",
    system: "Digital Printed High-Resolution Canvas",
    location: "Bandra West, Mumbai",
    lighting: "Dual-Layer Fiber Optics & Backlit Membrane",
    description: "Custom graphic print paired with fiber optic points reproducing deep-space constellations over a master lounge."
  },

  // SECTION: Hospitality, Hotels & Spas (7 projects)
  {
    id: "proj-25",
    title: "5-Star Hotel Grand Lobby Ambient Luminescence",
    category: "Hospitality",
    image: "/images/projects/6-1.png",
    system: "Luminous Translucent Architectural Ceiling",
    location: "Taj Resort & Convention Centre, Goa",
    lighting: "High-Flux Circadian Tunable Array",
    description: "Welcomes international guests with daylight-emulating soft illumination that adapts from morning sun to evening glow."
  },
  {
    id: "proj-26",
    title: "Luxury Wellness Spa & Hydrotherapy Atrium",
    category: "Hospitality",
    image: "/images/projects/7-1.png",
    system: "100% Moisture-Proof Translucent Membrane",
    location: "The Leela Palace, Udaipur",
    lighting: "Chromatherapy Tunable Wellness LEDs",
    description: "Impervious to steam, chlorinated pool vapor, and humidity, ensuring pristine mold-free beauty indefinitely."
  },
  {
    id: "proj-27",
    title: "Fine Dining Restaurant Textured Acoustic Ceiling",
    category: "Hospitality",
    image: "/images/projects/8-1.png",
    system: "Textured Suede Acoustic Ceiling",
    location: "Park Street, Kolkata",
    lighting: "Warm 2700K Intimate Chandelier Accents",
    description: "Tactile suede finish paired with acoustic backing ensures intimate dining conversation without restaurant clatter."
  },
  {
    id: "proj-28",
    title: "Palace Hotel Grand Ballroom Overhead System",
    category: "Hospitality",
    image: "/images/projects/13.png",
    system: "Multi-Tiered Architectural Ceiling",
    location: "Rambagh Palace, Jaipur",
    lighting: "DMX-Controlled Architectural Scene Lighting",
    description: "Integrated acoustic dampening allows crystal-clear speech and music during high-profile wedding receptions and galas."
  },
  {
    id: "proj-29",
    title: "Boutique Hotel Cocktail Lounge Reflective Ceiling",
    category: "Hospitality",
    image: "/images/projects/17.png",
    system: "Champagne Gold Lacquer Membrane",
    location: "Aerocity, New Delhi",
    lighting: "Indirect Brass Sconce & Chandelier Accents",
    description: "High-gloss metallic membrane reflecting evening cocktail lights and city skylines with mesmerizing elegance."
  },
  {
    id: "proj-30",
    title: "Luxury Wine Lounge Micro-Perforated Canopy",
    category: "Hospitality",
    image: "/images/projects/20.png",
    system: "Textured Acoustic & Concealed Lighting",
    location: "UB City, Bengaluru",
    lighting: "Subdued Amber Accent Luminescence",
    description: "Sophisticated acoustic ceiling creating an exclusive, cellar-like acoustic intimacy for connoisseur tastings."
  },
  {
    id: "proj-31",
    title: "Luxury Resort Atrium Double-Curved Canopy",
    category: "Hospitality",
    image: "/images/projects/16.png",
    system: "Architectural Free-Form Tensioned Surface",
    location: "East Coast Road, Chennai",
    lighting: "Circadian Sunset Tunable Lighting",
    description: "Compound curved membrane engineered to mimic ocean waves across the resort grand atrium."
  },

  // SECTION: 3D Form & Sculptural Ceilings (5 projects)
  {
    id: "proj-32",
    title: "Parametric 3D Curved Wave Auditorium",
    category: "3D & Acoustic",
    image: "/images/projects/18.png",
    system: "3D Form Multi-Level Aluminum Framing",
    location: "SG Highway, Ahmedabad",
    lighting: "Contour-Follower Linear Flexible LEDs",
    description: "Structural lightweight framing creates dynamic fluid waves across a 600-seat corporate auditorium."
  },
  {
    id: "proj-33",
    title: "Sculptural Multi-Level Organic Atrium Canopy",
    category: "3D & Acoustic",
    image: "/images/projects/22.png",
    system: "Compound 3D Curvature Harpoon System",
    location: "Andheri East Corporate Hub, Mumbai",
    lighting: "Concealed Perimeter Flexible Diffusers",
    description: "Bespoke compound curves engineered in 3D CAD and fabricated with high-frequency RF-welded membranes."
  },
  {
    id: "proj-34",
    title: "Vaulted Arch Tensile Spatial Installation",
    category: "3D & Acoustic",
    image: "/images/projects/23.png",
    system: "Vaulted Barrel & Dome Stretch Ceiling",
    location: "Senapati Bapat Road, Pune",
    lighting: "Apex Indirect Grazing Array",
    description: "Replaces traditional heavy plaster vaults with lightweight, crack-proof tensioned membranes installed in days."
  },
  {
    id: "proj-35",
    title: "Architectural Double-Curvature Compound Ceiling",
    category: "3D & Acoustic",
    image: "/images/projects/26.png",
    system: "3D Complex Geometrical Tension System",
    location: "DLF Cyber City, Gurugram",
    lighting: "Segmented Micro-LED Channel Illumination",
    description: "Continuous tensioned surface floating across multiple structural columns with zero visible joints or seams."
  },
  {
    id: "proj-36",
    title: "Circular Floating Light Halo Tensioned System",
    category: "3D & Acoustic",
    image: "/images/projects/27-1.png",
    system: "Seamless 3D Ring Halo Light Ceiling",
    location: "Zenceil Design Center, Vasai, Mumbai",
    lighting: "Uniform 360° Radial GOQ LED Engine",
    description: "Engineered circular halo suspended cleanly beneath raw architectural ceilings, functioning as an artistic chandelier."
  }
];

// 7. INSTALLATION STEPS (Authentic Zenceil Methodology)
export const INSTALLATION_STEPS: InstallationStep[] = [
  {
    step: "STEP 01",
    number: "01",
    title: "Consultation & Planning",
    description: "Understand the space, site dimensions, design requirements, and lighting expectations.",
    visual: "Professional site consultation and laser ceiling measurements.",
    image: "/images/projects/1-4.png",
  },
  {
    step: "STEP 02",
    number: "02",
    title: "Design & Lighting",
    description: "Plan the ceiling finish, perimeter aluminum framework, and GOQ LED lighting layout.",
    visual: "Architectural CAD planning, structural framing, and lighting calculation.",
    image: "/images/projects/24.png",
  },
  {
    step: "STEP 03",
    number: "03",
    title: "Professional Installation",
    description: "Execute the stretch ceiling installation with a clean, dust-free process in as little as 1 day.",
    visual: "Certified technicians securing precision harpoon membrane into aluminum tracks.",
    image: "/images/projects/2-4.png",
  },
  {
    step: "STEP 04",
    number: "04",
    title: "Final Handover & Warranty",
    description: "Review completed ceiling tension, activate warranty, and deliver the finished space.",
    visual: "Flawless tension inspection and handover of the completed interior.",
    image: "/images/projects/1-2.png",
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

// 12. ARCHITECTURAL FAQS FOR CLIENT GUIDANCE & SEO SCHEMA
export interface FAQItem {
  question: string;
  answer: string;
  category: "Installation" | "Durability" | "Integration" | "Acoustics";
}

export const ARCHITECTURAL_FAQS: FAQItem[] = [
  {
    category: "Installation",
    question: "How long does a stretch ceiling installation take compared to conventional POP or gypsum?",
    answer: "A standard room installation takes only 4 to 8 hours with zero dust, zero debris, and no need to vacate furniture. Unlike gypsum or POP ceilings which take 2 to 3 weeks of wet plastering, sanding, and repainting, Zenceil's prefabricated polymer membrane is mounted swiftly on precision aluminum perimeter tracks in a single clean visit.",
  },
  {
    category: "Durability",
    question: "Are Zenceil stretch ceilings 100% moisture-proof and water-resistant?",
    answer: "Yes. Zenceil membranes are completely non-porous, hydrophobic, and impervious to moisture, steam, chlorinated vapors, and condensation. They never rot, mold, flake, or harbor mildew, making them the #1 architectural choice for luxury bathrooms, indoor swimming pools, spas, and coastal properties across India.",
  },
  {
    category: "Integration",
    question: "Can recessed lights, magnetic track systems, AC vents, and sprinklers be integrated?",
    answer: "Absolutely. We install reinforced internal mounting reinforcement rings (transom platforms) behind the membrane before tensioning. This permits flawless integration of recessed LED downlights, magnetic low-voltage linear tracks, chandeliers, HVAC linear slot diffusers, smoke detectors, and fire sprinklers with zero sagging.",
  },
  {
    category: "Durability",
    question: "What is the warranty period and expected lifespan of a Zenceil stretch ceiling?",
    answer: "Zenceil provides a comprehensive 10-year manufacturer warranty guaranteeing the membrane will not sag, warp, discolour, peel, or suffer weld rupture. The expected lifespan of our German/French polymer formulation exceeds 20+ years of maintenance-free performance.",
  },
  {
    category: "Installation",
    question: "Can the ceiling be uninstalled for plumbing or electrical servicing behind it?",
    answer: "Yes. Our proprietary perimeter harpoon locking profile allows certified Zenceil technicians to safely unclip any section of the ceiling for electrical wiring, AC duct servicing, or plumbing leak repairs, and then re-tension it back to its original flawless finish without leaving any marks or needing replacement.",
  },
  {
    category: "Acoustics",
    question: "How do acoustic stretch ceilings improve sound dampening in noisy spaces?",
    answer: "Zenceil acoustic ceilings utilize micro-perforated membranes (up to 250,000 microscopic perforations per m²) paired with acoustic absorbent fleece backing. This dampens reverberation, reduces echo, and absorbs sound waves across voice frequencies, achieving an exceptional Noise Reduction Coefficient (NRC) of up to 0.85.",
  },
];
