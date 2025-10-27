"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import LandingIntro from "@/components/landing-intro"

export default function Home() {
  const router = useRouter()
  const [isComplete, setIsComplete] = useState(false)

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
      <LandingIntro onComplete={() => setIsComplete(true)} />
    </main>
  )
}
