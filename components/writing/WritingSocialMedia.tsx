"use client"

export default function WritingSocialMedia() {
  return (
    <section
      id="social-media"
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
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1,
            }}
          >
            Social Media
          </h2>
        </div>

        {/* Handles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                color: "#ffffff",
                letterSpacing: "0.02em",
              }}
            >
              @modisamyak
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "6px",
                letterSpacing: "0.02em",
              }}
            >
              @sambhav_jain_rsj
            </span>
          </div>
        </div>

        {/* Description */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Worked intensively with social media influencers. Wrote scripts for them, shot and edited videos as well. Collectively gathered over 8 million views. Figured out what works on social media and what doesn&apos;t.
          </p>
        </div>
      </div>
    </section>
  )
}
