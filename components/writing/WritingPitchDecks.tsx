"use client"

import { useState } from "react"
import Image from "next/image"
import WritingDocumentViewer from "./WritingDocumentViewer"

const decks = [
  {
    title: "Sin Denim",
    description: "A project in collaboration with Hardik Pandya",
    year: "2027",
    driveFileId: "1CZcK_Zha7d9wWW17U1yBiXBKO1vRwAW7",
    thumbnail: "/writing/thumbnails/sin-denim.jpg",
  },
  {
    title: "Paytm Gold",
    description: "Multi-regional campaign targeting the North and South Indian audience",
    year: "2027",
    driveFileId: "1_BjiAUUWHTQxPw_tJ2rqjcWp3tSVpWy0",
    thumbnail: "/writing/thumbnails/paytm-concept-deck.jpg",
  },
  {
    title: "JK Super Cement",
    description: "DVC/TVC campaign for JK Super Cement and Lucknow Super Giants",
    year: "2026",
    driveFileId: "1myzyMTz2yYaVqIPgm0WDdQqxkXS2ga7K",
    thumbnail: "/writing/thumbnails/jk-super-cement-lsg.jpg",
  },
  {
    title: "Liberty General Insurance",
    description: "Republic Day AI film for Liberty General Insurance",
    year: "2026",
    driveFileId: "1ebku4DFF8DujJJ-C5cY654LSeCy6C_se",
    thumbnail: "/writing/thumbnails/liberty-republic-day.jpg",
  },
]

function PitchCard({
  title,
  description,
  thumbnail,
  onClick,
}: {
  title: string
  description: string
  thumbnail: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      style={{ display: "flex", flexDirection: "column", gap: "1rem", cursor: "pointer" }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          background: "#e8e6e0",
          position: "relative",
          overflow: "hidden",
          borderRadius: "2px",
        }}
      >
        {/* Real PDF first-page thumbnail */}
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.22s",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.42)"
            const label = e.currentTarget.querySelector(".view-label") as HTMLElement
            if (label) label.style.opacity = "1"
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0)"
            const label = e.currentTarget.querySelector(".view-label") as HTMLElement
            if (label) label.style.opacity = "0"
          }}
        >
          <span
            className="view-label"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              color: "#ffffff",
              background: "rgba(139,26,26,0.9)",
              padding: "0.35rem 1rem",
              borderRadius: "1px",
              opacity: 0,
              transition: "opacity 0.22s",
              pointerEvents: "none",
            }}
          >
            VIEW DECK
          </span>
        </div>
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.95rem",
          fontStyle: "italic",
          color: "rgba(255,255,255,0.9)",
          lineHeight: 1.4,
          marginBottom: "0.1rem",
        }}
      >
        {title}
      </p>

      {/* Caption */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.6,
          marginTop: "-0.5rem",
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default function WritingPitchDecks() {
  const [activeDoc, setActiveDoc] = useState<{ title: string; driveFileId: string } | null>(null)

  return (
    <section
      id="pitch-decks"
      style={{
        background: "#0d0d0d",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            Garvit
          </p>
        </div>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Pitch Decks
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem 4rem",
          }}
        >
          {decks.map((deck, i) => (
            <PitchCard
              key={i}
              {...deck}
              onClick={() => setActiveDoc({ title: deck.title, driveFileId: deck.driveFileId })}
            />
          ))}
        </div>
      </div>

      {/* Document viewer */}
      <WritingDocumentViewer
        isOpen={activeDoc !== null}
        onClose={() => setActiveDoc(null)}
        title={activeDoc?.title ?? ""}
        driveFileId={activeDoc?.driveFileId ?? ""}
      />
    </section>
  )
}
