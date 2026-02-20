"use client"

import { memo } from "react"
import Script from "next/script"
import Navigation from "@/components/navigation"
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
// Video data — replace hashedId values with your real Wistia IDs.
// 6 videos: 2 per column across 3 columns keeps the grid balanced.
// Add or remove in multiples of 3 for even columns.
// --------------------------------------------------------------------------
const videos: VideoItem[] = [
  { hashedId: "abc1234567", aspectRatio: "16/9" },
  { hashedId: "abc1234568", aspectRatio: "9/16" },
  { hashedId: "abc1234569", aspectRatio: "9/16" },
  { hashedId: "abc1234570", aspectRatio: "16/9" },
  { hashedId: "abc1234571", aspectRatio: "1/1" },
  { hashedId: "abc1234572", aspectRatio: "16/9" },
]

// --------------------------------------------------------------------------
// WistiaEmbed — desktop mode
//
// videoFoam=false  → Wistia does NOT set its own height via padding tricks.
//                    Instead it fills 100% of whatever container it's in.
// The outer cell (VideoCard) owns the height. Wistia letter/pillarboxes
// automatically to fit, so no cropping occurs regardless of aspect ratio.
// --------------------------------------------------------------------------
const WistiaEmbedFill = memo(function WistiaEmbedFill({ hashedId }: { hashedId: string }) {
  return (
    <div
      className={`wistia_embed wistia_async_${hashedId} videoFoam=false muted=true autoPlay=true playsinline=true`}
      style={{ width: "100%", height: "100%" }}
    />
  )
})

// --------------------------------------------------------------------------
// WistiaEmbed — mobile mode
//
// videoFoam=true  → Wistia sets its own height via padding-top.
// On mobile we scroll normally so intrinsic sizing is fine.
// --------------------------------------------------------------------------
const WistiaEmbedFoam = memo(function WistiaEmbedFoam({
  hashedId,
  aspectRatio,
}: VideoItem) {
  const pt =
    aspectRatio === "9/16" ? "177.78%" : aspectRatio === "1/1" ? "100%" : "56.25%"
  return (
    <div
      className={`wistia_embed wistia_async_${hashedId} videoFoam=true muted=true autoPlay=true playsinline=true`}
      style={{ position: "relative", paddingTop: pt, width: "100%", height: 0, overflow: "hidden" }}
    />
  )
})

// --------------------------------------------------------------------------
// VideoCard — desktop
// flex-1 min-h-0: shares column height equally and can shrink below
// intrinsic size. overflow-hidden clips any Wistia overflow.
// --------------------------------------------------------------------------
const VideoCard = memo(function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="flex-1 min-h-0 rounded-xl overflow-hidden bg-gray-900">
      <WistiaEmbedFill hashedId={video.hashedId} />
    </div>
  )
})

// --------------------------------------------------------------------------
// Page
// --------------------------------------------------------------------------
export default function AIPage() {
  // 3-column split: index % 3
  const col1 = videos.filter((_, i) => i % 3 === 0)
  const col2 = videos.filter((_, i) => i % 3 === 1)
  const col3 = videos.filter((_, i) => i % 3 === 2)

  return (
    <>
      {/* Wistia player script — single instance, lazy */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />

      {/*
        Navigation is position:fixed so it floats above everything.
        It must be rendered in the tree so Next.js mounts it.
      */}
      <Navigation />

      {/*
        ── Desktop layout ──────────────────────────────────────────────────
        h-screen overflow-hidden  → hard lock to one viewport, no scrollbar
        flex flex-col             → heading shrinks, grid grows
        ── Mobile layout ───────────────────────────────────────────────────
        md:h-screen / md:overflow-hidden are scoped so mobile scrolls freely
      */}
      <main className="bg-black text-white flex flex-col md:h-screen md:overflow-hidden">

        {/* Nav clearance — nav is fixed at ~80px */}
        <div className="shrink-0 h-20" />

        {/* ── Heading ─────────────────────────────────────────────── */}
        <header className="shrink-0 text-center px-4 pt-6 pb-3">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Generative AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-2 text-base md:text-lg text-gray-400"
          >
            AI-driven visual storytelling and media production.
          </motion.p>
        </header>

        {/* ── Grid ────────────────────────────────────────────────── */}
        {/*
          flex-1 min-h-0 → takes all remaining height in the flex column.
          min-h-0 is mandatory: without it, flex children won't shrink
          below their content size, which would cause overflow.
          overflow-hidden → nothing bleeds past the viewport edge.
          pb-4 → small bottom breathing room.
        */}
        <section className="flex-1 min-h-0 px-4 pb-4">

          {/* Desktop: 3 equal columns that fill section height exactly */}
          <div className="hidden md:flex gap-4 h-full">
            {[col1, col2, col3].map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-4 h-full min-w-0">
                {col.map((video) => (
                  <VideoCard key={video.hashedId} video={video} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: natural scroll, intrinsic aspect-ratio sizing */}
          <div className="flex flex-col gap-4 md:hidden pb-8">
            {videos.map((video) => (
              <div key={video.hashedId} className="w-full rounded-xl overflow-hidden bg-gray-900">
                <WistiaEmbedFoam hashedId={video.hashedId} aspectRatio={video.aspectRatio} />
              </div>
            ))}
          </div>

        </section>
      </main>
    </>
  )
}
