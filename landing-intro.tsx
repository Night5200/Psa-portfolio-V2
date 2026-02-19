"use client"

import { useEffect, useLayoutEffect, useRef, useState, memo } from "react"
import { motion, useAnimation } from "framer-motion"
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

const X_SPACING_MULTIPLIER = 1.5
const Y_SPACING_MULTIPLIER = 1.2

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

// IframeEmbed: memo ensures it NEVER re-renders after mount.
// Without this, every parent state change causes React to re-evaluate
// dangerouslySetInnerHTML, destroying and recreating the iframe,
// reloading the video — the visible flash when merge starts.
const IframeEmbed = memo(function IframeEmbed({ html }: { html: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: "100%", height: "100%" }}
    />
  )
})

// VideoTile: owns its own animation controls.
// useLayoutEffect registers controls synchronously before paint so there is
// no race condition between child registration and parent driving animations.
interface VideoTileProps {
  html: string
  posX: number
  posY: number
  rotation: number
  index: number
  controlsRef: React.MutableRefObject<ReturnType<typeof useAnimation>[]>
}

function VideoTile({ html, posX, posY, rotation, index, controlsRef }: VideoTileProps) {
  const controls = useAnimation()

  useLayoutEffect(() => {
    controlsRef.current[index] = controls
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      animate={controls}
      initial={{
        x: posX,
        y: posY,
        opacity: 0,
        rotate: rotation,
        scale: 0.95,
      }}
      style={{
        width: "320px",
        height: "180px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-160px",
        marginTop: "-90px",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      <IframeEmbed html={html} />
    </motion.div>
  )
}

export default function LandingIntro({ onComplete }: LandingIntroProps) {
  const [showTypewriter, setShowTypewriter] = useState(false)

  const stableData = useRef<StableVideoData | null>(null)
  if (stableData.current === null) {
    stableData.current = buildStableVideoData()
  }
  const { positions, rotations } = stableData.current
  const controlsRef = useRef<ReturnType<typeof useAnimation>[]>([])
  const videoUrls = gumletConfig.landing.videos

  // Single effect drives all animation imperatively.
  // No state changes touch video tiles after mount — they are fully isolated
  // from the showTypewriter update that renders the h1.
  useEffect(() => {
    const controls = controlsRef.current

    // Phase 1: fade in at scattered hex positions
    controls.forEach((ctrl, i) => {
      ctrl?.start({
        opacity: 1,
        transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
      })
    })

    // Phase 2: merge to center after 3s
    const mergeTimer = setTimeout(() => {
      controls.forEach((ctrl, i) => {
        ctrl?.start({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            duration: 1.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: i * 0.1,
          },
        })
      })
    }, 3000)

    // Phase 3: fade out tiles + show typewriter after merge completes (3s + 2.6s)
    const fadeTimer = setTimeout(() => {
      controls.forEach((ctrl) => {
        ctrl?.start({
          opacity: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        })
      })
      setShowTypewriter(true)
    }, 5600)

    // Phase 4: call onComplete after typewriter finishes
    const completeTimer = setTimeout(() => {
      onComplete?.()
    }, 8100)

    return () => {
      clearTimeout(mergeTimer)
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {videoUrls.map((url, i) => (
        <VideoTile
          key={i}
          index={i}
          html={url}
          posX={positions[i]?.x ?? 0}
          posY={positions[i]?.y ?? 0}
          rotation={rotations[i] ?? 0}
          controlsRef={controlsRef}
        />
      ))}

      {showTypewriter && (
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
          transition={{ duration: 0.05, delay: i * 0.08 }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
