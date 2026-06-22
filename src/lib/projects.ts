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

type RealProjectInput = {
  title: string;
  folder?: string;
  images: string[];
  excerpt: string;
  year?: string;
};

const websitePhotoBase = "/website-photo";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function imagePath(folder: string, image: string) {
  return `${websitePhotoBase}/${folder}/${image}`;
}

function createGalleryBlocks(images: string[]): ProjectGalleryBlock[] {
  if (images.length === 3) {
    return [{ layout: "triple", images }];
  }

  if (images.length >= 4) {
    const blocks: ProjectGalleryBlock[] = [{ layout: "single", images: [images[0]] }];
    const remaining = images.slice(1);

    for (let index = 0; index < remaining.length; index += 3) {
      const group = remaining.slice(index, index + 3);

      if (group.length === 3) {
        blocks.push({ layout: "triple", images: group });
      } else {
        blocks.push(...group.map((image) => ({ layout: "single" as const, images: [image] })));
      }
    }

    return blocks;
  }

  return images.map((image) => ({ layout: "single", images: [image] }));
}

function realProject({
  title,
  folder = slugify(title),
  images,
  excerpt,
  year = "2025",
}: RealProjectInput): Project {
  const gallery = images.map((image) => imagePath(folder, image));

  return {
    title,
    slug: slugify(title),
    location: "Auckland, NZ",
    year,
    category: "Residential",
    coverImage: gallery[0],
    topStripImage: gallery[0],
    gallery,
    galleryBlocks: createGalleryBlocks(gallery),
    excerpt,
    contentSections: [
      {
        heading: "Overview",
        body: `${title} is part of LYDesign's residential portfolio, documented here with project imagery from the completed design work.`,
      },
    ],
    status: "full",
  };
}

export const projects: Project[] = [
  realProject({
    title: "Lemon Grove Lane",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    excerpt:
      "A residential project with a fuller image set, presented first to show the breadth of the completed design work.",
  }),
  realProject({
    title: "Anehana Place",
    images: ["1.jpg"],
    excerpt: "A compact residential project entry focused on the main exterior design view.",
  }),
  realProject({
    title: "Awanui Road",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    excerpt:
      "A residential design project captured across multiple exterior views and facade moments.",
  }),
  realProject({
    title: "Awanui Road 2",
    images: ["1.jpg"],
    excerpt: "A related Awanui Road residential project represented by its primary design image.",
  }),
  realProject({
    title: "Brighton Road",
    images: ["brighton-road-parnell.jpg", "brighton-road-parnell-2.jpg"],
    excerpt: "A Parnell residential project with paired images showing the architectural proposal.",
  }),
  realProject({
    title: "Dominion Rd",
    images: ["before-1.jpg", "proposed.jpg"],
    excerpt:
      "A residential transformation project pairing the existing condition with the proposed design direction.",
  }),
  realProject({
    title: "Hapua Street",
    images: ["1.jpg", "2.jpg", "3.jpg"],
    excerpt: "A residential project documented through a concise three-image exterior sequence.",
  }),
  realProject({
    title: "Konei Place",
    images: ["konei-place.jpg"],
    excerpt: "A residential project entry led by its primary presentation image.",
  }),
  realProject({
    title: "Mcrobbie Road",
    images: [
      "website-main-page.jpg",
      "image-3.jpg",
      "image-6.jpg",
      "image-9.jpg",
      "image-10.jpg",
      "image-22.jpg",
    ],
    excerpt:
      "A residential project with a broad image set, including the selected website main page view.",
  }),
  realProject({
    title: "Sidwell Rd",
    images: ["sidwell-rd-1.jpg"],
    excerpt: "A residential project represented by its primary Sidwell Road design image.",
  }),
  realProject({
    title: "Somerset Road",
    images: ["1.jpg"],
    excerpt: "A residential project entry focused on the main architectural image.",
  }),
  realProject({
    title: "Sunset Road",
    images: ["1.jpg"],
    excerpt: "A residential project represented by its primary exterior design image.",
  }),
  realProject({
    title: "Sunset Road 2",
    images: ["1.jpg"],
    excerpt: "A second Sunset Road residential project represented by its primary image.",
  }),
  realProject({
    title: "Weiti Bay",
    images: ["1.jpg"],
    excerpt: "A Weiti Bay residential project represented by its main design image.",
  }),
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
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}