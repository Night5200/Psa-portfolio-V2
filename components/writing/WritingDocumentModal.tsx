"use client"

import { useEffect } from "react"

interface WritingDocumentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  pdfSrc: string
}

export default function WritingDocumentModal({
  isOpen,
  onClose,
  title,
  pdfSrc,
}: WritingDocumentModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111111",
          width: "100%",
          maxWidth: "900px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "3px",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.02em",
            }}
          >
            {title}
          </span>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close document"
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.7)",
              width: "36px",
              height: "36px",
              borderRadius: "2px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              lineHeight: 1,
              flexShrink: 0,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8B1A1A"
              e.currentTarget.style.color = "#ffffff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"
              e.currentTarget.style.color = "rgba(255,255,255,0.7)"
            }}
          >
            ✕
          </button>
        </div>

        {/* PDF iframe */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <iframe
            src={`${pdfSrc}#toolbar=1&navpanes=0&scrollbar=1`}
            title={title}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  )
}
