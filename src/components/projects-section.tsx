"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, CheckCircle2, Cpu, ShieldCheck } from "lucide-react"

interface Project {
  id: string
  category: "clinical" | "opensource" | "agents" | "multimodal" | "simulation"
  title: string
  subtitle: string
  productionStatus: string
  statusColor: string
  description: string
  image: string
  technologies: string[]
  authorityTags: string[]
  metrics: string[]
  github: string
  demo?: string
  dossier: string
  researchDossier?: string
}

const projects: Project[] = [
  {
    id: "alzdetect",
    category: "clinical",
    title: "AlzDetect — Explainable Vision Transformer Platform",
    subtitle: "Clinical Neuroimaging Diagnostic Platform",
    productionStatus: "ELSEVIER NEURI-D-26-00260R1",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Architected an end-to-end medical deep learning platform that classifies four stages of Alzheimer's Disease from 5,120 brain MRI scans using a Vision Transformer (ViT-B/32). Integrates 12-layer Attention Rollout and Grad-CAM for physician-level interpretability. Submitted to Elsevier Neuroscience Informatics (Ref: NEURI-D-26-00260R1, 51-page revision with comprehensive reviewer responses) and clinically evaluated by Dr. Ademola Adewara (Principal Medical Officer).",
    image: "/alzdetect-device.png",
    technologies: ["Vision Transformers (ViT-B/32)", "FastAPI", "Next.js 15", "PyTorch", "Docker", "Explainable AI (XAI)"],
    authorityTags: ["Clinical Neuroimaging", "99.00% Accuracy", "0.9994 ROC-AUC", "Elsevier NEURI-D-26-00260R1"],
    metrics: [
      "99.00% Test Accuracy & 0.9901 Macro F1 across 5,120 brain MRIs",
      "12-layer attention rollout maps highlighting hippocampal atrophy",
      "Evaluated & clinically validated by NHS/hospital medical officers"
    ],
    github: "https://github.com/basseyriman/AlzDetect",
    demo: "https://www.alzdetect.live/",
    dossier: "/dossiers/03_OC1_OC3_AlzDetect_ViT_System_Architecture_Spec.pdf",
    researchDossier: "/dossiers/04_OC4_OC3_AlzDetect_ViT_Elsevier_Research_Dossier.pdf"
  },
  {
    id: "gitnexus",
    category: "opensource",
    title: "GitNexus — Zero-Server Code Intelligence Engine",
    subtitle: "In-Browser Knowledge Graph & Graph RAG Agent",
    productionStatus: "TRENDING OPEN SOURCE",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Client-side knowledge graph creator and code exploration engine that runs entirely in the browser using WebAssembly. Drop in any GitHub repository or ZIP file to generate an interactive structural graph with a built-in Graph RAG agent. Personally engineered AbortController streaming cancellation for the Nexus AI LangGraph agent (PR #1615) with automated test suites.",
    image: "/gitnexus-preview.png",
    technologies: ["TypeScript", "LangGraph", "Graph RAG", "AbortController", "Web Streams", "WASM"],
    authorityTags: ["Graph RAG", "Open-Source Contributor", "Zero-Server WASM", "PR #1615"],
    metrics: [
      "In-browser knowledge graph synthesis without sending code to third-party servers",
      "Personally authored AbortController cancellation for streaming LangGraph execution",
      "Adopted by software engineers globally for automated repository comprehension"
    ],
    github: "https://github.com/basseyriman/GitNexus",
    dossier: "/dossiers/09_OC2_Technical_Thought_Leadership_and_Peer_Education_Dossier.pdf"
  },
  {
    id: "aiquest",
    category: "simulation",
    title: "AI Quest — Machine Learning Simulation Platform",
    subtitle: "Cloud Tabletop & Prepress ML Education Engine",
    productionStatus: "EVENTBRITE TICKETING LIVE",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Conceived and engineered a comprehensive simulation engine that models the end-to-end 7-stage machine learning lifecycle across 15 mission domains and 240 vector cards. Engineered with a zero-scroll mobile game cockpit (<1024px), procedural WebAudio synthesizer for iOS silent-switch unlock, and 300-DPI prepress print manufacturing pipeline. Hosting London rooftop playtesting at cloudM Tower of London.",
    image: "/product-ai-quest.png",
    technologies: ["TypeScript", "React 19", "Next.js", "WebAudio DSP", "Prepress Automation", "DAG State Machine"],
    authorityTags: ["7-Stage ML DAG", "240 Card Engine", "15 ML Domains", "London Rooftop Event"],
    metrics: [
      "240 physical & digital simulation cards across 15 ML domains",
      "Zero-scroll mobile game cockpit with real-time DAG validation",
      "Ticketed London industry playtesting event at cloudM Tower of London"
    ],
    github: "https://github.com/basseyriman/ai-quest",
    demo: "https://www.aiquestgame.com/",
    dossier: "/dossiers/05_OC1_OC3_AI_Quest_System_Architecture_3Page_Spec.pdf"
  },
  {
    id: "voicedress",
    category: "multimodal",
    title: "VoiceDress — Generative Fashion & Virtual Try-On",
    subtitle: "Voice-First Multimodal Wardrobe Stylist",
    productionStatus: "STRIPE MONETIZED",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Engineered an autonomous voice-orchestrated personal styling and virtual try-on progressive web app (PWA). Users speak an occasion or mood, and the NLP engine resolves their wardrobe, integrates real-time weather, matches style color theory, and renders layered diffusion try-on onto their photograph via FASHN and fal.ai. Monorepo with active Stripe recurring subscriptions (£19/mo, £149/yr).",
    image: "/voicedress_live.png",
    technologies: ["Next.js 16", "TypeScript", "fal.ai / FASHN", "Stripe Checkout", "Firebase Firestore", "Web Speech API"],
    authorityTags: ["Multimodal GenAI", "Virtual Try-On", "Commercial Stripe Billing", "PWA"],
    metrics: [
      "Two-stage sequential diffusion try-on (apparel + accessories)",
      "WebKit audio unlocker and speech-driven wardrobe item swapping",
      "Active commercial Stripe monetization tiers (£19/mo & £149/yr)"
    ],
    github: "https://github.com/basseyriman/VoiceDress",
    demo: "https://www.voicedress.com/",
    dossier: "/dossiers/08_OC1_OC3_VoiceDress_and_Pointly_Autonomous_AI_Products_Spec.pdf"
  },
  {
    id: "pointly",
    category: "agents",
    title: "Pointly — Autonomous AI Web Navigation Assistant",
    subtitle: "Chrome Manifest V3 Agent & DOM Analyzer",
    productionStatus: "CHROME EXTENSION STORE",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Engineered an enterprise-grade AI web navigation assistant that analyzes live DOM structures and projects floating SVG pointer overlays directly above the target control. Implements a strict 'Zero Auto-Clicks' security model: Pointly points, but the human user always clicks. Backed by a Node.js/Express planner with structured GPT-4o output and sensitive control safety guards.",
    image: "/pointly-device.png",
    technologies: ["Chrome Manifest V3", "TypeScript", "Express", "Node.js", "GPT-4o", "DOM MutationObserver"],
    authorityTags: ["Browser Agent", "Manifest V3", "Zero Auto-Clicks", "Enterprise Safety"],
    metrics: [
      "Guide-only security guarantee preventing unauthorized transactions",
      "Resilient to client-side SPAs and dynamic DOM mutations within 150ms",
      "Packaged for Chrome & Edge Extension stores with Stripe licensing"
    ],
    github: "https://github.com/basseyriman/Pointly",
    demo: "https://www.gopointly.com/",
    dossier: "/dossiers/08_OC1_OC3_VoiceDress_and_Pointly_Autonomous_AI_Products_Spec.pdf"
  },
  {
    id: "youngaiexplorers",
    category: "simulation",
    title: "Young AI Explorers Platform & Published Book",
    subtitle: "Generative Curriculum Engine & Amazon UK STEM Book",
    productionStatus: "AMAZON UK PUBLISHED",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    description:
      "Authored and illustrated the published children's STEM book 'Young AI Explorers: A Kid's Guide to the Future' (Amazon UK ASIN: B0H4KGNW3B) and engineered its multi-tenant companion web platform. Combines 38 structured lessons across 6 thematic islands with Vision Vee—an asynchronous generative curriculum DAG—and a 13-page interactive digital/print activity workbook. Personally donated to UK school libraries.",
    image: "/young-ai-explorers-book.png",
    technologies: ["Next.js 16.2", "React 19", "Supabase", "5-Locale i18n", "Amazon Publishing", "STEM Pedagogy"],
    authorityTags: ["Published Author", "Amazon ASIN: B0H4KGNW3B", "UK Primary Schools", "Multi-Tenant EdTech"],
    metrics: [
      "Published 41-page, 37-chapter book on Amazon UK for ages 9–12",
      "Grassroots book donation initiative for UK school libraries",
      "Multi-tenant Next.js 16 platform with 5-locale internationalization"
    ],
    github: "https://github.com/basseyriman/Young-AI-Explorers",
    demo: "https://www.youngaiexplorers.net/",
    dossier: "/dossiers/06_OC1_OC3_Young_AI_Explorers_Platform_Architecture_Spec.pdf"
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-muted/10 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Expansive */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/40 text-primary bg-primary/5 px-3 py-1">
            <Cpu className="h-3.5 w-3.5 mr-1.5 text-primary inline" />
            Proprietary Systems Architecture & Open Source
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Shipped Systems & Open-Source Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto font-normal">
            Production systems and public open-source contributions engineered by Bassey Riman under <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">RimansTech Industries</a>. Each features live deployments, verified codebases, and downloadable technical specifications.
          </p>
        </div>

        {/* Category Filters - Refined Glass Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { label: "All Systems (6)", value: "all" },
            { label: "Clinical AI & Research", value: "clinical" },
            { label: "Open-Source & Graph RAG", value: "opensource" },
            { label: "Autonomous Agents", value: "agents" },
            { label: "Multimodal GenAI", value: "multimodal" },
            { label: "Simulations & EdTech", value: "simulation" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border ${
                selectedCategory === tab.value
                  ? "bg-white/[0.08] text-white border-primary shadow-[0_0_15px_rgba(222,192,119,0.25)] font-bold"
                  : "bg-card/40 text-muted-foreground border-border/60 hover:text-foreground hover:bg-card/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Stack - Wide & Spacious (max-w-6xl) */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden p-1 transition-all duration-300 border border-primary/15 hover:border-primary/40 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-9 items-center">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-md border font-bold ${project.statusColor}`}>
                      {project.productionStatus}
                    </span>
                    {project.authorityTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[11px] font-mono font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-mono mt-1 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300/90 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Metrics list */}
                  <div className="space-y-2 pt-1">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-start gap-2.5 text-xs text-neutral-200 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-neutral-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links & Dossier Buttons - Frosted Glass Luxury */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-4">
                    {project.demo && (
                      <Button size="sm" className="bg-white/[0.08] hover:bg-white/[0.14] text-white border border-primary/50 hover:border-primary text-xs font-mono gap-1.5 shadow-md shadow-primary/10 rounded-lg" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 text-primary" />
                          Live Platform
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-xs font-mono gap-1.5 border-border/80 hover:bg-card rounded-lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        Source Code
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-mono hover:bg-primary/20 rounded-lg" asChild>
                      <a href={project.dossier} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-3.5 w-3.5 text-primary" />
                        3-Page Spec (PDF)
                      </a>
                    </Button>
                    {project.researchDossier && (
                      <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-mono hover:bg-primary/20 rounded-lg" asChild>
                        <a href={project.researchDossier} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3.5 w-3.5 text-primary" />
                          Elsevier Research (PDF)
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Device Asset */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black/60 group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
