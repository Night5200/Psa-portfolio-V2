"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LandingIntroProps {
  onComplete?: () => void
}

interface VideoPosition {
  x: number
  y: number
}

export default function LandingIntro({ onComplete }: LandingIntroProps) {
  const [videoUrls, setVideoUrls] = useState<string[]>([])
  const [positions, setPositions] = useState<VideoPosition[]>([])
  const [animationPhase, setAnimationPhase] = useState<"scattered" | "merging" | "typewriter">("scattered")

  // Adjustable spacing multipliers
  const xSpacingMultiplier = 1.5
  const ySpacingMultiplier = 1.2

  // Initialize videos and positions
  useEffect(() => {
    const radius = 250
    const hexPositions: VideoPosition[] = []

    // Generate hexagonal scatter pattern with random offsets
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 * i) / 6
      const offsetX = (Math.random() - 0.5) * 50
      const offsetY = (Math.random() - 0.5) * 50

      hexPositions.push({
        x: Math.cos(angle) * radius * xSpacingMultiplier + offsetX,
        y: Math.sin(angle) * radius * ySpacingMultiplier + offsetY,
      })
    }

    setPositions(hexPositions)

    setVideoUrls(Array.from({ length: 6 }, (_, i) => `https://yourname.gumlet.com/cinematic-film-scene-${i + 1}.jpg`))
  }, [])

  useEffect(() => {
    if (positions.length === 0) return

    // Phase 1: Hold scattered for 3 seconds
    const holdTimer = setTimeout(() => {
      setAnimationPhase("merging")
    }, 3000)

    return () => clearTimeout(holdTimer)
  }, [positions])

  useEffect(() => {
    if (animationPhase !== "merging") return

    // After merging completes (1.8s) + fade out (0.8s) = 2.6s
    const typewriterTimer = setTimeout(() => {
      setAnimationPhase("typewriter")
    }, 2600)

    return () => clearTimeout(typewriterTimer)
  }, [animationPhase])

  useEffect(() => {
    if (animationPhase !== "typewriter") return

    const completeTimer = setTimeout(() => {
      onComplete?.()
    }, 2500)

    return () => clearTimeout(completeTimer)
  }, [animationPhase, onComplete])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Videos Container */}
      {videoUrls.map((url, i) => {
        const isScattered = animationPhase === "scattered"
        const isMerging = animationPhase === "merging" || animationPhase === "typewriter"

        const staggerDelay = i * 0.1
        const rotationAmount = (Math.random() - 0.5) * 8

        return (
          <motion.div
            key={i}
            initial={{
              x: isScattered ? positions[i]?.x || 0 : 0,
              y: isScattered ? positions[i]?.y || 0 : 0,
              opacity: 1,
              rotate: rotationAmount,
              scale: 0.95,
            }}
            animate={{
              x: isMerging ? 0 : positions[i]?.x || 0,
              y: isMerging ? 0 : positions[i]?.y || 0,
              opacity: animationPhase === "typewriter" ? 0 : 1,
              rotate: isMerging ? 0 : rotationAmount,
              scale: isMerging ? 1 : 0.95,
            }}
            transition={{
              duration: animationPhase === "typewriter" ? 0.8 : isMerging ? 1.6 : 0.3,
              ease: isMerging ? [0.34, 1.56, 0.64, 1] : "easeOut", // Custom cubic-bezier for organic feel
              delay: isMerging ? staggerDelay : 0,
            }}
            style={{
              width: "320px",
              height: "180px",
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: "-160px",
              marginTop: "-90px",
            }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={url || "/placeholder.svg"} alt={`Video ${i + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        )
      })}

      {/* PSA STUDIO Text with Typewriter Animation */}
      {animationPhase === "typewriter" && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute text-8xl font-bold text-center z-10 px-8 py-4"
          style={{
            letterSpacing: "0.15em",
            fontFamily: "Inter, sans-serif",
            color: "#ffffff",
            textShadow: "0 0 30px rgba(0, 0, 0, 0.8)",
          }}
        >
          <TypewriterText text="PSA STUDIO" />
        </motion.h1>
      )}
    </div>
  )
}

function TypewriterText({ text }: { text: string }) {
  const characters = text.split("")

  return (
    <>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: i * 0.08,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
