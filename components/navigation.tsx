"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          PSA STUDIOS
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/cinematography"
            className={`relative text-sm font-medium transition-colors ${
              isActive("/cinematography") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Cinematography
            {isActive("/cinematography") && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 40 }}
              />
            )}
          </Link>

          <Link
            href="/editing"
            className={`relative text-sm font-medium transition-colors ${
              isActive("/editing") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Editing
            {isActive("/editing") && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 40 }}
              />
            )}
          </Link>

          <Link
            href="/generative-ai"
            className={`relative text-sm font-medium transition-colors ${
              isActive("/generative-ai") ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Generative AI
            {isActive("/generative-ai") && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 40 }}
              />
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
