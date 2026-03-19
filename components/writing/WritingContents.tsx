"use client"

import Image from "next/image"

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
              fontSize: "clamp(3rem, 6vw, 5rem)",
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
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/writing-content.jpeg"
            alt="Forest path illustration"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  )
}
