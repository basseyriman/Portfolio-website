"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, CheckCircle2, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AlzDetect — Explainable Vision Transformer Platform",
    subtitle: "Clinical Neuroimaging Diagnostic Platform",
    description:
      "Architected an end-to-end medical deep learning platform that classifies four stages of Alzheimer's Disease from 5,120 brain MRI scans using a Vision Transformer (ViT-B/32). Integrates 12-layer Attention Rollout and Grad-CAM for physician-level interpretability. Submitted to Elsevier Neuroscience Informatics (NEURI-D-26-00238R1) and clinically evaluated by Dr. Ademola Adewara (Principal Medical Officer).",
    image: "/alzdetect-device.png",
    technologies: ["Vision Transformers (ViT-B/32)", "FastAPI", "Next.js 15", "PyTorch", "Docker", "Explainable AI (XAI)"],
    authorityTags: ["Clinical Neuroimaging", "99.00% Accuracy", "0.9994 ROC-AUC", "Elsevier Research"],
    metrics: [
      "99.00% Test Accuracy & 0.9901 Macro F1 on 5,120 brain MRIs",
      "12-layer attention rollout maps highlighting hippocampal atrophy",
      "Evaluated & validated by NHS/hospital clinicians for diagnostic workflows"
    ],
    github: "https://github.com/basseyriman/AlzDetect",
    demo: "https://www.alzdetect.live/",
    dossier: "/dossiers/03_OC1_OC3_AlzDetect_ViT_System_Architecture_Spec.pdf",
    researchDossier: "/dossiers/04_OC4_OC3_AlzDetect_ViT_Elsevier_Research_Dossier.pdf"
  },
  {
    title: "AI Quest — Machine Learning Simulation Platform",
    subtitle: "Cloud Tabletop & Prepress ML Education Engine",
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
    title: "VoiceDress — Generative Fashion & Virtual Try-On",
    subtitle: "Voice-First Multimodal Wardrobe Stylist",
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
    title: "Pointly — Autonomous AI Web Navigation Assistant",
    subtitle: "Chrome Manifest V3 Agent & DOM Analyzer",
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
    title: "Young AI Explorers Platform & Published Book",
    subtitle: "Generative Curriculum Engine & Amazon UK STEM Book",
    description:
      "Authored and illustrated the published children's STEM book 'Young AI Explorers: A Kid's Guide to the Future' (Amazon UK ASIN: B0H4KGNW3B) and engineered its multi-tenant companion web platform. Combines 38 structured lessons across 6 thematic islands with Vision Vee—an asynchronous generative curriculum DAG—and a 13-page interactive digital/print activity workbook. Personally donated to UK school libraries.",
    image: "/young-ai-explorers-book.png",
    technologies: ["Next.js 16.2", "React 19", "Supabase", "5-Locale i18n", "Amazon Publishing", "STEM Pedagogy"],
    authorityTags: ["Published Author", "Amazon ASIN: B0H4KGNW3B", "UK Primary Schools", "Multi-Tenant EdTech"],
    metrics: [
      "Published 41-page, 37-chapter book on Amazon UK for ages 9–12",
      "Physical copies donated to UK school libraries (Harris Primary Academy)",
      "Multi-tenant Next.js 16 platform with 5-locale internationalization"
    ],
    github: "https://github.com/basseyriman/Young-AI-Explorers",
    demo: "https://www.youngaiexplorers.net/",
    dossier: "/dossiers/06_OC1_OC3_Young_AI_Explorers_Platform_Architecture_Spec.pdf"
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/10 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/30 text-primary">
            Proprietary Systems Architecture
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Shipped AI Products & Platforms
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Five production systems engineered and commercialized under <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">RimansTech Industries</a>. Each features live deployments, verified codebases, and downloadable technical specifications.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.authorityTags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[11px] font-mono font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics list */}
                    <div className="space-y-1.5 pt-1">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-muted text-muted-foreground border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & Dossier Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Platform
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                          <Github className="h-3.5 w-3.5" />
                          Source Code
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-mono" asChild>
                        <a href={project.dossier} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3.5 w-3.5 text-primary" />
                          Architecture Spec (PDF)
                        </a>
                      </Button>
                      {project.researchDossier && (
                        <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-mono" asChild>
                          <a href={project.researchDossier} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-3.5 w-3.5 text-indigo-400" />
                            Elsevier Research (PDF)
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative rounded-xl overflow-hidden border border-border/80 shadow-2xl bg-black/40 p-2 max-h-[340px] flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg object-contain max-h-[300px] w-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
