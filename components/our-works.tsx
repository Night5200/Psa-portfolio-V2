"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function OurWorks() {
  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Our Works</h2>
        </motion.div>

        {/* 2-column grid for 16:9 videos/images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gumletConfig.ourWorks.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900 cursor-pointer"
            >
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
