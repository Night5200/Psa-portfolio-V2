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
            fontFamily: "'Georgia', serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            marginBottom: "3rem",
          }}
        >
          Garvit Badjatya
        </p>

        {/* Main layout: left text + title, right images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left column */}
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

            {/* Body text */}
            <div
              style={{
                fontFamily: "'Georgia', serif",
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
            </div>
          </div>

          {/* Right column - two stacked images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Portrait image */}
            <div
              style={{
                aspectRatio: "2/3",
                background: "#8B1A1A",
                padding: "8px",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/portrait.png"
                  alt="Garvit Badjatya"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Still life image */}
            <div
              style={{
                aspectRatio: "2/3",
                background: "#8B1A1A",
                padding: "8px",
                borderRadius: "2px",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#1a2a3a",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/writing-about-2.png"
                  alt="Creative workspace"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text spanning full width */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginTop: "2.5rem",
          }}
        >
          <div /> {/* empty left */}
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
            }}
          >
            The instinct to make sure nothing ever felt off. That&apos;s when I realised something, exploring different art forms wasn&apos;t my weakness. It was my edge. I know how the final result will look, even before I finish writing.
            <br /><br />
            Because when you understand multiple crafts, you don&apos;t just create. You orchestrate.
          </p>
        </div>
      </div>
    </section>
  )
}
