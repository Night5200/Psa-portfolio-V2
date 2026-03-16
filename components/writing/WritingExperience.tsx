"use client"

const roles = [
  {
    title: "SCRIPTWRITER + CONTENT WRITER",
    company: "(WHITE RIVERS MEDIA)",
    description:
      "Leading creative projects from initial concept through final execution, ensuring each script stays true to the client's vision and audience expectations.",
  },
  {
    title: "CREATIVE WRITER + CINEMATOGRAPHER",
    company: "(GALIYAARA FILMS)",
    description:
      "Developing cohesive brand systems — including logos, color palettes, and typography — that help brands communicate clearly and memorably.",
  },
  {
    title: "CREATIVE STRATEGIST",
    company: "(PSA STUDIOS)",
    description:
      "Creating custom visuals for digital platforms, editorial content, and print media, adapting style and tone to fit each project's unique needs.",
  },
]

export default function WritingExperience() {
  return (
    <section
      id="experience"
      style={{
        background: "#0a0a0a",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Scripty title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1,
            }}
          >
            Work Experience
          </span>
        </div>

        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0",
          }}
        >
          {roles.map((role, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 2.5rem",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                    marginBottom: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {role.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.75,
                  }}
                >
                  {role.description}
                </p>
              </div>

              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  marginTop: "auto",
                }}
              >
                {role.company}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom paragraph */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            padding: "0 4vw",
          }}
        >
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.85,
            }}
          >
            Before this, I worked as a freelance creative for digital influencers, concepting UGC, writing scripts, and directing shoots end-to-end. The work found real traction, collectively crossing 10 million views. This phase sharpened my instinct for audience behaviour and commercially aware storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
