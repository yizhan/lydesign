export type ProjectStatus = "full" | "scaffold";

export type ProjectContentSection = {
  heading: string;
  body: string;
};

export type ProjectGalleryBlock = {
  layout: "single" | "triple";
  images: string[];
};

export type Project = {
  title: string;
  slug: string;
  location?: string;
  year?: string;
  size?: string;
  completionDate?: string;
  credits?: string;
  tags?: string[];
  category: string;
  coverImage: string;
  topStripImage?: string;
  planImages?: string[];
  gallery: string[];
  galleryBlocks?: ProjectGalleryBlock[];
  excerpt: string;
  contentSections: ProjectContentSection[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: "Seacliff Court Residence",
    slug: "seacliff-court-residence",
    location: "Auckland, NZ",
    year: "2025",
    size: "Single Family Home",
    completionDate: "2025",
    credits: "Design & Project by LYDesign Studio",
    tags: ["architecture", "residential exterior"],
    category: "Residential Exterior",
    coverImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80",
    topStripImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2400&q=80",
    planImages: [
      "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=1200&q=80",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1613553426355-153f7f9f9d6f?auto=format&fit=crop&w=2000&q=80",
    ],
    galleryBlocks: [
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2200&q=80",
        ],
      },
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80",
        ],
      },
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2200&q=80",
        ],
      },
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=2200&q=80",
        ],
      },
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2200&q=80",
        ],
      },
      {
        layout: "triple",
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1613553426355-153f7f9f9d6f?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        layout: "single",
        images: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2200&q=80",
        ],
      },
    ],
    excerpt:
      "A coastal family home composed as layered horizontal planes with warm cedar, deep shadow lines, and wide garden-facing glazing.",
    contentSections: [
      {
        heading: "Overview",
        body: "Seacliff Court Residence is a residential exterior project designed to establish calm presence from the street while opening generously to light and landscape at the rear.",
      },
      {
        heading: "Services and Scope",
        body: "LYDesign delivered concept design, facade composition studies, material and color direction, exterior detailing strategy, and construction-phase coordination.",
      },
      {
        heading: "Challenge",
        body: "The site required privacy from neighboring properties without sacrificing daylight and connection to the garden terraces.",
      },
      {
        heading: "Solution",
        body: "We used staggered facade planes, carefully proportioned apertures, and a high-contrast palette of cedar, mineral render, and dark metal trims to control sightlines and frame views.",
      },
      {
        heading: "Result",
        body: "The completed exterior reads as quiet and refined from arrival, then unfolds into bright social spaces with a strong indoor-outdoor relationship.",
      },
    ],
    status: "full",
  },
  {
    title: "Harbour Edge House",
    slug: "harbour-edge-house",
    location: "North Shore, NZ",
    year: "2024",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Cantilevered upper form with sheltered ground-level courtyard.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Totara Ridge Pavilion",
    slug: "totara-ridge-pavilion",
    location: "Auckland, NZ",
    year: "2024",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Stepped volume with framed green outlook and textured masonry.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Hillview Terrace",
    slug: "hillview-terrace",
    location: "Wellington, NZ",
    year: "2023",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Long roofline silhouette and sheltered entry court sequence.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Cedar Lane Villa",
    slug: "cedar-lane-villa",
    location: "Auckland, NZ",
    year: "2023",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Refined pavilion expression with timber and zinc cladding contrast.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Fernbrook Residence",
    slug: "fernbrook-residence",
    location: "Auckland, NZ",
    year: "2023",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Dark vertical facade rhythm with deep set openings.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Stonewater Court",
    slug: "stonewater-court",
    location: "Christchurch, NZ",
    year: "2022",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Textured masonry base with floating light-toned upper volume.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Kauri Point House",
    slug: "kauri-point-house",
    location: "Auckland, NZ",
    year: "2022",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Dual-gabled massing composed with contemporary exterior language.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Riverside Outlook",
    slug: "riverside-outlook",
    location: "Hamilton, NZ",
    year: "2022",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Low horizontal volume anchoring panoramic river views.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Coastline Retreat",
    slug: "coastline-retreat",
    location: "Coromandel, NZ",
    year: "2021",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Weathered timber envelope designed for harsh coastal conditions.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Orchard Corner Home",
    slug: "orchard-corner-home",
    location: "Tauranga, NZ",
    year: "2021",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Monolithic rendered form broken by recessed terraces and screens.",
    contentSections: [],
    status: "scaffold",
  },
  {
    title: "Belmont Rise",
    slug: "belmont-rise",
    location: "Auckland, NZ",
    year: "2021",
    category: "Residential",
    coverImage:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1900&q=80",
    ],
    excerpt: "Crisp facade geometry and carefully framed entry procession.",
    contentSections: [],
    status: "scaffold",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
