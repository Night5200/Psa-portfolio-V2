"use client"

import { motion } from "framer-motion"

// Replace hashedId values with your actual Wistia portrait video IDs
const PORTRAIT_VIDEOS = [
  { hashedId: "abc123port1", label: "AI Fashion Campaign" },
  { hashedId: "abc123port2", label: "Generative Portraits" },
  { hashedId: "abc123port3", label: "Motion Synthesis" },
]

function PortraitVideoTile({ hashedId, index, label }: { hashedId: string; index: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900 group"
      // CHANGE 1: Reduced from "9/16" → "9/14" so portrait videos are shorter and less dominating
      style={{ aspectRatio: "9/14" }}
    >
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${hashedId}?autoPlay=true&muted=true&loop=true&playsinline=true&controlsVisibleOnLoad=false&playbar=false&fullscreenButton=false&volumeControl=false&settingsControl=false&smallPlayButton=false&playButton=false&endVideoBehavior=loop`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        title={label}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-white text-sm font-medium tracking-wide">{label}</p>
      </div>
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

export default function AIPortraitGrid() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2">
            Vertical Formats
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Portrait Stories</h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-4">
          {PORTRAIT_VIDEOS.map((v, i) => (
            <PortraitVideoTile key={v.hashedId} hashedId={v.hashedId} index={i} label={v.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
