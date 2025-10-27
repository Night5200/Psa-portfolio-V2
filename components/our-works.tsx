"use client"

import { motion } from "framer-motion"

const works = [
  {
    title: "Project One",
    type: "video",
    src: "https://yourname.gumlet.com/cinematography-project-one.jpg",
  },
  {
    title: "Project Two",
    type: "video",
    src: "https://yourname.gumlet.com/cinematography-project-two.jpg",
  },
  {
    title: "Project Three",
    type: "video",
    src: "https://yourname.gumlet.com/cinematography-project-three.jpg",
  },
  {
    title: "Project Four",
    type: "video",
    src: "https://yourname.gumlet.com/cinematography-project-four.jpg",
  },
]

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
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900 cursor-pointer"
            >
              <img
                src={work.src || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
