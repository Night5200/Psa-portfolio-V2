"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

// Add your full Wistia media URLs here
const HERO_VIDEO_URLS = [
  "https://night5200.wistia.com/medias/8glhy7vhwt",  // Video 1
  "https://night5200.wistia.com/medias/hwn4ew66sc",  // Video 2
  "https://night5200.wistia.com/medias/ynk4cid3fo",  // Video 3
  "https://night5200.wistia.com/medias/8glhy7vhwt",  // Video 4 — replace with your 4th URL
]

// Extract the ID from a Wistia URL
const getWistiaId = (url: string) => url.split("/medias/")[1]?.split("?")[0]

const HERO_VIDEO_IDS = HERO_VIDEO_URLS.map(getWistiaId)

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
        Using Wistia's native web component embed.
        autoplay + muted attributes enable silent autoplay.
        Wistia renders its own unmute button natively.
      */}
      <style>{`
        wistia-player[media-id='${hashedId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${hashedId}/swatch');
          display: block;
          filter: blur(5px);
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }
      `}</style>

      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${hashedId}" aspect="1.7777777777777777" autoplay muted style="width:100%;height:100%;"></wistia-player>`,
        }}
      />

      {/* Border polish */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

export default function AIVideoGrid() {
  // Inject Wistia player.js and per-video scripts once
  useEffect(() => {
    // Main player script
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const s = document.createElement("script")
      s.src = "https://fast.wistia.com/player.js"
      s.async = true
      document.head.appendChild(s)
    }

    // Per-video module scripts
    HERO_VIDEO_IDS.forEach((id) => {
      if (document.querySelector(`script[src="https://fast.wistia.com/embed/${id}.js"]`)) return
      const s = document.createElement("script")
      s.src = `https://fast.wistia.com/embed/${id}.js`
      s.async = true
      s.type = "module"
      document.head.appendChild(s)
    })
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
