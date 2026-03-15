"use client"

import Image from "next/image"

const scriptCards = [
  { image: "/script-concept-1.jpg", label: "Brand Films" },
  { image: "/script-concept-2.jpg", label: "Campaign Scripts" },
  { image: "/script-concept-3.jpg", label: "TVCs & DVCs" },
]

export default function WritingScripts() {
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
        {/* Big red heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              fontWeight: 700,
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
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  style={{ objectFit: "cover", opacity: 0.85 }}
                />
                {/* Overlay C logo */}
                <div
                  style={{
                    position: "absolute",
                    width: "48px",
                    height: "48px",
                    background: "#1a1a1a",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "1.3rem",
                      fontStyle: "italic",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    C
                  </span>
                </div>
              </div>
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
    </section>
  )
}
