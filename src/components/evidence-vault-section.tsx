"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, ShieldCheck, ExternalLink, CheckCircle2, Award, BookOpen, Search } from "lucide-react"
import { motion } from "framer-motion"

interface Dossier {
  id: string
  number: string
  criteria: string
  criteriaCategory: "MC" | "OC1" | "OC2" | "OC3" | "OC4"
  title: string
  subtitle: string
  pages: number
  fileSize: string
  pdfUrl: string
  highlights: string[]
}

const dossiers: Dossier[] = [
  {
    id: "01",
    number: "Evidence 01",
    criteria: "Mandatory Criteria (MC) — National Media Recognition",
    criteriaCategory: "MC",
    title: "National Media Recognition & AI Editorial Interviews",
    subtitle: "The Nation, Vanguard & ThisDay National Dailies",
    pages: 3,
    fileSize: "0.34 MB",
    pdfUrl: "/dossiers/01_MC_National_Media_Recognition_Dossier.pdf",
    highlights: [
      "Full mastheads, bylines & verified digital URLs across Nigeria's top 3 national dailies",
      "Features Dr. Ademola Adewara clinical validation & editorial interview by Chioma Okoye",
      "Certified readership exceeding 1.2M+ combined daily circulation & digital Reach"
    ]
  },
  {
    id: "02",
    number: "Evidence 02",
    criteria: "Mandatory (MC) & Optional Criteria 2 (OC2) — UK AI Keynote",
    criteriaCategory: "OC2",
    title: "UK AI Speaking Keynote & Technical Panelist",
    subtitle: "Inspiring Diversity 2026 at Soul Mama Stratford, London",
    pages: 3,
    fileSize: "1.18 MB",
    pdfUrl: "/dossiers/02_MC_OC2_UK_AI_Speaking_Engagement_Dossier.pdf",
    highlights: [
      "Official keynote invitation from Black AI UK & Loughborough University London",
      "Live stage presentation of AlzDetect ViT-B/32 architecture & panel on digital healthcare",
      "165 verified Eventbrite attendees & 1,325+ professional impressions documented"
    ]
  },
  {
    id: "03",
    number: "Evidence 03",
    criteria: "Optional Criteria 1 (OC1) & 3 (OC3) — Clinical AI Platform",
    criteriaCategory: "OC1",
    title: "AlzDetect Clinical Neuroimaging Platform Spec",
    subtitle: "Vision Transformer (ViT-B/32) Diagnostic Architecture",
    pages: 3,
    fileSize: "0.28 MB",
    pdfUrl: "/dossiers/03_OC1_OC3_AlzDetect_ViT_System_Architecture_Spec.pdf",
    highlights: [
      "99.00% test accuracy & 0.9994 ROC-AUC on 5,120 brain MRI scans",
      "12-layer attention rollout maps showing hippocampal atrophy detection",
      "Clinical evaluation by Dr. Ademola Adewara (Principal Medical Officer)"
    ]
  },
  {
    id: "04",
    number: "Evidence 04",
    criteria: "Optional Criteria 4 (OC4) & 3 (OC3) — Academic Research",
    criteriaCategory: "OC4",
    title: "Elsevier Neuroscience Informatics Research Dossier",
    subtitle: "Paper NEURI-D-26-00260R1 (51-Page Revision Under Review)",
    pages: 3,
    fileSize: "0.64 MB",
    pdfUrl: "/dossiers/04_OC4_OC3_AlzDetect_ViT_Elsevier_Research_Dossier.pdf",
    highlights: [
      "Editorial submission receipt, ScholarOne tracking & 51-page revised manuscript",
      "Supervised by Prof. Claudio Angione (Professor of AI, Teesside University)",
      "Rigorous ablation studies comparing ViT against ResNet-50 and EfficientNet-B0"
    ]
  },
  {
    id: "05",
    number: "Evidence 05",
    criteria: "Optional Criteria 1 (OC1) & 3 (OC3) — Simulation Engine",
    criteriaCategory: "OC1",
    title: "AI Quest Machine Learning Simulation Platform",
    subtitle: "Cloud Tabletop Engine & London Rooftop Playtesting",
    pages: 3,
    fileSize: "0.66 MB",
    pdfUrl: "/dossiers/05_OC1_OC3_AI_Quest_System_Architecture_3Page_Spec.pdf",
    highlights: [
      "7-stage ML pipeline DAG state engine with 240 physical & digital vector cards",
      "Procedural WebAudio DSP synthesizer for iOS silent-switch unlock & zero-scroll cockpit",
      "Ticketed Eventbrite playtesting session at cloudM Tower of London (citizenM)"
    ]
  },
  {
    id: "06",
    number: "Evidence 06",
    criteria: "Optional Criteria 1 (OC1) & 3 (OC3) — EdTech Platform",
    criteriaCategory: "OC1",
    title: "Young AI Explorers Platform Architecture Spec",
    subtitle: "Multi-Tenant Generative Curriculum Engine",
    pages: 3,
    fileSize: "0.37 MB",
    pdfUrl: "/dossiers/06_OC1_OC3_Young_AI_Explorers_Platform_Architecture_Spec.pdf",
    highlights: [
      "Next.js 16.2 multi-tenant platform with 5-locale internationalization",
      "Vision Vee asynchronous generative curriculum DAG engine with Supabase backend",
      "13-page interactive student workbook integrated with Amazon UK print edition"
    ]
  },
  {
    id: "07",
    number: "Evidence 07",
    criteria: "Optional Criteria 2 (OC2) — Published Book & UK Impact",
    criteriaCategory: "OC2",
    title: "Amazon UK Published STEM Book & UK Educational Outreach",
    subtitle: "Young AI Explorers (Amazon ASIN: B0H4KGNW3B)",
    pages: 3,
    fileSize: "1.28 MB",
    pdfUrl: "/dossiers/07_OC2_Young_AI_Explorers_Book_and_UK_Schools_Impact.pdf",
    highlights: [
      "Official Amazon KDP catalog proof, ASIN metadata & 41-page print publication",
      "Grassroots book donation initiative for UK school libraries (Harris Primary Academy)",
      "STEM curriculum framework adopted across UK and international educational settings"
    ]
  },
  {
    id: "08",
    number: "Evidence 08",
    criteria: "Optional Criteria 1 (OC1) & 3 (OC3) — Autonomous Products",
    criteriaCategory: "OC1",
    title: "VoiceDress & Pointly Autonomous AI Products Spec",
    subtitle: "Multimodal Generative Styling & Chrome MV3 Navigation",
    pages: 3,
    fileSize: "0.34 MB",
    pdfUrl: "/dossiers/08_OC1_OC3_VoiceDress_and_Pointly_Autonomous_AI_Products_Spec.pdf",
    highlights: [
      "VoiceDress: Fal.ai/FASHN diffusion pipeline with active Stripe subscriptions (£19/mo, £149/yr)",
      "Pointly: Chrome MV3 extension with DOM MutationObserver & strict Zero Auto-Clicks security",
      "Production cloud deployments at voicedress.com and gopointly.com"
    ]
  },
  {
    id: "09",
    number: "Evidence 09",
    criteria: "Optional Criteria 2 (OC2) — Technical Thought Leadership",
    criteriaCategory: "OC2",
    title: "Technical Thought Leadership & Open-Source Engineering",
    subtitle: "Medium Publications (@basseyriman) & GitNexus Contribution",
    pages: 3,
    fileSize: "0.28 MB",
    pdfUrl: "/dossiers/09_OC2_Technical_Thought_Leadership_and_Peer_Education_Dossier.pdf",
    highlights: [
      "3 peer-reviewed technical deep-dives on Medium (@basseyriman) covering Next.js, PWAs, and React",
      "GitNexus Open-Source Contribution: Authored AbortController streaming cancellation for LangGraph (PR #1615)",
      "22 public repositories on GitHub (@basseyriman) with reproducible open-source implementations"
    ]
  },
  {
    id: "10",
    number: "Evidence 10",
    criteria: "Mandatory (MC) & Optional Criteria 1 (OC1) — Founder Track Record",
    criteriaCategory: "MC",
    title: "RimansTech Industries Founder & Ecosystem Traction",
    subtitle: "UK AI Commercialization, Pipeline & Governance",
    pages: 3,
    fileSize: "0.28 MB",
    pdfUrl: "/dossiers/10_MC_OC1_RimansTech_Industries_Founder_and_Ecosystem_Traction_Dossier.pdf",
    highlights: [
      "Executive governance & multi-product IP portfolio oversight across 5 proprietary systems",
      "Stripe payment infrastructure, SaaS monetization, and commercial enterprise roadmap",
      "Alignment with UK National AI Strategy, NHS AI lab priorities, and London tech cluster"
    ]
  }
]

