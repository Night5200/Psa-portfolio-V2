"use client"

import { useEffect } from "react"
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

  useEffect(() => {
    // Load the Wistia web component script once
    if (!document.querySelector('script[src*="wistia-player.js"]')) {
      const script = document.createElement("script")
      script.src = "https://fast.wistia.com/player.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Wistia web component embed — autoplay, muted, with native UI controls */}
      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${id}" aspect="1.7777777777777777" autoplay muted volume-control="true" playbar="true" style="width:100%;height:100%;"></wistia-player>`
        }}
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
