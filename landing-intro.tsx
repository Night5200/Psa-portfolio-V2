"use client"

import { useEffect, useState, useRef, memo } from "react"
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

// Adjustable spacing multipliers
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

// ─────────────────────────────────────────────────────────────────────────────
// IframeEmbed: memo-wrapped so it NEVER re-renders after mount.
// This is the critical fix: dangerouslySetInnerHTML re-injects the entire
// iframe (destroying and reloading the video) on every parent re-render.
// By memoizing with no props that change, the DOM node is never touched again.
// ─────────────────────────────────────────────────────────────────────────────
const IframeEmbed = memo(function IframeEmbed({ html }: { html: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: "100%", height: "100%" }}
    />
  )
})

// ─────────────────────────────────────────────────────────────────────────────
// VideoTile: each video is its own component driven by an imperative
// animation controller. This completely decouples the iframe from any
// React re-render caused by animationPhase state changes in the parent.
// ─────────────────────────────────────────────────────────────────────────────
interface VideoTileProps {
  html: string
  posX: number
  posY: number
  rotation: number
  index: number
}

const VideoTile = memo(function VideoTile({ html, posX, posY, rotation, index }: VideoTileProps) {
  const controls = useAnimation()

  // Expose controls so parent can drive animation imperatively
  // without re-rendering this component at all.
  // We store the ref on the component itself for parent access.
  ;(VideoTile as unknown as Record<string, unknown>)[`controls_${index}`] = controls

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
        // GPU compositing: promotes to own layer so animation never triggers repaint
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      <IframeEmbed html={html} />
    </motion.div>
  )
})

export default function LandingIntro({ onComplete }: LandingIntroProps) {
  const [animationPhase, setAnimationPhase] = useState<"scattered" | "merging" | "typewriter">("scattered")

  // Stable random data — generated once, synchronously, before first paint
  const stableData = useRef<StableVideoData | null>(null)
  if (stableData.current === null) {
    stableData.current = buildStableVideoData()
  }
  const { positions, rotations } = stableData.current

  // Keep animation controls for all 6 tiles in a ref array
  // so we can drive them imperatively without any re-renders
  const controlsRef = useRef<ReturnType<typeof useAnimation>[]>([])

  const videoUrls = gumletConfig.landing.videos

  // Phase 1 — on mount: fade in videos at their hex positions
  useEffect(() => {
    // Run fade-in for all tiles immediately on mount
    controlsRef.current.forEach((ctrl, i) => {
      if (!ctrl) return
      ctrl.start({
        opacity: 1,
        transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
      })
    })

    const holdTimer = setTimeout(() => {
      setAnimationPhase("merging")
    }, 3000)

    return () => clearTimeout(holdTimer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Phase 2 — merging: animate all tiles to center
  useEffect(() => {
    if (animationPhase !== "merging") return

    controlsRef.current.forEach((ctrl, i) => {
      if (!ctrl) return
      ctrl.start({
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

    const typewriterTimer = setTimeout(() => {
      setAnimationPhase("typewriter")
    }, 2600)

    return () => clearTimeout(typewriterTimer)
  }, [animationPhase])

  // Phase 3 — typewriter: fade out all tiles, then complete
  useEffect(() => {
    if (animationPhase !== "typewriter") return

    controlsRef.current.forEach((ctrl) => {
      if (!ctrl) return
      ctrl.start({
        opacity: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      })
    })

    const completeTimer = setTimeout(() => {
      onComplete?.()
    }, 2500)

    return () => clearTimeout(completeTimer)
  }, [animationPhase, onComplete])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {videoUrls.map((url, i) => (
        <VideoTileWithRef
          key={i}
          index={i}
          html={url}
          posX={positions[i]?.x ?? 0}
          posY={positions[i]?.y ?? 0}
          rotation={rotations[i] ?? 0}
          controlsRef={controlsRef}
        />
      ))}

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

// Thin wrapper that registers its animation controls into the parent's ref array
// on mount. This avoids any imperative handle or forwardRef complexity.
interface VideoTileWithRefProps extends VideoTileProps {
  controlsRef: React.MutableRefObject<ReturnType<typeof useAnimation>[]>
}

function VideoTileWithRef({ controlsRef, index, html, posX, posY, rotation }: VideoTileWithRefProps) {
  const controls = useAnimation()

  useEffect(() => {
    controlsRef.current[index] = controls
  }, [controls, controlsRef, index])

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
