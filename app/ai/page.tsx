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
  { hashedId: "abc1234571", aspectRatio: "1/1"  },
  { hashedId: "abc1234572", aspectRatio: "16/9" },
  { hashedId: "abc1234573", aspectRatio: "9/16" },
  { hashedId: "abc1234574", aspectRatio: "1/1"  },
  { hashedId: "abc1234575", aspectRatio: "16/9" },
]

// --------------------------------------------------------------------------
// WistiaEmbed
// videoFoam=true lets Wistia manage its own height via padding-top.
// This is the stable, natural-scroll approach — no fixed heights needed.
// Memoised so the DOM node is never re-created on parent re-renders.
// --------------------------------------------------------------------------
const WistiaEmbed = memo(function WistiaEmbed({ hashedId, aspectRatio }: VideoItem) {
  const paddingTop =
    aspectRatio === "9/16" ? "177.78%" :
    aspectRatio === "1/1"  ? "100%"    :
                             "56.25%"  // 16/9 default

  return (
    <div
      className={`wistia_embed wistia_async_${hashedId} videoFoam=true muted=true autoPlay=true playsinline=true`}
      style={{
        position: "relative",
        paddingTop,
        width: "100%",
        height: 0,
        overflow: "hidden",
      }}
    />
  )
})

// --------------------------------------------------------------------------
// VideoCard
// Rounded container with dark background — no animation wrapper to prevent
// Framer Motion from unmounting/remounting embeds during scroll.
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
  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />

      <Navigation />

      <main className="w-full bg-black text-white">

        {/* ── Heading ───────────────────────────────────────────────── */}
        <section className="pt-36 pb-10 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            Generative AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
          >
            AI-driven visual storytelling and media production.
          </motion.p>
        </section>

        {/* ── Video grid ────────────────────────────────────────────── */}
        {/*
          3 columns on desktop, 2 on tablet, 1 on mobile.
          Each cell renders at its natural aspect ratio via videoFoam.
          No fixed heights — page scrolls normally.
        */}
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.hashedId} video={video} />
            ))}
          </div>
        </section>

      </main>

      <CinematographyFooter />
    </>
  )
}
