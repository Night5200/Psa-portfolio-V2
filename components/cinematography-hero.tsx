"use client"

import { motion } from "framer-motion"

export default function CinematographyHero() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-[0.02em] text-center">
          Cinematography
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-4 tracking-wide">
          From concept to color, every frame matters.
        </p>
      </motion.div>
    </section>
  )
}
