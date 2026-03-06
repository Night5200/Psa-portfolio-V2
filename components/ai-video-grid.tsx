"use client"

import { motion } from "framer-motion"

// Paste your full Wistia URLs here — only the ID part is used for the embed
// Add/change URLs to swap videos
const HERO_VIDEO_URLS = [
  "https://night5200.wistia.com/medias/8glhy7vhwt",
  "https://night5200.wistia.com/medias/hwn4ew66sc",
  "https://night5200.wistia.com/medias/ynk4cid3fo",
  "https://night5200.wistia.com/medias/8glhy7vhwt", // replace with 4th video URL
]

// Extract the Wistia media ID from the URL
const getId = (url: string) => url.split("/medias/")[1]?.split("?")[0]

function WistiaVideoTile({ url, index }: { url: string; index: number }) {
  const id = getId(url)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Standard Wistia iframe embed — autoPlay=true, muted=true
          Wistia shows its native volume control so users can unmute.
          No custom React audio logic. */}
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${id}?autoPlay=true&muted=true&loop=true&playsinline=true&controlsVisibleOnLoad=true&volumeControl=true`}
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

        {/* 2×2 responsive grid — layout unchanged */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {HERO_VIDEO_URLS.map((url, i) => (
            <WistiaVideoTile key={`${url}-${i}`} url={url} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
