"use client"

/**
 * generative-ai-hero.tsx  (MODIFIED)
 *
 * Changes from original:
 * - Removed the large aspect-video placeholder banner (was decorative placeholder)
 * - Kept the h1 + subtitle text section intact
 * - Added eyebrow label for polish
 * - Tightened bottom padding so the AIVideoGrid below flows naturally
 * - Added a thin decorative rule as visual separator
 *
 * The 2×2 Wistia video grid (AIVideoGrid) now serves as the real visual hero.
 */

import { motion } from "framer-motion"

export default function GenerativeAIHero() {
  return (
    <section className="w-full bg-black pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-6"
          >
            PSA Studios — AI Division
          </motion.span>

          {/* Main heading — unchanged from original */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-[0.02em] text-balance text-center">
            Generative AI
          </h1>

          {/* Subtitle — unchanged from original */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where imagination meets intelligence — the future of visual storytelling.
          </p>
        </motion.div>
      </div>

      {/* Decorative separator */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-center"
        />
      </div>
    </section>
  )
}
