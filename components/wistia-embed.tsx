"use client"

import { memo } from "react"
import Script from "next/script"

interface WistiaEmbedProps {
  hashedId: string
  aspectRatio: "16/9" | "9/16" | "1/1"
}

const WistiaEmbed = memo(function WistiaEmbed({ hashedId, aspectRatio }: WistiaEmbedProps) {
  const paddingMap: Record<string, string> = {
    "16/9": "56.25%",
    "9/16": "177.78%",
    "1/1": "100%",
  }
  const paddingTop = paddingMap[aspectRatio] ?? "56.25%"

  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <div
        className={`wistia_embed wistia_async_${hashedId} videoFoam=true autoPlay=true muted=true playsinline=true`}
        style={{ position: "relative", paddingTop, width: "100%", height: 0, overflow: "hidden" }}
      />
    </>
  )
})

export default WistiaEmbed
