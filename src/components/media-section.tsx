"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Mic, BookOpen, ExternalLink, Calendar, MapPin, Sparkles, FileText, CheckCircle2 } from "lucide-react"

const mediaFeatures = [
  { 
    outlet: "The Nation", 
    date: "March 27, 2026",
    headline: "AI Research on Alzheimer's Detection Using Vision Transformers",
    quote: "UK-based AI researcher Bassey Riman develops explainable Vision Transformer system to detect early Alzheimer's from MRI brain scans.",
    logo: "/thenation-logo.png",
    link: "https://thenationonlineng.net/uk-based-ai-researcher-develops-vision-transformer-system-to-detect-early-alzheimers-from-brain-scans/",
    type: "National Daily Feature",
    dossier: "/dossiers/01_MC_National_Media_Recognition_Dossier.pdf"
  },
  { 
    outlet: "Vanguard", 
    date: "March 9, 2026",
    headline: "Students Must Prepare for an AI-Driven World — Riman",
    quote: "Interview by journalist Chioma Okoye covering Bassey Riman's AI literacy advocacy and curriculum frameworks for developing youth.",
    logo: "/vanguard-logo.png",
    link: "https://www.vanguardngr.com/2026/03/students-must-prepare-for-an-ai-driven-world-riman/",
    type: "National Daily Feature",
    dossier: "/dossiers/01_MC_National_Media_Recognition_Dossier.pdf"
  },
  { 
    outlet: "ThisDay", 
    date: "March 27, 2026",
    headline: "Vision Transformer System to Detect Early Alzheimer's from Brain Scans",
    quote: "Coverage of Bassey Riman's 99% accuracy diagnostic benchmarks and clinical interpretability research.",
    logo: "/thisday-logo.png",
    link: "https://www.thisdaylive.com/2026/03/27/uk-based-ai-researcher-develops-vision-transformer-system-to-detect-early-alzheimers-from-brain-scans/",
    type: "National Daily Feature",
    dossier: "/dossiers/01_MC_National_Media_Recognition_Dossier.pdf"
  },
]

const speakingEngagements = [
  {
    event: "Inspiring Diversity 2026: UK AI Revolution",
    role: "Invited Keynote Speaker & Panelist",
    organizer: "Black AI UK & Loughborough University London",
    date: "23 April 2026",
    location: "Soul Mama Stratford, East Village, London (E20 1DB)",
    stats: "165 Verified Eventbrite Attendees • 1,325+ Impressions",
    description: "Delivered technical presentation on 'AlzDetect: Explainable Vision Transformers in Clinical Neuroimaging' and participated in high-level panel on UK digital healthcare leadership.",
    link: "https://www.blackaiuk.com",
    dossier: "/dossiers/02_MC_OC2_UK_AI_Speaking_Engagement_Dossier.pdf"
  },
  {
    event: "AI Quest London: Board Game Playtesting & Rooftop Networking",
    role: "Host & Principal Architect",
    organizer: "RimansTech Industries",
    date: "Friday 13 November 2026 (5:30–9:30 PM)",
    location: "cloudM Rooftop Bar, citizenM Tower of London (EC3N 4DJ)",
    stats: "Ticketed Eventbrite Session • UK AI Engineers & Data Scientists",
    description: "In-person playtesting of the 240-card Engineer Edition of AI Quest, evaluating 7-stage ML pipeline rules and fostering collaboration across London's AI ecosystem.",
    link: "https://www.eventbrite.com/e/ai-quest-london-board-game-playtesting-rooftop-networking-tickets-2003906013831",
    dossier: "/dossiers/05_OC1_OC3_AI_Quest_System_Architecture_3Page_Spec.pdf"
  }
]

