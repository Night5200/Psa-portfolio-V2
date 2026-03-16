"use client"

const decks = [
  {
    title: "Sin Denim",
    description: "A project in collaboration with Hardik Pandya",
    year: "2027",
  },
  {
    title: "Paytm Gold",
    description: "Multi-regional campaign targeting the North and South Indian audience",
    year: "2027",
  },
  {
    title: "JK Super Cement",
    description: "DVC/TVC campaign for JK Super Cement and Lucknow Super Giants",
    year: "2026",
  },
  {
    title: "Liberty General Insurance",
    description: "Republic Day AI film for Liberty General Insurance",
    year: "2026",
  },
]

function PitchCard({ title, description, year }: { title: string; description: string; year: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          background: "#e8e6e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "2px",
        }}
      >
        {/* C logo circle */}
        <div
          style={{
            width: "52px",
            height: "52px",
            background: "#1a1a1a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.4rem",
              fontStyle: "italic",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            C
          </span>
        </div>
      </div>

      {/* Caption */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default function WritingPitchDecks() {
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
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
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
            <PitchCard key={i} {...deck} />
          ))}
        </div>
      </div>
    </section>
  )
}
