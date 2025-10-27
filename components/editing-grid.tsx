"use client"

import { motion } from "framer-motion"

export default function EditingGrid() {
  const items = [
    { id: 1, query: "vertical+editing+shot" },
    { id: 2, query: "horizontal+editing+sequence" },
    { id: 3, query: "editing+detail+shot" },
    { id: 4, query: "color+grading+edit" },
    { id: 5, query: "wide+editing+composition" },
    { id: 6, query: "vertical+final+edit" },
  ]

  const gumletUrls = [
    "https://yourname.gumlet.com/editing-vertical-shot.jpg",
    "https://yourname.gumlet.com/editing-horizontal-sequence.jpg",
    "https://yourname.gumlet.com/editing-detail-shot.jpg",
    "https://yourname.gumlet.com/color-grading-edit.jpg",
    "https://yourname.gumlet.com/editing-wide-composition.jpg",
    "https://yourname.gumlet.com/editing-vertical-final.jpg",
  ]

  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={gumletUrls[index] || "/placeholder.svg"}
                  alt={`Edit ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
