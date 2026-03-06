"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

// Paste your full Wistia URLs here — control autoplay, muted, loop etc. directly in the URL params
const HERO_VIDEO_URLS = [
  "https://night5200.wistia.com/medias/8glhy7vhwt?embedType=web_component&autoPlay=true&muted=true&loop=true",
  "https://night5200.wistia.com/medias/hwn4ew66sc?embedType=web_component&autoPlay=true&muted=true&loop=true",
  "https://night5200.wistia.com/medias/ynk4cid3fo?embedType=web_component&autoPlay=true&muted=true&loop=true",
  "https://night5200.wistia.com/medias/8glhy7vhwt?embedType=web_component&autoPlay=true&muted=true&loop=true", // replace with 4th video
]

// Extract the Wistia media ID from the URL
const getId = (url: string) => url.split("/medias/")[1]?.split("?")[0]

function WistiaVideoTile({ url, index }: { url: string; index: number }) {
  const id = getId(url)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
    >
      <style>{`
        wistia-player[media-id='${id}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');
          display: block;
          filter: blur(5px);
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }
      `}</style>

      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${id}" aspect="1.7777777777777777" silent-autoplay="true" style="width:100%;height:100%;"></wistia-player>`,
        }}
      />

      <div className="absolute inset-0 rounded-xl ring-1 ring-white/5 pointer-events-none" />
    </motion.div>
  )
}

export default function AIVideoGrid() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const s = document.createElement("script")
      s.src = "https://fast.wistia.com/player.js"
      s.async = true
      document.head.appendChild(s)
    }

    HERO_VIDEO_URLS.forEach((url) => {
      const id = getId(url)
      if (document.querySelector(`script[src="https://fast.wistia.com/embed/${id}.js"]`)) return
      const s = document.createElement("script")
      s.src = `https://fast.wistia.com/embed/${id}.js`
      s.async = true
      s.type = "module"
      document.head.appendChild(s)
    })
  }, [])

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
            Featured Work
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {HERO_VIDEO_URLS.map((url, i) => (
            <WistiaVideoTile key={`${url}-${i}`} url={url} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
