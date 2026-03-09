"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
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

export default function AISlideshowGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-full rounded-xl bg-gray-900 overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <Image
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        fill
        style={{
          objectFit: "cover",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
        priority={currentIndex === 0}
      />
    </div>
  )
}
