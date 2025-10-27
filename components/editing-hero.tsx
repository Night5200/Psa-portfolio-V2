"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function EditingHero() {
  return (
    <section className="w-full bg-black pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-[0.02em] text-balance text-center">
            Editing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where precision meets pacing — stories find their rhythm.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 mt-12">
        <div className="relative w-full aspect-video overflow-hidden bg-gray-900 rounded-2xl shadow-2xl">
          <video src={gumletConfig.editingHero.video} autoPlay loop muted className="w-full h-full object-cover" />

          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  )
}
