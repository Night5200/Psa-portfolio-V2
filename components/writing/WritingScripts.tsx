"use client"

import { useState } from "react"
import Image from "next/image"
import WritingDocumentViewer from "./WritingDocumentViewer"

const scriptCards = [
  {
    image: "/script-concept-1.jpg",
    thumbnail: "/writing/thumbnails/dabur-real-reels.jpg",
    label: "Dabur Real Juice – Reel Scripts",
    driveFileId: "15lNG6LScIZA2sA2L4t0b5r162omWHBKf",
  },
  {
    image: "/script-concept-2.jpg",
    thumbnail: "/writing/thumbnails/astral-ipl-films.jpg",
    label: "Astral IPL Films – 2026",
    driveFileId: "1tk_93sogdgtsxJLELKnogM6CBXznT5V6",
  },
  {
    image: "/script-concept-3.jpg",
    thumbnail: "/writing/thumbnails/jk-super-cement-script.jpg",
    label: "JK Super Cement – Script",
    driveFileId: "1ebku4DFF8DujJJ-C5cY654LSeCy6C_se",
  },
]

export default function WritingScripts() {
  const [activeDoc, setActiveDoc] = useState<{ title: string; driveFileId: string } | null>(null)

  return (
    <section
      id="scripts"
      style={{
        background: "#0a0a0a",
        padding: "6rem 5vw",
        position: "relative",
      }}
    >
      {/* Top right caption */}
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          right: "5vw",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.6,
          }}
        >
          Blending thoughtful<br />
          design, storytelling, and<br />
          practical problem-solving.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            SCRIPTS
          </h2>
        </div>

        {/* 3-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {scriptCards.map((card, i) => (
            <div
              key={i}
              onClick={() => setActiveDoc({ title: card.label, driveFileId: card.driveFileId })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveDoc({ title: card.label, driveFileId: card.driveFileId })}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail card */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  background: "#e0ddd6",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Real PDF thumbnail */}
                <Image
                  src={card.thumbnail}
                  alt={card.label}
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
                    VIEW SCRIPT
                  </span>
                </div>
              </div>

              {/* Label */}
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                }}
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom description */}
        <div style={{ padding: "0 2vw" }}>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
            }}
          >
            Conceptualised and scripted brand communication films and campaign narratives for reputed brands such as Dabur Real, Astral Pipes, Campus, PhonePe IPL, Minute Maid Orange, SMFG India Credit, JK Super Cement, and Luxor Writing Instruments.
          </p>
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
