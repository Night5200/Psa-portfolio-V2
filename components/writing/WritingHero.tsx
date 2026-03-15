"use client"

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
        justifyContent: "flex-end",
        overflow: "hidden",
        padding: "0 0 3rem 0",
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
        {/* Back card */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "60px",
            width: "200px",
            height: "220px",
            background: "#8B2020",
            transform: "rotate(8deg)",
            borderRadius: "2px",
          }}
        />
        {/* Middle card */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "30px",
            width: "200px",
            height: "220px",
            background: "#5a3a1a",
            transform: "rotate(3deg)",
            borderRadius: "2px",
          }}
        />
        {/* Front card - main writing image simulation */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0",
            width: "200px",
            height: "220px",
            background: "linear-gradient(135deg, #d4c9a0 0%, #c8b98a 50%, #b0a070 100%)",
            transform: "rotate(-4deg)",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Notebook lines simulation */}
          <div style={{ width: "80%", opacity: 0.4 }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  height: "1px",
                  background: "#333",
                  marginBottom: "16px",
                  width: i % 3 === 0 ? "90%" : "100%",
                }}
              />
            ))}
          </div>
          {/* Pen icon */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              right: "20px",
              width: "4px",
              height: "60px",
              background: "#1a1a1a",
              transform: "rotate(-20deg)",
              borderRadius: "2px",
            }}
          />
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
            fontSize: "clamp(5rem, 12vw, 11rem)",
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
            fontSize: "clamp(5rem, 13vw, 12rem)",
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
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
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
