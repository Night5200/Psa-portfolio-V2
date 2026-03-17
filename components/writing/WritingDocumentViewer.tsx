"use client"

import { useEffect, useCallback } from "react"

interface WritingDocumentViewerProps {
  isOpen: boolean
  onClose: () => void
  title: string
  driveFileId: string // Google Drive file ID from the sharing URL
}

export default function WritingDocumentViewer({
  isOpen,
  onClose,
  title,
  driveFileId,
}: WritingDocumentViewerProps) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose() },
    [onClose]
  )
  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, handleKey])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(0.5rem, 2vw, 1.25rem)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111111",
          width: "100%",
          maxWidth: "960px",
          height: "92vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "3px",
          overflow: "hidden",
          boxShadow: "0 32px 96px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.85rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            flexShrink: 0,
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
            <div
              style={{
                width: "3px",
                height: "1rem",
                background: "#8B1A1A",
                flexShrink: 0,
                borderRadius: "1px",
              }}
            />
            <span
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close document viewer"
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              width: "34px",
              height: "34px",
              borderRadius: "2px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              flexShrink: 0,
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8B1A1A"
              e.currentTarget.style.color = "#ffffff"
              e.currentTarget.style.background = "rgba(139,26,26,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
              e.currentTarget.style.color = "rgba(255,255,255,0.6)"
              e.currentTarget.style.background = "none"
            }}
          >
            ✕
          </button>
        </div>

        {/* Google Drive preview viewer */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <iframe
            key={driveFileId}
            src={`https://drive.google.com/file/d/${driveFileId}/preview`}
            title={title}
            allow="autoplay"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  )
}
