"use client"

import Image from "next/image"

export default function WritingPhilosophy() {
  return (
    <section
      id="philosophy"
      style={{
        background: "#0d0d0d",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top label */}
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            marginBottom: "3rem",
          }}
        >
          Garvit Badjatya
        </p>

        {/* Top row: Creative title + first paragraph */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "3.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1.1,
            }}
          >
            Creative
          </div>

          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.85,
              paddingTop: "0.5rem",
            }}
          >
            For me, creating honest, compelling art is only half the craft — the other half is knowing how to make that art commercially alive. I&apos;m deeply interested in the discipline of shaping creative vision into something that connects, scales, and sustains itself in the market.
          </p>
        </div>

        {/* Two images side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div
            style={{
              aspectRatio: "16/9",
              background: "#1a3a4a",
              position: "relative",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <Image
              src="/color-grading-4.jpeg"
              alt="Creative workspace"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              aspectRatio: "16/9",
              background: "#3a1a1a",
              position: "relative",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <Image
              src="/color-grading-5.jpeg"
              alt="Creative setup"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Bottom row: Philosophy title + second paragraph */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1.1,
            }}
          >
            Philosophy
          </div>

          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.85,
              paddingTop: "0.5rem",
            }}
          >
            I enjoy working on the instinct and strategy, where emotion meets audience awareness. Commerce doesn&apos;t dilute creativity; it sharpens its purpose and reach. My approach is to build work that is both artistically distinctive and commercially intelligent. That balance is not a compromise — it&apos;s a conscious design.
          </p>
        </div>
      </div>
    </section>
  )
}
