"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function EditingGrid() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top row - 2 videos in 16:9 ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gumletConfig.editingGrid.slice(0, 2).map((embed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full pointer-events-auto" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {gumletConfig.editingGrid.slice(2, 4).map((embed, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full pointer-events-auto" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom row - 3 videos in 9:16 ratio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {gumletConfig.editingGrid.slice(2).map((embed, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full pointer-events-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
