"use client"

import { memo } from "react"
import Script from "next/script"
import Navigation from "@/components/navigation"
import CinematographyFooter from "@/components/cinematography-footer"
import { motion } from "framer-motion"

// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
type AspectRatio = "16/9" | "9/16" | "1/1"

interface VideoItem {
  hashedId: string
  aspectRatio: AspectRatio
}

// --------------------------------------------------------------------------
// Video data — replace hashedId values with your real Wistia IDs
// --------------------------------------------------------------------------
const videos: VideoItem[] = [
  { hashedId: "abc1234567", aspectRatio: "16/9" },
  { hashedId: "abc1234568", aspectRatio: "9/16" },
  { hashedId: "abc1234569", aspectRatio: "9/16" },
  { hashedId: "abc1234570", aspectRatio: "16/9" },
  { hashedId: "abc1234571", aspectRatio: "1/1" },
  { hashedId: "abc1234572", aspectRatio: "16/9" },
  { hashedId: "abc1234573", aspectRatio: "9/16" },
  { hashedId: "abc1234574", aspectRatio: "1/1" },
]

// --------------------------------------------------------------------------
// Stable Wistia embed — memoised to prevent re-mounts / flicker
// --------------------------------------------------------------------------
const WistiaEmbed = memo(function WistiaEmbed({ hashedId, aspectRatio }: VideoItem) {
  const paddingMap: Record<AspectRatio, string> = {
    "16/9": "56.25%",
    "9/16": "177.78%",
    "1/1": "100%",
  }
  const paddingTop = paddingMap[aspectRatio]

  return (
    <div
      className={`wistia_embed wistia_async_${hashedId} videoFoam=true muted=true autoPlay=true playsinline=true`}
      style={{ position: "relative", paddingTop, width: "100%", height: 0, overflow: "hidden" }}
    />
  )
})

// --------------------------------------------------------------------------
// Masonry-style column layout helpers
// --------------------------------------------------------------------------
function splitIntoColumns(items: VideoItem[], cols: number): VideoItem[][] {
  const columns: VideoItem[][] = Array.from({ length: cols }, () => [])
  items.forEach((item, i) => columns[i % cols].push(item))
  return columns
}

// --------------------------------------------------------------------------
// Single video card — no animation wrapper so embeds never re-mount
// --------------------------------------------------------------------------
const VideoCard = memo(function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-gray-900">
      <WistiaEmbed hashedId={video.hashedId} aspectRatio={video.aspectRatio} />
    </div>
  )
})

// --------------------------------------------------------------------------
// Page
// --------------------------------------------------------------------------
export default function AIPage() {
  const twoColLeft = splitIntoColumns(videos, 2)[0]
  const twoColRight = splitIntoColumns(videos, 2)[1]

  return (
    <>
      {/* Wistia player script — loaded once, lazily */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />

      <main className="w-full min-h-screen bg-black text-white">
        <Navigation />

        {/* ── Hero heading ─────────────────────────────────────────── */}
        <section className="pt-36 pb-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            >
              Generative AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
            >
              AI-driven visual storytelling and media production.
            </motion.p>
          </div>
        </section>

        {/* ── Video grid ───────────────────────────────────────────── */}
        {/*
          Two-column masonry layout for ≥ md screens.
          Single column on mobile.
          Videos are NOT wrapped in animation divs — this prevents
          Framer Motion from unmounting/remounting embeds on scroll.
        */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">

            {/* Desktop: two masonry columns */}
            <div className="hidden md:flex gap-6 items-start">
              {/* Left column */}
              <div className="flex-1 flex flex-col gap-6">
                {twoColLeft.map((video) => (
                  <VideoCard key={video.hashedId} video={video} />
                ))}
              </div>
              {/* Right column */}
              <div className="flex-1 flex flex-col gap-6">
                {twoColRight.map((video) => (
                  <VideoCard key={video.hashedId} video={video} />
                ))}
              </div>
            </div>

            {/* Mobile: single column */}
            <div className="flex flex-col gap-6 md:hidden">
              {videos.map((video) => (
                <VideoCard key={video.hashedId} video={video} />
              ))}
            </div>

          </div>
        </section>

        <CinematographyFooter />
      </main>
    </>
  )
}
