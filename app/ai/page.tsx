"use client"

import { memo } from "react"
import Script from "next/script"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import CinematographyFooter from "@/components/cinematography-footer"

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
// Row structure mirrors the Editing page:
//   Row 1 (2-col): indices 0–1
//   Row 2 (2-col): indices 2–3
//   Row 3 (3-col): indices 4–6
// --------------------------------------------------------------------------
const videos: VideoItem[] = [
  { hashedId: "abc1234567", aspectRatio: "16/9" }, // row 1
  { hashedId: "abc1234568", aspectRatio: "16/9" }, // row 1
  { hashedId: "abc1234569", aspectRatio: "16/9" }, // row 2
  { hashedId: "abc1234570", aspectRatio: "16/9" }, // row 2
  { hashedId: "abc1234571", aspectRatio: "9/16" }, // row 3
  { hashedId: "abc1234572", aspectRatio: "9/16" }, // row 3
  { hashedId: "abc1234573", aspectRatio: "9/16" }, // row 3
]

// --------------------------------------------------------------------------
// WistiaEmbed — stable, memoised, videoFoam=true for natural sizing
// --------------------------------------------------------------------------
const WistiaEmbed = memo(function WistiaEmbed({ hashedId, aspectRatio }: VideoItem) {
  const paddingTop =
    aspectRatio === "9/16" ? "177.78%" :
    aspectRatio === "1/1"  ? "100%"    :
                             "56.25%"

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
// Page
// --------------------------------------------------------------------------
export default function AIPage() {
  const row1 = videos.slice(0, 2)
  const row2 = videos.slice(2, 4)
  const row3 = videos.slice(4)

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

        {/* ── Video grid — exact structure from Editing page ────────── */}
        <section className="w-full bg-black py-24 px-4">
          <div className="max-w-7xl mx-auto">

            {/* Row 1 — 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {row1.map((video, index) => (
                <motion.div
                  key={video.hashedId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full">
                    <div className="w-full pointer-events-auto">
                      <WistiaEmbed hashedId={video.hashedId} aspectRatio={video.aspectRatio} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2 — 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {row2.map((video, index) => (
                <motion.div
                  key={video.hashedId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full">
                    <div className="w-full pointer-events-auto">
                      <WistiaEmbed hashedId={video.hashedId} aspectRatio={video.aspectRatio} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3 — 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {row3.map((video, index) => (
                <motion.div
                  key={video.hashedId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full">
                    <div className="w-full pointer-events-auto">
                      <WistiaEmbed hashedId={video.hashedId} aspectRatio={video.aspectRatio} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <CinematographyFooter />
    </>
  )
}
