"use client"

import Image from "next/image"

const skills = [
  {
    title: "MUSIC PRODUCTION",
    description:
      "Worked as a freelancer on Fiverr for 2 years. Produced EDM for DJs and viral beats for radio jockeys. Bought my first camera through it.",
    bg: "#8B1A1A",
    titleColor: "#ffffff",
  },
  {
    title: "CINEMATOGRAPHY",
    description:
      "Started as a cinematographer in my hometown for a media agency. Shot lots of UGCs for brands, understood what goes viral and what does not.",
    bg: "#f0ede6",
    titleColor: "#1a1a1a",
    textColor: "#1a1a1a",
  },
  {
    title: "GENERATIVE AI",
    description:
      "Shifted to Mumbai and started applying AI intensively in my workflow, with the aim of reducing labour and increasing human creativity.",
    bg: "#f0ede6",
    titleColor: "#1a1a1a",
    textColor: "#1a1a1a",
  },
  {
    title: "COLORIST",
    description:
      "I can't rest in peace until I get the results that I want, so learnt colour grading to match my cinematography to those of films.",
    bg: "#8B1A1A",
    titleColor: "#ffffff",
  },
]

const skillImages = [
  "/cinematography-project-one.jpg",
  "/cinematography-project-two.jpg",
  "/cinematography-project-three.jpg",
  "/cinematography-project-four.jpg",
  "/editing-postproduction-1.jpg",
]

export default function WritingSkills() {
  return (
    <section
      id="skills"
      style={{
        background: "#0a0a0a",
        padding: "6rem 5vw",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#8B1A1A",
              lineHeight: 1,
            }}
          >
            Other skills
          </h2>
        </div>

        {/* Image strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "4px",
            marginBottom: "0",
            height: "120px",
          }}
        >
          {skillImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#1a1a1a",
              }}
            >
              <Image
                src={img}
                alt={`Skill ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* 4-column cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                background: skill.bg,
                padding: "2rem 1.8rem",
                borderRight: i < 3 ? "1px solid rgba(0,0,0,0.15)" : "none",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: skill.titleColor,
                  letterSpacing: "0.06em",
                }}
              >
                {skill.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.9rem",
                  color: skill.textColor || "rgba(255,255,255,0.9)",
                  lineHeight: 1.7,
                }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer year */}
        <div
          style={{
            textAlign: "right",
            marginTop: "2rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            2026
          </span>
        </div>
      </div>
    </section>
  )
}
