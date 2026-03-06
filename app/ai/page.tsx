"use client"

import Navigation from "@/components/navigation"
import GenerativeAIHero from "@/components/generative-ai-hero"
import AIVideoGrid from "@/components/ai-video-grid"
import AIPortraitGrid from "@/components/ai-portrait-grid"
import AICampaignGallery from "@/components/ai-campaign-gallery"
import GenerativeAIGrid from "@/components/generative-ai-grid"
import CinematographyFooter from "@/components/cinematography-footer"

export default function AIPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <GenerativeAIHero />
      <AIVideoGrid />
      <AIPortraitGrid />
      <AICampaignGallery />
      <GenerativeAIGrid />
      <CinematographyFooter />
    </main>
  )
}
