"use client"

export default function WritingNextSteps() {
  return (
    <section
      id="next-steps"
      style={{
        background: "#0d0d0d",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Bottom bar labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4rem",
            opacity: 0.35,
          }}
        >
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "0.8rem", color: "#fff" }}>
            Writer
          </span>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "0.8rem", color: "#fff" }}>
            2026
          </span>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left - illustration */}
          <div
            style={{
              width: "100%",
              maxWidth: "320px",
              aspectRatio: "3/4",
              background: "#f5f0e8",
              position: "relative",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            {/* Watercolor-style butterfly illustration simulation */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(160deg, #f9f5ee 0%, #ede4d0 60%, #d4c9a8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center", padding: "2rem" }}>
                {/* Desk icon */}
                <div
                  style={{
                    width: "80px",
                    height: "60px",
                    background: "#8a7a5a",
                    margin: "0 auto 1rem",
                    borderRadius: "2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "20px",
                      background: "#6a5a3a",
                    }}
                  />
                </div>
                {/* Butterflies */}
                <div style={{ fontSize: "3rem", lineHeight: 1.2 }}>🦋</div>
                <div style={{ fontSize: "2.2rem", lineHeight: 1.2, marginTop: "0.5rem" }}>🦋 🦋</div>
                <div style={{ fontSize: "1.6rem", lineHeight: 1.2, marginTop: "0.3rem" }}>🦋 🦋 🦋</div>
              </div>
            </div>
          </div>

          {/* Right - text */}
          <div>
            {/* Scripty heading */}
            <div
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#8B1A1A",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
              }}
            >
              Next Steps
            </div>

            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              Each project in this portfolio has been a chance to learn and grow — from refining technical &amp; commercial skills to leading creative direction and collaborating across teams.
            </p>

            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.85,
              }}
            >
              My ultimate goal is to see my name on the big screen as a director. I know the journey ahead is long and demanding, and that&apos;s exactly why I want to prepare myself with intention and discipline. I aim to grow rapidly — not just creatively, but technically, mentally, and professionally — so that when the opportunity arrives, I am ready to step into it with confidence and clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
