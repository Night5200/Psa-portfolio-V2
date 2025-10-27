"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function EditingGrid() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gumletConfig.editingGrid.map((embed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
