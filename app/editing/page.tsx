"use client"

import Navigation from "@/components/navigation"
import EditingHero from "@/components/editing-hero"
import EditingGrid from "@/components/editing-grid"
import CinematographyFooter from "@/components/cinematography-footer"

export default function EditingPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <EditingHero />
      <EditingGrid />
      <CinematographyFooter />
    </main>
  )
}