const publications = [
  {
    title: "Building a Premium Budget Tracker: 3 Technical Challenges in React",
    platform: "Medium (@basseyriman)",
    link: "https://medium.com/@basseyriman/building-a-premium-budget-tracker-3-technical-challenges-and-how-i-solved-them-in-react-9eac01779a41",
    tag: "Software Engineering"
  },
  {
    title: "Building PursePro: A Privacy-First Budget App Outside the App Store",
    platform: "Medium (@basseyriman)",
    link: "https://medium.com/@basseyriman/building-pursepro-a-privacy-first-budget-app-that-lives-outside-the-app-store-824e3669107d",
    tag: "PWA & Offline Architecture"
  },
  {
    title: "How to Build a Premium AI Portfolio with Next.js 15 & Framer Motion",
    platform: "Medium (@basseyriman)",
    link: "https://medium.com/@basseyriman/how-to-build-a-premium-ai-portfolio-with-next-js-15-framer-motion-f22ef697bb40",
    tag: "Next.js 15 & UI Motion"
  },
  {
    title: "Young AI Explorers: A Kid's Guide to the Future",
    platform: "Amazon UK (ASIN: B0H4KGNW3B)",
    link: "https://www.amazon.co.uk/Young-AI-Explorers-Guide-Future/dp/B0H4KGNW3B",
    tag: "Published STEM Book"
  }
]

export function MediaSection() {
  return (
    <section id="recognition" className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/40 text-primary bg-primary/5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary inline" />
            Thought Leadership & Public Profile
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            National Recognition & Keynotes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Featured across national tier-1 daily press, invited as a keynote speaker by UK academic institutions, and actively mentoring through STEM authorship.
          </p>
        </div>

        {/* 1. Press Features Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 font-mono">
              <Newspaper className="h-4 w-4 text-primary" />
              Tier-1 National Daily Press Features
            </h3>
            <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-foreground" asChild>
              <a href="/dossiers/01_MC_National_Media_Recognition_Dossier.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5 text-primary mr-1" />
                Evidence 01 Dossier (PDF)
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaFeatures.map((m) => (
              <Card key={m.outlet} className="p-6 bg-card/70 border-border/70 flex flex-col justify-between hover:border-primary/50 transition-all shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <img src={m.logo} alt={m.outlet} className="h-7 object-contain opacity-95" />
                    <span className="text-[11px] font-mono text-muted-foreground">{m.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 leading-snug">
                    {m.headline}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "{m.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                  <Badge variant="secondary" className="text-[10px] font-mono">{m.type}</Badge>
                  <a href={m.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
                    Read Article <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 2. Speaking Engagements */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 font-mono">
              <Mic className="h-4 w-4 text-primary" />
              Keynote Speaking & Industry Events
            </h3>
            <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-foreground" asChild>
              <a href="/dossiers/02_MC_OC2_UK_AI_Speaking_Engagement_Dossier.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5 text-primary mr-1" />
                Evidence 02 Dossier (PDF)
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakingEngagements.map((sp) => (
              <Card key={sp.event} className="p-6 sm:p-7 bg-card/70 border-border/70 hover:border-primary/50 transition-all shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge variant="outline" className="text-xs font-mono border-primary/40 text-primary bg-primary/5">
                    {sp.role}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {sp.date}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  {sp.event}
                </h4>
                <div className="text-xs text-primary font-medium mb-3">
                  {sp.organizer}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {sp.description}
                </p>

                <div className="mb-4 p-2.5 rounded-lg bg-black/40 border border-border/60 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{sp.stats}</span>
                </div>

                <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-muted-foreground font-mono flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary" /> {sp.location}
                  </span>
                  <a href={sp.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium flex items-center gap-1 hover:underline">
                    Event Details <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Published Articles & Authorship */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 mb-6 font-mono">
            <BookOpen className="h-4 w-4 text-primary" />
            Technical Guides & Published Authorship
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {publications.map((pub) => (
              <a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card/60 border border-border/60 hover:border-primary/50 transition-all flex flex-col justify-between group shadow-md"
              >
                <div>
                  <Badge variant="secondary" className="text-[10px] font-mono mb-2">
                    {pub.tag}
                  </Badge>
                  <h5 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {pub.title}
                  </h5>
                </div>
                <div className="text-[11px] text-muted-foreground font-mono flex items-center justify-between pt-2 border-t border-border/40">
                  <span>{pub.platform}</span>
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
