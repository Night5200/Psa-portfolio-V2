"use client"

/**
 * ai-video-grid.tsx
 * SECTION 1 — Hero 2x2 Wistia Video Grid
 *
 * - Embeds 4 Wistia videos in a responsive 2x2 grid
 * - All videos autoplay, muted, looped, playsInline, no controls
 * - Click any video to toggle mute/unmute
 * - Uses Wistia's iframe embed with custom params
 */

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

interface WistiaVideoProps {
  hashedId: string
  index: number
}

// Individual mutable video tile using Wistia iframe embed
function WistiaVideoTile({ hashedId, index }: WistiaVideoProps) {
  const [muted, setMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Toggle mute by posting a message to the Wistia player iframe
  const handleToggleMute = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const newMuted = !muted
    setMuted(newMuted)

    // Wistia Player API via postMessage
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        method: newMuted ? "mute" : "unmute",
      }),
      "*"
    )
  }, [muted])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900 cursor-pointer group"
      style={{ aspectRatio: "16/9" }}
      onClick={handleToggleMute}
      role="button"
      tabIndex={0}
      aria-label={`Video ${index + 1} — click to ${muted ? "unmute" : "mute"}`}
      onKeyDown={(e) => e.key === "Enter" && handleToggleMute()}
    >
      {/* Wistia iframe embed — autoplay, muted, loop, no controls */}
      <iframe
        ref={iframeRef}
        src={`https://fast.wistia.net/embed/iframe/${hashedId}?autoPlay=true&muted=true&loop=true&playsinline=true&controlsVisibleOnLoad=false&playbar=false&fullscreenButton=false&volumeControl=false&settingsControl=false&smallPlayButton=false&playButton=false&endVideoBehavior=loop`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full object-cover border-0"
        title={`AI Video ${index + 1}`}
      />

      {/* Mute indicator overlay — subtle, top-right corner */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
          {muted ? (
            <VolumeX className="w-4 h-4 text-white/80" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </div>
      </div>

      {/* Thin border overlay for polish */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

// The 4 Wistia video IDs for the 2x2 hero grid
// Replace these hashed IDs with your actual Wistia video IDs
const HERO_VIDEO_IDS = [
  "mwv0wr4pwv", // Video 1 — top-left
  "2t6xr9v2fb", // Video 2 — top-right
  "uyqekl3ncf", // Video 3 — bottom-left
  "kkzwl5z5es", // Video 4 — bottom-right
]

export default function AIVideoGrid() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
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

        {/* 2×2 responsive video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {HERO_VIDEO_IDS.map((id, i) => (
            <WistiaVideoTile key={id} hashedId={id} index={i} />
          ))}
        </div>

        {/* Click-to-unmute hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-xs text-white/20 tracking-wide"
        >
          Click any video to toggle sound
        </motion.p>
      </div>
    </section>
  )
}
