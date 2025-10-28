"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
}

export function ImageLightbox({ src, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
        aria-label={`Open ${alt}`}
      >
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center my-auto"
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 group shadow-none"
                aria-label="Close lightbox"
              >
                <div className="absolute inset-0 bg-white/60 rounded-full blur-sm group-hover:bg-white/70 transition-colors" />
                <div className="relative hover:bg-white/60 rounded-full p-3 transition-colors backdrop-blur-sm bg-black shadow-none">
                  <X className="w-6 h-6 text-white" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
