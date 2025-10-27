"use client"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import CinematographyHero from "@/components/cinematography-hero"
import ProcessSection from "@/components/process-section"
import CinematographyFooter from "@/components/cinematography-footer"
import RecentWorks from "@/components/recent-works"
import OurWorks from "@/components/our-works"

const processes = [
  {
    title: "Script",
    description: "The foundation of every story",
    videos: [
      "https://yourname.gumlet.com/script-writing.jpg",
      "https://yourname.gumlet.com/screenplay-development.jpg",
      "https://yourname.gumlet.com/narrative-planning.jpg",
    ],
  },
  {
    title: "Storyboard",
    description: "Visual planning meets creative vision",
    videos: [
      "https://yourname.gumlet.com/storyboard-sketches.jpg",
      "https://yourname.gumlet.com/visual-composition.jpg",
      "https://yourname.gumlet.com/shot-planning.jpg",
    ],
  },
  {
    title: "Shoot",
    description: "Capturing the moment with precision",
    videos: [
      "https://yourname.gumlet.com/cinematography-filming.jpg",
      "https://yourname.gumlet.com/camera-work.jpg",
      "https://yourname.gumlet.com/production-set.jpg",
    ],
  },
  {
    title: "Edit",
    description: "Assembling the narrative",
    videos: [
      "https://yourname.gumlet.com/video-editing-workspace.png",
      "https://yourname.gumlet.com/post-production.jpg",
      "https://yourname.gumlet.com/editing-suite.png",
    ],
  },
  {
    title: "Grade",
    description: "The final emotional touch",
    videos: [
      "https://yourname.gumlet.com/color-grading.jpg",
      "https://yourname.gumlet.com/color-correction.jpg",
      "https://yourname.gumlet.com/final-grade.jpg",
    ],
  },
]

export default function CinematographyPage() {
  return (
    <motion.main
      className="w-full bg-black text-white"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navigation />
      <CinematographyHero />

      <RecentWorks />

      <section className="w-full py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-[30px] text-center"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-white text-center py-4">Process</h2>
            <div className="w-full h-px bg-white/20 mt-6"></div>
          </motion.div>
        </div>
      </section>

      {processes.map((process, index) => (
        <ProcessSection
          key={index}
          title={process.title}
          description={process.description}
          videos={process.videos}
          index={index}
        />
      ))}

      <OurWorks />

      <CinematographyFooter />
    </motion.main>
  )
}
