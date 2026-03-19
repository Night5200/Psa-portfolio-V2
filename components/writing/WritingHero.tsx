"use client"

import Image from "next/image"

export default function WritingHero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "75vh",
        background: "#0a0a0a",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        padding: "4rem 0",
      }}
    >
      {/* Star decoration */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "12%",
          color: "#fff",
          fontSize: "3.5rem",
          lineHeight: 1,
          userSelect: "none",
          zIndex: 10,
        }}
      >
        ✳
      </div>

      {/* Collage of images - layered, rotated */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-30%)",
          width: "340px",
          height: "280px",
          zIndex: 5,
        }}
      >
        {/* Back card - main_3 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "60px",
            width: "200px",
            height: "220px",
            transform: "rotate(8deg)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <Image src="/writing-main-3.jpeg" alt="Writing workspace" fill style={{ objectFit: "cover" }} />
        </div>
        {/* Middle card - main_2 */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "30px",
            width: "200px",
            height: "220px",
            transform: "rotate(3deg)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <Image src="/writing-main-2.jpeg" alt="Typewriter" fill style={{ objectFit: "cover" }} />
        </div>
        {/* Front card - main_1 */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0",
            width: "200px",
            height: "220px",
            transform: "rotate(-4deg)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <Image src="/writing-main-1.jpeg" alt="Vintage desk" fill style={{ objectFit: "cover" }} />
        </div>
      </div>

      {/* Large typographic hero text */}
      <div
        style={{
          position: "relative",
          zIndex: 6,
          padding: "0 5vw",
          width: "100%",
        }}
      >
        {/* "Creative" - large red scripty style */}
        <div
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(4rem, 9vw, 8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#8B1A1A",
            lineHeight: 0.9,
            marginBottom: "-0.1em",
            letterSpacing: "-0.02em",
          }}
        >
          Creative
        </div>

        {/* "Portfolio" - large red serif */}
        <div
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(4rem, 9vw, 8rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#8B1A1A",
            lineHeight: 0.85,
            letterSpacing: "-0.03em",
          }}
        >
          Portfolio
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            marginTop: "0.2em",
          }}
        >
          Garvit Badjatya
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          Creative writer
        </span>
        <span
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          2026
        </span>
      </div>
    </section>
  )
}
