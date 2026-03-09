"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import AISlideshowGallery from "./ai-slideshow-gallery"

const VIDEOS = [
  "8glhy7vhwt",
  "hwn4ew66sc",
  "ynk4cid3fo",
  "8glhy7vhwt", // replace with 4th video ID
]

function getEmbed(id: string) {
  return `
<style>
wistia-player[media-id='${id}']:not(:defined) {
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');
  display:block;
  filter:blur(5px);
  padding-top:56.25%;
}
</style>

<wistia-player
  media-id="${id}"
  aspect="1.7777777777777777"
  autoplay
  muted
></wistia-player>
`
}

function WistiaVideoTile({ id, index }: { id: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full rounded-xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
      dangerouslySetInnerHTML={{ __html: getEmbed(id) }}
    />
  )
}

export default function AIVideoGrid() {

  // Load Wistia player script ONCE
  useEffect(() => {
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script = document.createElement("script")
      script.src = "https://fast.wistia.com/player.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
            Featured Work
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {VIDEOS.map((id, i) =>
            i === 3 ? (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <AISlideshowGallery />
              </motion.div>
            ) : (
              <WistiaVideoTile key={`${id}-${i}`} id={id} index={i} />
            )
          )}
        </div>

      </div>
    </section>
  )
}
