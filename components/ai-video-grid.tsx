"use client"

import { motion } from "framer-motion"

// Replace these with your Wistia video IDs
const HERO_VIDEO_IDS = [
  "8glhy7vhwt",  // Video 1
  "hwn4ew66sc",  // Video 2
  "ynk4cid3fo",  // Video 3
  "8glhy7vhwt",  // Video 4 — replace with your 4th ID
]

function WistiaVideoTile({ hashedId, index }: { hashedId: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
    >
      {/*
        silentAutoPlay=true  — autoplays muted, Wistia shows its own native
        unmute button. When clicked it unmutes AND restarts from beginning,
        which is Wistia's built-in intended behaviour.
      */}
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${hashedId}?silentAutoPlay=true&loop=true&playsinline=true&controlsVisibleOnLoad=true&playbar=false&fullscreenButton=false&settingsControl=false&smallPlayButton=false`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        title={`AI Video ${index + 1}`}
      />

      {/* Border polish */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

export default function AIVideoGrid() {
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

        {/* 2×2 responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {HERO_VIDEO_IDS.map((id, i) => (
            <WistiaVideoTile key={`${id}-${i}`} hashedId={id} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
