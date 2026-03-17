import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

const ALLOWED_PDFS = new Set([
  "dabur-real-reels.pdf",
  "astral-ipl-films.pdf",
  "jk-super-cement-script.pdf",
  "sin-denim.pdf",
  "paytm-concept-deck.pdf",
  "jk-super-cement-lsg.pdf",
  "liberty-republic-day.pdf",
])

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const file = searchParams.get("file")

  if (!file || !ALLOWED_PDFS.has(file) || file.includes("/") || file.includes("\\")) {
    return new NextResponse("Not found", { status: 404 })
  }

  try {
    const filePath = path.join(process.cwd(), "public", "writing", file)
    const buffer = await readFile(filePath)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        // Tell the browser this is a PDF and to show it inline — never download
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
        // Allow this response to be loaded inside an iframe on the same origin
        "X-Frame-Options": "SAMEORIGIN",
        // Allow embedding in iframe from same origin via CSP
        "Content-Security-Policy": "frame-ancestors 'self'",
        "Cache-Control": "public, max-age=3600, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    })
  } catch {
    return new NextResponse("Not found", { status: 404 })
  }
}
