"use client"

import Navigation from "@/components/navigation"
import CinematographyFooter from "@/components/cinematography-footer"
import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function AIPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />

      {/* ── Heading ───────────────────────────────────────────────── */}
      <section className="pt-36 pb-0 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 tracking-[0.02em] text-balance"
        >
          Generative AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          AI-driven visual storytelling and media production.
        </motion.p>
      </section>

      {/* ── Video grid — identical structure to Editing page ─────── */}
      <section className="w-full bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">

          {/* 3 videos — single row, 3 columns (mirrors editing page bottom row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gumletConfig.aiGrid.map((embed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full">
                  <div dangerouslySetInnerHTML={{ __html: embed }} className="w-full pointer-events-auto" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CinematographyFooter />
    </main>
  )
}
