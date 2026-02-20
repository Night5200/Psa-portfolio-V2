"use client"

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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-[0.02em] text-balance text-center">
            Generative AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where imagination meets intelligence — the future of visual storytelling.
          </p>
        </motion.div>
      </div>

      {/* Hero visual — animated gradient banner */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 mt-12">
        <div className="relative w-full aspect-video overflow-hidden bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-gradient-shift" />
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                                radial-gradient(circle at 60% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 40%)`
            }}
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="text-8xl mb-6">✦</div>
              <p className="text-white/70 text-lg tracking-widest uppercase">AI-Generated Visuals</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
