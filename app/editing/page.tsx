"use client"

import Navigation from "@/components/navigation"
import EditingHero, { EditingHeading } from "@/components/editing-hero"
import EditingGrid from "@/components/editing-grid"
import CinematographyFooter from "@/components/cinematography-footer"

const SHOW_EDITING_HERO = false

export default function EditingPage() {
  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <div className="pt-32">
        <EditingHeading />
      </div>
      {SHOW_EDITING_HERO && <EditingHero />}
      <EditingGrid />
      <CinematographyFooter />
    </main>
  )
}
