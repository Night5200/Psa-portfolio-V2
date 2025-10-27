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
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">PSA STUDIOS</h3>
            <p className="text-gray-400 text-sm">Crafted with vision. Made for screens.</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 text-center">Contact</h4>
            <div className="space-y-2">
              <p>
                <a href="mailto:hello@psastudios.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@psastudios.com
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/psastudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://youtube.com/@psastudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </p>
            </div>
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
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 PSA STUDIOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