export function EvidenceVaultSection() {
  const [filter, setFilter] = useState<string>("ALL")

  const filteredDossiers = filter === "ALL" 
    ? dossiers 
    : dossiers.filter(d => d.criteriaCategory === filter || (filter === "MC" && d.criteria.includes("Mandatory")))

  return (
    <section id="vault" className="py-24 relative overflow-hidden bg-black/40 border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/40 text-primary bg-primary/5">
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5 text-primary inline" />
            Official Governance & Endorsement Dossier
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Tech Nation Evidence Vault
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Ten strictly formatted, 3-page technical evidence dossiers demonstrating Mandatory Criteria (MC) and Optional Criteria (OC1–OC4) for UK Global Talent endorsement in Digital Technology.
          </p>
        </div>

        {/* Mandatory Core Documents Card */}
        <div className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl border border-primary/40 bg-gradient-to-br from-card/90 via-primary/5 to-card/90 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground font-mono text-xs">MANDATORY APPLICATION CORE</Badge>
                <Badge variant="outline" className="border-emerald-500/40 text-emerald-300 font-mono text-xs">3 Pages Each • Under 1.5 MB</Badge>
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Executive CV, 950-Word Personal Statement & Recommendation Letters
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Official documents referencing all 10 technical evidences, Dr. Ademola Adewara clinical validation, Prof. Claudio Angione academic supervision (Teesside), and Barry Evans industry endorsement (Deloitte UK).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button size="sm" className="font-mono text-xs bg-primary hover:bg-primary/90 gap-1.5 shadow-lg shadow-primary/25" asChild>
                <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-3.5 w-3.5" />
                  Executive CV (3 Pages)
                </a>
              </Button>
              <Button size="sm" variant="outline" className="font-mono text-xs border-primary/40 hover:bg-primary/10 gap-1.5" asChild>
                <a href="/dossiers/00_MANDATORY_Bassey_Riman_Personal_Statement.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-3.5 w-3.5 text-sky-400" />
                  Personal Statement (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { label: "All 10 Dossiers", value: "ALL" },
            { label: "Mandatory (MC)", value: "MC" },
            { label: "OC1: Innovation", value: "OC1" },
            { label: "OC2: Outside Work", value: "OC2" },
            { label: "OC4: Academic Research", value: "OC4" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border ${
                filter === tab.value
                  ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/20"
                  : "bg-card/40 text-muted-foreground border-border/60 hover:text-foreground hover:bg-card/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {filteredDossiers.map((dossier) => (
            <Card
              key={dossier.id}
              className="p-5 bg-card/60 backdrop-blur-md border border-border/70 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="font-mono text-[11px] border-primary/30 text-primary bg-primary/5">
                    {dossier.number}
                  </Badge>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                    <span>{dossier.pages} Pages</span>
                    <span>•</span>
                    <span>{dossier.fileSize}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-foreground tracking-tight leading-snug">
                    {dossier.title}
                  </h4>
                  <p className="text-xs text-primary font-mono mt-0.5">
                    {dossier.subtitle}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-mono mt-1">
                    {dossier.criteria}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-1 text-xs text-muted-foreground">
                  {dossier.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between gap-2">
                <Button size="sm" variant="secondary" className="w-full text-xs font-mono gap-1.5 hover:bg-primary/20 hover:text-foreground" asChild>
                  <a href={dossier.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-3.5 w-3.5 text-primary" />
                    Download 3-Page Spec (PDF)
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
