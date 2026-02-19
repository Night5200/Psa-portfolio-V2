"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import LandingIntro from "@/components/landing-intro"

export default function Home() {
  const router = useRouter()
  const [isComplete, setIsComplete] = useState(false)

  // Stable reference — prevents the typewriter useEffect in LandingIntro
  // from re-firing when Home re-renders after setIsComplete(true)
  const handleComplete = useCallback(() => {
    setIsComplete(true)
  }, [])

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        router.push("/cinematography")
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isComplete, router])

  return (
    <main className="w-full bg-black overflow-hidden">
      <LandingIntro onComplete={handleComplete} />
    </main>
  )
}
