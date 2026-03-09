"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const SOURCE_IMAGES = [
  "/gallery/frame-1a.jpeg",
  "/gallery/frame-1b.jpeg",
  "/gallery/frame-1c.jpeg",
  "/gallery/frame-2.jpeg",
  "/gallery/frame-2a.jpeg",
  "/gallery/frame-3.jpeg",
  "/gallery/frame-3a.jpeg",
  "/gallery/frame-4.jpeg",
  "/gallery/frame-4b.jpeg",
  "/gallery/frame-5a.jpeg",
]

function shuffleArray(array: string[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function AISlideshowGallery() {
  const [images, setImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Shuffle once on mount
  useEffect(() => {
    setImages(shuffleArray(SOURCE_IMAGES))
  }, [])

  // Advance slide every 2.5s, only after images are ready
  useEffect(() => {
    if (images.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [images])

  if (images.length === 0) return (
    <div
      className="relative w-full rounded-xl bg-gray-900 overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    />
  )

  return (
    <div
      className="relative w-full rounded-xl bg-gray-900 overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
