"use client"

import { motion } from "framer-motion"
import { gumletConfig } from "@/lib/gumlet-config"

export default function WritingAIWork() {
  return (
    <section
      id="ai-work"
      style={{
        background: "#0d0d0d",
        padding: "6rem 5vw",
        position: "relative",
      }}
    >
      {/* Top right caption */}
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          right: "5vw",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.6,
          }}
        >
          Blending thoughtful<br />
          design, storytelling, and<br />
          practical problem-solving.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#8B1A1A",
            lineHeight: 1,
            marginBottom: "2.5rem",
          }}
        >
          AI Work
        </h2>

        {/* SAMPLES label */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.12em",
              textDecoration: "underline",
              textUnderlineOffset: "6px",
            }}
          >
            SAMPLES
          </span>
        </div>

        {/* 2x2 Wistia video grid — writing-specific videos from gumletConfig.writingAiGrid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
          style={{ marginBottom: "4rem" }}
        >
          {gumletConfig.writingAiGrid.map((embed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                dangerouslySetInnerHTML={{ __html: embed }}
                className="w-full pointer-events-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* Body text */}
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.9,
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          After experimenting with the integration of AI into my writing process, I&apos;ve developed a smooth, intelligent workflow that consistently delivers reliable results. I&apos;ve come to accept that artificial intelligence is not a passing trend — it is a lasting shift in how we create and work. Rather than resisting it, my goal is to become so familiar and comfortable with AI that it functions simply as another tool within my skillset, supporting my creativity instead of disrupting my creative decisions.
        </p>
      </div>
    </section>
  )
}
