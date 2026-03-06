"use client"

/**
 * ai-campaign-gallery.tsx
 * SECTION 3 + 4 — AI Campaign Gallery (2×2 grid) + Modal Viewer
 *
 * Section 3: 2×2 grid of campaign cards, each auto-cycling through preview images
 *   - Images cycle every 2.5 seconds via setInterval
 *   - Campaign title overlaid on card
 *
 * Section 4: Click a card → opens a modal gallery slideshow
 *   - Dark overlay, centered image
 *   - Prev/Next navigation buttons
 *   - Close button (click outside or X)
 *   - Keyboard navigation: ArrowLeft, ArrowRight, Escape
 */

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type KeyboardEvent,
} from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Campaign {
  id: string
  title: string
  subtitle: string
  images: string[]
}

// ─── Campaign Data ────────────────────────────────────────────────────────────
// Three real client campaigns with locally hosted images in /public

const CAMPAIGNS: Campaign[] = [
  {
    id: "nano-marana-2",
    title: "Nano Marana 2",
    subtitle: "AI Product Campaign",
    images: [
      "/nm2-floating-grey.png",   // floating hero — grey bg
      "/nm2-flatlay.png",          // top-down flatlay pair
      "/nm2-studio.png",           // studio pedestal shot
      "/nm2-floating-dark.png",    // floating hero — dark bg
      "/nm2-tread.png",            // extreme tread macro
      "/nm2-material.png",         // material & stitching close-up
    ],
  },
  {
    id: "fashion-editorial",
    title: "Fashion Editorial",
    subtitle: "AI Fashion Campaign",
    images: [
      "/fashion-shot-1.png",   // full look — front
      "/fashion-shot-2.png",   // full look — 3/4
      "/fashion-shot-3.png",   // watch & bracelet detail
      "/fashion-shot-4.png",   // bag clasp close-up
      "/fashion-shot-5.png",   // jewelry — necklace layering
    ],
  },
  {
    id: "veca-skincare",
    title: "VECA Gentle Cleanser",
    subtitle: "AI Skincare Campaign",
    images: [
      "/veca-pose-4.png",    // model holding product front
      "/veca-pose-9.png",    // model seated with product
      "/veca-pose-11.png",   // model pumping product
      "/veca-pose-13.png",   // model cheek pose
      "/veca-flatlay.png",   // product flatlay — teal bg
      "/veca-texture.png",   // foam texture macro
      "/veca-splash.png",    // product with water splash
    ],
  },
]

const CYCLE_INTERVAL_MS = 2500

// ─── CampaignCard — single card with auto-cycling preview ────────────────────

interface CampaignCardProps {
  campaign: Campaign
  onOpen: (campaign: Campaign) => void
  aspectRatio?: string
}

function CampaignCard({ campaign, onOpen, aspectRatio = "4/3" }: CampaignCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Start cycling on mount, clear on unmount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % campaign.images.length)
    }, CYCLE_INTERVAL_MS)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [campaign.images.length])

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={() => onOpen(campaign)}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900 cursor-pointer group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      style={{ aspectRatio }}
      aria-label={`Open ${campaign.title} gallery`}
    >
      {/* Cycling preview images — cross-fade via AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={campaign.images[activeIndex]}
            alt={`${campaign.title} preview ${activeIndex + 1}`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Permanent dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-1 block">
          {campaign.subtitle}
        </span>
        <h3 className="text-xl font-bold text-white leading-tight">
          {campaign.title}
        </h3>
      </div>

      {/* Dot indicator — shows which image is active */}
      <div className="absolute top-4 right-4 z-10 flex gap-1.5">
        {campaign.images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Border polish */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 group-hover:ring-white/15 transition-all duration-300 pointer-events-none" />
    </motion.button>
  )
}

// ─── CampaignModal — full slideshow modal viewer ─────────────────────────────

interface CampaignModalProps {
  campaign: Campaign
  initialIndex?: number
  onClose: () => void
}

function CampaignModal({ campaign, initialIndex = 0, onClose }: CampaignModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % campaign.images.length)
  }, [campaign.images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? campaign.images.length - 1 : prev - 1
    )
  }, [campaign.images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      else if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [goNext, goPrev, onClose])

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Modal inner — stop propagation so clicking image doesn't close */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative flex flex-col items-center w-full max-w-5xl px-4 md:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: title + close */}
        <div className="w-full flex items-center justify-between mb-6">
          <div>
            <span className="text-xs tracking-[0.18em] uppercase text-white/30 block mb-1">
              {campaign.subtitle}
            </span>
            <h2 className="text-2xl font-bold text-white">{campaign.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-900"
          style={{ aspectRatio: "16/9" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={campaign.images[currentIndex]}
                alt={`${campaign.title} — image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next buttons — overlaid on image */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1 w-full justify-center">
          {campaign.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden transition-all duration-200 ${
                i === currentIndex
                  ? "ring-2 ring-white opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <p className="mt-3 text-xs text-white/30 tracking-widest">
          {currentIndex + 1} / {campaign.images.length}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ─── Main exported component ──────────────────────────────────────────────────

export default function AICampaignGallery() {
  const [openCampaign, setOpenCampaign] = useState<Campaign | null>(null)

  const handleOpen = useCallback((campaign: Campaign) => {
    setOpenCampaign(campaign)
  }, [])

  const handleClose = useCallback(() => {
    setOpenCampaign(null)
  }, [])

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2">
            Campaigns
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            AI Campaign Gallery
          </h2>
          <p className="text-white/40 text-sm mt-2">
            Click any campaign to browse the full gallery
          </p>
        </motion.div>

        {/* 3-campaign layout: first card full-width hero, next two side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {/* First campaign — spans full width on its own row */}
          <div className="sm:col-span-2">
            <CampaignCard
              key={CAMPAIGNS[0].id}
              campaign={CAMPAIGNS[0]}
              onOpen={handleOpen}
              aspectRatio="21/9"
            />
          </div>
          {/* Remaining two — side by side */}
          {CAMPAIGNS.slice(1).map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onOpen={handleOpen}
              aspectRatio="4/3"
            />
          ))}
        </div>
      </div>

      {/* Modal — rendered at the section root so it sits above everything */}
      <AnimatePresence>
        {openCampaign && (
          <CampaignModal campaign={openCampaign} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  )
}
