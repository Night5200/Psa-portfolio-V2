"use client"

import Image from "next/image"

export default function WritingAbout() {
  return (
    <section
      id="about"
      style={{
        background: "#0d0d0d",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top label */}
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            marginBottom: "3rem",
          }}
        >
          Garvit Badjatya
        </p>

        {/* Main layout: left = all text, right = portrait */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left column — single continuous narrative */}
          <div>
            {/* Scripty title */}
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
              About Me
            </div>

            {/* All body text in one unbroken column */}
            <div
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: "1.2rem" }}>
                So… who am I?
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                I think that has always been the hardest question for me to answer. In a short span of time, I&apos;ve been a music producer, a cinematographer, a colourist, and now a writer. For a long time, that felt like a red flag — like I couldn&apos;t commit to one thing. But then something changed —
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                While working on an ad for Philips, my script was selected over a script from someone with five more years of experience than me. That&apos;s when it clicked. It wasn&apos;t just the writing. It was the music I chose. The way every cut followed the beat.
              </p>
              <p style={{ marginBottom: "1.2rem" }}>
                The instinct to make sure nothing ever felt off. That&apos;s when I realised something, exploring different art forms wasn&apos;t my weakness. It was my edge. I know how the final result will look, even before I finish writing.
                <br /><br />
                Because when you understand multiple crafts, you don&apos;t just create. You orchestrate.
              </p>
            </div>
          </div>

          {/* Right column — portrait, top-aligned */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "3px solid #8B1A1A",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src="/portrait.png"
                alt="Garvit Badjatya"
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
