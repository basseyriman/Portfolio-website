import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { EvidenceVaultSection } from "@/components/evidence-vault-section"
import { MediaSection } from "@/components/media-section"
import { KeyAchievementsSection } from "@/components/key-achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <EvidenceVaultSection />
        <MediaSection />
        <KeyAchievementsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
