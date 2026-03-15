"use client"

const navItems = [
  { label: "WHO AM I?", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#pitch-decks" },
  { label: "MORE WORK", href: "#scripts" },
  { label: "PHILOSOPHY", href: "#philosophy" },
  { label: "OTHER SKILLS", href: "#skills" },
  { label: "NEXT STEPS", href: "#next-steps" },
  { label: "CONTACT", href: "#contact" },
]

export default function WritingContents() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="contents"
      style={{
        background: "#0a0a0a",
        padding: "5rem 5vw",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gap: "4rem",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left - Large "Content" title */}
        <div>
          <div
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1,
            }}
          >
            Content
          </div>
        </div>

        {/* Middle - Nav items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              style={{
                display: "block",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)",
                fontWeight: 400,
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                letterSpacing: "0.05em",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8B1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right - decorative image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/3",
            background: "linear-gradient(135deg, #1a3d1a 0%, #2d5a2d 40%, #4a7a4a 100%)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Forest path illustration simulation */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 100%, #5a9a5a 0%, #3a7a3a 30%, #1a4a1a 70%, #0a2a0a 100%)",
            }}
          />
          {/* Tree trunks */}
          {[15, 30, 70, 85].map((x, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: 0,
                left: `${x}%`,
                width: "8px",
                height: "90%",
                background: "#2a1a0a",
                opacity: 0.7,
                borderRadius: "4px 4px 0 0",
              }}
            />
          ))}
          {/* Path */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "45%",
              width: "10%",
              height: "60%",
              background: "linear-gradient(to top, #c8a87a, transparent)",
              clipPath: "polygon(30% 100%, 70% 100%, 90% 0%, 10% 0%)",
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </section>
  )
}
