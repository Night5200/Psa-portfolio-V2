"use client"

/**
 * app/generative-ai/page.tsx  (MODIFIED)
 *
 * Layout composition (top → bottom):
 *   1. Navigation            — unchanged, required
 *   2. GenerativeAIHero      — modified: removed placeholder banner, headline only
 *   3. AIVideoGrid           — NEW: 2×2 Wistia hero video grid (Section 1)
 *   4. AIPortraitGrid        — NEW: 3-column portrait video grid (Section 2)
 *   5. AICampaignGallery     — NEW: 2×2 campaign gallery + modal viewer (Sections 3+4)
 *   6. GenerativeAIGrid      — unchanged: project cards, capabilities, CTA
 *   7. CinematographyFooter  — unchanged, required
 */

import Navigation from "@/components/navigation"
import GenerativeAIHero from "@/components/generative-ai-hero"
import AIVideoGrid from "@/components/ai-video-grid"
import AIPortraitGrid from "@/components/ai-portrait-grid"
import AICampaignGallery from "@/components/ai-campaign-gallery"
import GenerativeAIGrid from "@/components/generative-ai-grid"
import CinematographyFooter from "@/components/cinematography-footer"

export default function GenerativeAIPage() {
  return (
    <main className="w-full bg-black text-white">
      {/* Fixed top navigation */}
      <Navigation />

      {/* Section: Page headline + subtitle */}
      <GenerativeAIHero />

      {/* Section 1: 2×2 Wistia hero video grid */}
      <AIVideoGrid />

      {/* Section 2: 3-column portrait video grid */}
      <AIPortraitGrid />

      {/* Sections 3+4: 2×2 campaign gallery with cycling previews + modal */}
      <AICampaignGallery />

      {/* Existing content: project cards, tools & capabilities, CTA */}
      <GenerativeAIGrid />

      {/* Footer */}
      <CinematographyFooter />
    </main>
  )
}

