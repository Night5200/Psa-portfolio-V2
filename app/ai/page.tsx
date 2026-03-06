"use client"

import Navigation from "@/components/navigation"
import GenerativeAIHero from "@/components/generative-ai-hero"
import AIVideoGrid from "@/components/ai-video-grid"
import AIPortraitGrid from "@/components/ai-portrait-grid"
import AICampaignGallery from "@/components/ai-campaign-gallery"
import CinematographyFooter from "@/components/cinematography-footer"

// CHANGE 2: Removed <GenerativeAIGrid /> — all sections between the campaign gallery
// and the footer have been removed. Page order is now:
// Navigation → Hero → VideoGrid → PortraitGrid → CampaignGallery → Footer

export default function AIPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <GenerativeAIHero />
      <AIVideoGrid />
      <AIPortraitGrid />
      <AICampaignGallery />
      <CinematographyFooter />
    </main>
  )
}
