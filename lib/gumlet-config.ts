// ============================================
// GUMLET CONFIGURATION
// ============================================
// Simply paste your complete Gumlet URLs below for each section
// You can use different Gumlet accounts for different sections

// ============================================
// LANDING PAGE - 6 Videos
// ============================================
const LANDING_VIDEOS = [
  "https://yourname1.gumlet.com/landing-video-1.mp4",
  "https://yourname1.gumlet.com/landing-video-2.mp4",
  "https://yourname1.gumlet.com/landing-video-3.mp4",
  "https://yourname1.gumlet.com/landing-video-4.mp4",
  "https://yourname1.gumlet.com/landing-video-5.mp4",
  "https://yourname1.gumlet.com/landing-video-6.mp4",
]

// ============================================
// RECENT WORKS - 1 Video
// ============================================
const RECENT_WORKS_VIDEO = "https://yourname.gumlet.com/recent-works.mp4"

// ============================================
// PROCESS SECTION - 5 Steps (3 images each)
// ============================================
const PROCESS_STEP_1 = [
  "https://yourname.gumlet.com/process-concept-1.jpg",
  "https://yourname.gumlet.com/process-concept-2.jpg",
  "https://yourname.gumlet.com/process-concept-3.jpg",
]

const PROCESS_STEP_2 = [
  "https://yourname.gumlet.com/process-preproduction-1.jpg",
  "https://yourname.gumlet.com/process-preproduction-2.jpg",
  "https://yourname.gumlet.com/process-preproduction-3.jpg",
]

const PROCESS_STEP_3 = [
  "https://yourname.gumlet.com/process-production-1.jpg",
  "https://yourname.gumlet.com/process-production-2.jpg",
  "https://yourname.gumlet.com/process-production-3.jpg",
]

const PROCESS_STEP_4 = [
  "https://yourname.gumlet.com/process-postproduction-1.jpg",
  "https://yourname.gumlet.com/process-postproduction-2.jpg",
  "https://yourname.gumlet.com/process-postproduction-3.jpg",
]

const PROCESS_STEP_5 = [
  "https://yourname.gumlet.com/process-delivery-1.jpg",
  "https://yourname.gumlet.com/process-delivery-2.jpg",
  "https://yourname.gumlet.com/process-delivery-3.jpg",
]

// ============================================
// OUR WORKS - 4 Projects (2 column grid)
// ============================================
const OUR_WORKS_IMAGES = [
  "https://yourname.gumlet.com/project-1.jpg",
  "https://yourname.gumlet.com/project-2.jpg",
  "https://yourname.gumlet.com/project-3.jpg",
  "https://yourname.gumlet.com/project-4.jpg",
]

// ============================================
// EDITING PAGE - Hero Video
// ============================================
const EDITING_HERO_VIDEO = "https://yourname.gumlet.com/editing-hero.mp4"

// ============================================
// EDITING GRID - 6 Images
// ============================================
const EDITING_GRID_IMAGES = [
  "https://yourname.gumlet.com/editing-1.jpg",
  "https://yourname.gumlet.com/editing-2.jpg",
  "https://yourname.gumlet.com/editing-3.jpg",
  "https://yourname.gumlet.com/editing-4.jpg",
  "https://yourname.gumlet.com/editing-5.jpg",
  "https://yourname.gumlet.com/editing-6.jpg",
]

// ============================================
// EXPORT CONFIG
// ============================================
export const gumletConfig = {
  landing: {
    videos: LANDING_VIDEOS,
  },
  recentWorks: {
    video: RECENT_WORKS_VIDEO,
  },
  process: [
    {
      title: "Concept & Planning",
      videos: PROCESS_STEP_1,
    },
    {
      title: "Pre-Production",
      videos: PROCESS_STEP_2,
    },
    {
      title: "Production",
      videos: PROCESS_STEP_3,
    },
    {
      title: "Post-Production",
      videos: PROCESS_STEP_4,
    },
    {
      title: "Final Delivery",
      videos: PROCESS_STEP_5,
    },
  ],
  ourWorks: OUR_WORKS_IMAGES.map((src, i) => ({
    title: `Project ${i + 1}`,
    src,
  })),
  editingHero: {
    video: EDITING_HERO_VIDEO,
  },
  editingGrid: EDITING_GRID_IMAGES,
}
