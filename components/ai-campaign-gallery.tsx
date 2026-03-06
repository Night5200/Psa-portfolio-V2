"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Campaign {
  id: string
  title: string
  subtitle: string
  images: string[]
}

const CAMPAIGNS: Campaign[] = [
  {
    id: "nano-marana-2",
    title: "Nano Marana 2",
    subtitle: "AI Product Campaign",
    images: [
      "/nm2-floating-grey.png",
      "/nm2-flatlay.png",
      "/nm2-studio.png",
      "/nm2-floating-dark.png",
      "/nm2-tread.png",
      "/nm2-material.png",
    ],
  },
  {
    id: "fashion-editorial",
    title: "Fashion Editorial",
    subtitle: "AI Fashion Campaign",
    images: [
      "/fashion-shot-1.png",
      "/fashion-shot-2.png",
      "/fashion-shot-3.png",
      "/fashion-shot-4.png",
      "/fashion-shot-5.png",
    ],
  },
  {
    id: "veca-skincare",
    title: "VECA Gentle Cleanser",
    subtitle: "AI Skincare Campaign",
    images: [
      "/veca-pose-4.png",
      "/veca-pose-9.png",
      "/veca-pose-11.png",
      "/veca-pose-13.png",
      "/veca-flatlay.png",
      "/veca-texture.png",
      "/veca-splash.png",
    ],
  },
]

const CYCLE_MS = 2500

function CampaignCard({
  campaign,
  onOpen,
  wide = false,
}: {
  campaign: Campaign
  onOpen: (c: Campaign) => void
  wide?: boolean
}) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % campaign.images.length)
    }, CYCLE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [campaign.images.length])

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={() => onOpen(campaign)}
      className="relative w-full overflow-hidden rounded-2xl bg-gray-900 cursor-pointer group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      style={{ aspectRatio: "9/16" /* CHANGE 1: was "4/3", now "9/16" portrait format */ }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={campaign.images[idx]}
          alt={campaign.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40 block mb-1">
          {campaign.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white">{campaign.title}</h3>
      </div>

      <div className="absolute top-4 right-4 z-10 flex gap-1.5">
        {campaign.images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/15 transition-all duration-300 pointer-events-none" />
    </motion.button>
  )
}

function CampaignModal({
  campaign,
  onClose,
}: {
  campaign: Campaign
  onClose: () => void
}) {
  const [idx, setIdx] = useState(0)

  const goNext = useCallback(() => {
    setIdx((p) => (p + 1) % campaign.images.length)
  }, [campaign.images.length])

  const goPrev = useCallback(() => {
    setIdx((p) => (p === 0 ? campaign.images.length - 1 : p - 1))
  }, [campaign.images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      else if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goNext, goPrev, onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-xs tracking-[0.18em] uppercase text-white/30 block mb-1">
              {campaign.subtitle}
            </span>
            <h2 className="text-2xl font-bold text-white">{campaign.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl bg-gray-900" style={{ aspectRatio: "4/3" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={campaign.images[idx]}
              alt={`${campaign.title} ${idx + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {campaign.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-14 h-10 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200 ${
                i === idx ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-white/30 tracking-widest">
          {idx + 1} / {campaign.images.length}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function AICampaignGallery() {
  const [open, setOpen] = useState<Campaign | null>(null)

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white">AI Campaign Gallery</h2>
          <p className="text-white/40 text-sm mt-2">Click any campaign to browse the full gallery</p>
        </motion.div>

        {/* CHANGE 2: Layout changed from (1 wide hero + 2 side-by-side) to a flat 3-column grid.
            Responsive: 1 col on mobile → 2 cols on tablet → 3 cols on desktop.
            All cards now use the same 4/3 aspect ratio — wide prop no longer passed. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAMPAIGNS.map((c) => (
            <CampaignCard key={c.id} campaign={c} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <CampaignModal campaign={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
