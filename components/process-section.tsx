"use client"

import { motion } from "framer-motion"
import { ImageLightbox } from "./image-lightbox"

interface ProcessSectionProps {
  title: string
  description: string
  embeds: string[]
  index: number
}

export default function ProcessSection({ title, description, embeds, index }: ProcessSectionProps) {
  const bgColor = index % 2 === 0 ? "bg-black" : "bg-[#0a0a0a]"

  const isVideoEmbed = (content: string) => {
    return content.includes("<iframe") || content.includes("gumlet")
  }

  return (
    <section className={`w-full py-4 px-4 ${bgColor} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight text-center">{title}</h2>
          <p className="text-base md:text-lg text-gray-400 font-light">{description}</p>
        </motion.div>

        {/* 3x1 Grid with improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {embeds &&
            Array.isArray(embeds) &&
            embeds.map((embed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900"
              >
                {isVideoEmbed(embed) ? (
                  <div className="w-full h-full relative z-10" dangerouslySetInnerHTML={{ __html: embed }} />
                ) : (
                  <ImageLightbox src={embed || "/placeholder.svg"} alt={`${title} image ${i + 1}`} />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
