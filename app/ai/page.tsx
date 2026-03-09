"use client"

import { useState, useEffect, useCallback } from "react"
import Navigation from "@/components/navigation"
import CinematographyFooter from "@/components/cinematography-footer"
import { motion, AnimatePresence } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"
import Image from "next/image"

interface Campaign {
  title: string
  images: string[]
}

function CampaignCard({
  campaign,
  onOpen,
}: {
  campaign: Campaign
  onOpen: () => void
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (campaign.images.length <= 1) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % campaign.images.length)
    }, 2500)
    return () => clearInterval(id)
  }, [campaign.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      style={{ aspectRatio: "9/16" }}
      onClick={onOpen}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={campaign.images[current]}
            alt={campaign.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <div>
          <p className="text-white font-semibold text-lg">{campaign.title}</p>
          <p className="text-white/60 text-sm mt-1">
            {campaign.images.length} images — click to view
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {campaign.images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

function GalleryModal({
  campaign,
  startIndex,
  onClose,
}: {
  campaign: Campaign
  startIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)

  const prev = useCallback(
    () =>
      setIndex((i) => (i - 1 + campaign.images.length) % campaign.images.length),
    [campaign.images.length]
  )

  const next = useCallback(
    () => setIndex((i) => (i + 1) % campaign.images.length),
    [campaign.images.length]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative overflow-hidden rounded-xl shadow-2xl"
          style={{ height: "80vh", aspectRatio: "9/16" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={campaign.images[index]}
                alt={`${campaign.title} - ${index + 1}`}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 mt-5">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>

          <span className="text-white/60 text-sm tabular-nums">
            {index + 1} / {campaign.images.length}
          </span>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            →
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function AIPage() {
  const [modalCampaign, setModalCampaign] = useState<Campaign | null>(null)

  return (
    <main className="w-full bg-black text-white">
      <Navigation />

      <section className="pt-36 pb-0 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Generative AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          AI-driven visual storytelling and media production.
        </motion.p>
      </section>

      <section className="w-full bg-black px-6 md:px-16 py-24">
        <div className="max-w-2xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light italic text-white mb-8 tracking-tight"
          >
            Who am I?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-white/65 leading-[1.95] font-light"
          >
            Well you probably know that I'm an AI artist, that's the reason why you're reading this.
            <br /><br />
            But that's not how it started
            <br /><br />
            My journey started in Indore, where I worked as a Director of Photography on ad films, short films, and UGC content. Being behind the camera taught me how much the little details matter — how light falls, how a frame is composed, and how those small choices can completely change the feeling of an image.
            <br /><br />
            But over time, I started to feel limited by the realities of physical shoots. No matter how hard you try, there are always constraints — locations, budgets, time, crew — and sometimes the vision in your head simply isn’t possible to execute.
            <br /><br />
            Then I discovered AI-generated visuals, and everything changed. Suddenly I could create the kinds of images and scenes that would normally require huge productions.
            <br /><br />
            and That’s what I bring to my work today — the eye of a DOP combined with the creative freedom of AI. When I create visuals, I’m not just thinking about the image itself, but about the small details that make a frame feel alive and natural.
          </motion.p>

        </div>
      </section>

      <CinematographyFooter />
    </main>
  )
}
