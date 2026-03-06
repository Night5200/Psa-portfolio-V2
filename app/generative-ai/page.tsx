"use client"

import Navigation from "@/components/navigation"
import GenerativeAIHero from "@/components/generative-ai-hero"
import GenerativeAIGrid from "@/components/generative-ai-grid"
import CinematographyFooter from "@/components/cinematography-footer"

export default function GenerativeAIPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <GenerativeAIHero />
      <GenerativeAIGrid />
      <CinematographyFooter />
    </main>
  )
}
