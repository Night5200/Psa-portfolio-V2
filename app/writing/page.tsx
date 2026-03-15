import WritingHero from "@/components/writing/WritingHero"
import WritingContents from "@/components/writing/WritingContents"
import WritingAbout from "@/components/writing/WritingAbout"
import WritingExperience from "@/components/writing/WritingExperience"
import WritingPitchDecks from "@/components/writing/WritingPitchDecks"
import WritingScripts from "@/components/writing/WritingScripts"
import WritingAIWork from "@/components/writing/WritingAIWork"
import WritingSocialMedia from "@/components/writing/WritingSocialMedia"
import WritingPhilosophy from "@/components/writing/WritingPhilosophy"
import WritingSkills from "@/components/writing/WritingSkills"
import WritingNextSteps from "@/components/writing/WritingNextSteps"
import WritingContact from "@/components/writing/WritingContact"

export const metadata = {
  title: "Creative Portfolio – Garvit Badjatya",
  description: "Creative Writer. Scriptwriter. Storyteller.",
}

export default function WritingPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ffffff", overflowX: "hidden" }}>
      <WritingHero />
      <WritingContents />
      <WritingAbout />
      <WritingExperience />
      <WritingPitchDecks />
      <WritingScripts />
      <WritingAIWork />
      <WritingSocialMedia />
      <WritingPhilosophy />
      <WritingSkills />
      <WritingNextSteps />
      <WritingContact />
    </main>
  )
}
