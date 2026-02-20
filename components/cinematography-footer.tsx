"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CinematographyFooter() {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">PSA STUDIOS</h3>
            <p className="text-gray-400 text-sm">Crafted with vision. Made for screens.</p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 text-center">Navigate</h4>
            <div className="space-y-2">
              <p>
                <Link href="/cinematography" className="text-gray-400 hover:text-white transition-colors">
                  Cinematography
                </Link>
              </p>
              <p>
                <Link href="/editing" className="text-gray-400 hover:text-white transition-colors">
                  Editing
                </Link>
              </p>
              <p>
                <Link href="/ai" className="text-gray-400 hover:text-white transition-colors">
                  AI
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 PSA Studios</p>
        </div>
      </div>
    </footer>
  )
}
