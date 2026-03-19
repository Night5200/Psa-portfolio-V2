"use client"

export default function WritingContact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0a0a0a",
        minHeight: "60vh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* Left half - black with contact info */}
      <div
        style={{
          flex: 1,
          padding: "5rem 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Top label */}
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
          }}
        >
          Garvit Badjatya
        </p>

        {/* Scripty "Contact" title */}
        <div>
          <div
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1.1,
              marginBottom: "3rem",
            }}
          >
            Contact
          </div>

          {/* Contact details with left border */}
          <div
            style={{
              borderLeft: "2px solid rgba(255,255,255,0.25)",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <a
              href="tel:9244753374"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8B1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              9244753374
            </a>

            <a
              href="mailto:badjatyasamkit@gmail.com"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8B1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              badjatyasamkit@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/garvit-badjatya"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8B1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              www.linkedin.com/in/garvit-badjatya
            </a>
          </div>
        </div>

        {/* Bottom year */}
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          2026
        </p>
      </div>

      {/* Right half - deep red with thank you */}
      <div
        style={{
          flex: 1,
          background: "#8B1A1A",
          padding: "5rem 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Top nav links */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignSelf: "flex-end",
          }}
        >
          {["About", "Gallery", "Contact"].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Thank you message - vertically centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            Thank you for viewing this portfolio!
          </p>
        </div>

        {/* Bottom year */}
        <div style={{ alignSelf: "flex-end" }}>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            2026
          </p>
        </div>
      </div>
    </section>
  )
}
