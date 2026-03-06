"use client"

/**
 * ai-portrait-grid.tsx
 * SECTION 2 — 3-Column Portrait Video Grid
 *
 * - 3-column responsive grid of portrait-orientation videos
 * - All videos: autoplay, muted, loop, playsInline, no controls
 * - object-cover fills containers maintaining portrait 9:16 ratio
 * - Uses Wistia iframe embeds
 */

import { motion } from "framer-motion"

interface PortraitVideoProps {
  hashedId: string
  index: number
  label?: string
}

// Single portrait video tile
function PortraitVideoTile({ hashedId, index, label }: PortraitVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900 group"
      style={{ aspectRatio: "9/16" }}
    >
      {/* Wistia iframe — portrait, autoplay, muted, loop, no controls */}
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${hashedId}?autoPlay=true&muted=true&loop=true&playsinline=true&controlsVisibleOnLoad=false&playbar=false&fullscreenButton=false&volumeControl=false&settingsControl=false&smallPlayButton=false&playButton=false&endVideoBehavior=loop&fit=cover`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        style={{ objectFit: "cover" }}
        title={label ?? `Portrait Video ${index + 1}`}
      />

      {/* Optional label on hover */}
      {label && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="text-white text-sm font-medium tracking-wide">{label}</p>
        </div>
      )}

      {/* Border polish */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

// Portrait video data — replace hashedId values with your actual Wistia IDs
const PORTRAIT_VIDEOS = [
  { hashedId: "abc123port1", label: "AI Fashion Campaign" },
  { hashedId: "abc123port2", label: "Generative Portraits" },
  { hashedId: "abc123port3", label: "Motion Synthesis" },
]

export default function AIPortraitGrid() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2">
              Vertical Formats
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Portrait Stories
            </h2>
          </div>
        </motion.div>

        {/* 3-column portrait grid — collapses to 1 on mobile, 2 on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {PORTRAIT_VIDEOS.map((video, i) => (
            <PortraitVideoTile
              key={video.hashedId}
              hashedId={video.hashedId}
              index={i}
              label={video.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
