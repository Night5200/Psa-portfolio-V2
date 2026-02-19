"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

interface LandingIntroProps {
  onComplete?: () => void
}

interface VideoPosition {
  x: number
  y: number
}

interface StableVideoData {
  positions: VideoPosition[]
  rotations: number[]
}

// Adjustable spacing multipliers
const X_SPACING_MULTIPLIER = 1.5
const Y_SPACING_MULTIPLIER = 1.2

// Pre-compute stable video data at module level — generated exactly once,
// never changes across renders, no hydration mismatch since this component
// is "use client" and never SSR-rendered with this data.
function buildStableVideoData(): StableVideoData {
  const radius = 250
  const positions: VideoPosition[] = []
  const rotations: number[] = []

  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 * i) / 6
    const offsetX = (Math.random() - 0.5) * 50
    const offsetY = (Math.random() - 0.5) * 50

    positions.push({
      x: Math.cos(angle) * radius * X_SPACING_MULTIPLIER + offsetX,
      y: Math.sin(angle) * radius * Y_SPACING_MULTIPLIER + offsetY,
    })

    rotations.push((Math.random() - 0.5) * 8)
  }

  return { positions, rotations }
}

export default function LandingIntro({ onComplete }: LandingIntroProps) {
  const [animationPhase, setAnimationPhase] = useState<"scattered" | "merging" | "typewriter">("scattered")
  const [isReady, setIsReady] = useState(false)

  // useRef keeps the same object reference for the entire component lifetime.
  // Generated once on first render (client-side only). Never causes a re-render.
  // Fixes: useMemo(Math.random) hydration mismatch, and random values changing on re-renders.
  const stableData = useRef<StableVideoData | null>(null)
  if (stableData.current === null) {
    stableData.current = buildStableVideoData()
  }

  const { positions, rotations } = stableData.current

  // videoUrls is a module-level constant — no need for useState.
  // Reading it directly avoids the two-setState mount sequence that caused
  // videos to first appear at (0,0) before positions were set.
  const videoUrls = gumletConfig.landing.videos

  // Single mount effect: mark ready so videos render with correct initial positions
  useEffect(() => {
    setIsReady(true)

    // Phase 1: Hold scattered for 3 seconds, then merge
    const holdTimer = setTimeout(() => {
      setAnimationPhase("merging")
    }, 3000)

    return () => clearTimeout(holdTimer)
  }, [])

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
    // onComplete is stabilized with useCallback in page.tsx — safe as a dependency.
  }, [animationPhase, onComplete])

  const isMerging = animationPhase === "merging" || animationPhase === "typewriter"

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Videos Container
          All 6 videos are always mounted (never conditionally removed) so iframes
          are never destroyed/recreated during phase transitions.
          opacity:0 hides them before positions are ready without unmounting. */}
      {videoUrls.map((url, i) => {
        const staggerDelay = i * 0.1
        const rotationAmount = rotations[i] ?? 0
        const posX = positions[i]?.x ?? 0
        const posY = positions[i]?.y ?? 0

        return (
          <motion.div
            key={i}
            initial={{
              x: posX,
              y: posY,
              opacity: 0,
              rotate: rotationAmount,
              scale: 0.95,
            }}
            animate={{
              x: isMerging ? 0 : posX,
              y: isMerging ? 0 : posY,
              // Hidden until client has mounted and positions are confirmed.
              // Fades out entirely during typewriter phase.
              opacity: !isReady ? 0 : animationPhase === "typewriter" ? 0 : 1,
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
            <div dangerouslySetInnerHTML={{ __html: url }} className="w-full h-full" />
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
