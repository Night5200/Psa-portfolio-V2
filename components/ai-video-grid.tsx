"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

// Replace these with your actual Wistia video hashed IDs
const HERO_VIDEO_IDS = [
  "8glhy7vhwt",
  "hwn4ew66sc",
  "ynk4cid3fo",
  "kkzwl5z5es",
]

function WistiaVideoTile({ hashedId, index }: { hashedId: string; index: number }) {
  const [muted, setMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const toggleMute = useCallback(() => {
    const newMuted = !muted
    setMuted(newMuted)
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method: newMuted ? "mute" : "unmute" }),
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
      onClick={toggleMute}
    >
      <iframe
        ref={iframeRef}
        src={`https://fast.wistia.net/embed/iframe/${hashedId}?autoPlay=true&muted=true&loop=true&playsinline=true&controlsVisibleOnLoad=false&playbar=false&fullscreenButton=false&volumeControl=false&settingsControl=false&smallPlayButton=false&playButton=false&endVideoBehavior=loop`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        title={`AI Video ${index + 1}`}
      />
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
          {muted ? <VolumeX className="w-4 h-4 text-white/80" /> : <Volume2 className="w-4 h-4 text-white" />}
        </div>
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {HERO_VIDEO_IDS.map((id, i) => (
            <WistiaVideoTile key={id} hashedId={id} index={i} />
          ))}
        </div>
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
