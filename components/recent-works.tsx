"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function RecentWorks() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-balance text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Works
        </motion.h2>

        <motion.div
          className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src={gumletConfig.recentWorks.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
