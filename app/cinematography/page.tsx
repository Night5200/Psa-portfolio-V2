"use client"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import CinematographyHero from "@/components/cinematography-hero"
import ProcessSection from "@/components/process-section"
import CinematographyFooter from "@/components/cinematography-footer"
import RecentWorks from "@/components/recent-works"
import OurWorks from "@/components/our-works"
import { gumletConfig } from "@/lib/gumlet-config"

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

      {gumletConfig.process.map((process, index) => (
        <ProcessSection
          key={index}
          title={process.title}
          description={process.description}
          embeds={process.embeds}
          index={index}
        />
      ))}

      <OurWorks />

      <CinematographyFooter />
    </motion.main>
  )
}
