"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, FileText, Sparkles, MapPin, ExternalLink, Activity, ShieldCheck, Cpu, Code2, GraduationCap, CheckCircle2 } from "lucide-react"

const architectureCards = [
  {
    id: "alzdetect",
    name: "AlzDetect ViT-B/32",
    domain: "Clinical Neuroimaging",
    statusBadge: "ELSEVIER NEURI-D-26-00260R1",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    keyMetric: "99.00% Test Accuracy",
    secondaryMetric: "0.9994 ROC-AUC",
    stack: "PyTorch • ViT-B/32 • 12-Layer Attention Rollout • Grad-CAM • FastAPI",
    summary: "Evaluated by Dr. Ademola Adewara (Principal Medical Officer). Classifies 4 Alzheimer's stages across 5,120 brain MRIs with physician explainability. 51-page revision with comprehensive reviewer responses submitted.",
    verificationNote: "Evaluated on 5,120 Brain MRIs (NHS Clinical Evaluation)",
    liveHref: "https://www.alzdetect.live/"
  },
  {
    id: "gitnexus",
    name: "GitNexus Graph RAG",
    domain: "Open-Source Code Intelligence",
    statusBadge: "TRENDING OPEN SOURCE",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    keyMetric: "Zero-Server WASM",
    secondaryMetric: "PR #1615 Contributed",
    stack: "TypeScript • LangGraph • AbortController • Graph Algorithms • Browser Streams",
    summary: "Zero-server in-browser code intelligence and knowledge graph creator with built-in Graph RAG agent. Personally engineered AbortController streaming cancellation for Nexus AI agent with test suite.",
    verificationNote: "Client-Side Zero-Server Sandbox (Open Source)",
    liveHref: "https://github.com/basseyriman/GitNexus"
  },
  {
    id: "aiquest",
    name: "AI Quest Simulation",
    domain: "ML Lifecycle Engine",
    statusBadge: "LONDON ROOFTOP EVENT",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    keyMetric: "240 Vector Cards",
    secondaryMetric: "15 ML Domains",
    stack: "React 19 • WebAudio DSP • 300 DPI Prepress • Directed Acyclic Graph",
    summary: "Models the end-to-end 7-stage ML lifecycle with zero-scroll mobile cockpit. Official ticketed industry playtesting event hosted at cloudM Rooftop Bar, citizenM Tower of London.",
    verificationNote: "London Rooftop Industry Event (cloudM Tower of London)",
    liveHref: "https://www.aiquestgame.com/"
  },
  {
    id: "pointly",
    name: "Pointly Assistant",
    domain: "Autonomous Browser Agent",
    statusBadge: "CHROME MV3 READY",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    keyMetric: "Zero Auto-Clicks",
    secondaryMetric: "<150ms DOM Mut",
    stack: "Chrome Manifest V3 • Node.js / Express • GPT-4o • SVG Pointer Overlay",
    summary: "Enterprise web navigation assistant. Strict 'Zero Auto-Clicks' security model: Pointly highlights target controls with SVG pointers while the human user executes clicks.",
    verificationNote: "Enterprise Guide-Only Safety Contract (Manifest V3)",
    liveHref: "https://www.gopointly.com/"
  }
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-36 pb-24 overflow-hidden">
      
      {/* Cinematic Top Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-amber-400/18 via-yellow-600/8 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Executive Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8 shadow-inner">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]" />
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-neutral-200 font-medium">
              Principal AI Architect & Tech Founder
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400">London, United Kingdom</span>
          </div>

          {/* Master Headline - Expansive, Unconfined */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-8 max-w-5xl mx-auto">
            Architecting{" "}
            <span className="text-shine text-subtle-glow">
              Autonomous AI
            </span>{" "}
            & Clinical Deep Learning.
          </h1>

          {/* Subtitle - Spacious and Balanced */}
          <p className="text-base sm:text-xl text-neutral-300/90 max-w-4xl mx-auto mb-12 leading-relaxed font-normal">
            Founder of <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-semibold transition-colors">RimansTech Industries</a>. MSc in Artificial Intelligence with Distinction (Teesside University). Translating Vision Transformers, browser agents, and Graph RAG into production systems evaluated by NHS clinicians and under review at <strong className="text-white font-medium">Elsevier Neuroscience Informatics</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="h-12 px-7 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-mono text-xs font-bold shadow-xl shadow-white/10 gap-2 transition-all hover:scale-[1.02]"
              asChild
            >
              <a href="#projects">
                Explore Shipped Systems
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 rounded-full bg-white/[0.03] border-white/15 hover:border-primary/50 text-white font-mono text-xs gap-2 transition-all hover:bg-white/[0.05]"
              asChild
            >
              <a href="#vault">
                <FileText className="h-4 w-4 text-primary" />
                Evidence Dossier Vault (10 PDFs)
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-6 rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.05] font-mono text-xs gap-2 transition-all"
              asChild
            >
              <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 text-neutral-300" />
                Executive CV
              </a>
            </Button>
          </div>

          {/* Panoramic Architectural Command Unit */}
          <div className="max-w-5xl mx-auto rounded-2xl glass-card overflow-hidden text-left mb-12 border border-primary/20 shadow-2xl">
            {/* Header / Traffic lights */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-3 text-xs font-mono text-neutral-400">
                  architecture_telemetry // core systems console
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>ONLINE // PRODUCTION VERIFIED</span>
              </div>
            </div>

            {/* Selector Tabs */}
            <div className="flex border-b border-white/[0.06] bg-black/40 overflow-x-auto">
              {architectureCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 text-xs font-mono whitespace-nowrap transition-all border-b-2 flex items-center gap-2 ${
                    activeTab === idx
                      ? "border-primary text-white bg-white/[0.05] font-bold"
                      : "border-transparent text-neutral-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${activeTab === idx ? "bg-primary shadow-[0_0_6px_#DEC077]" : "bg-neutral-600"}`} />
                  {card.name}
                </button>
              ))}
            </div>

            {/* Panoramic Active Content: 2-Column Desktop Grid */}
            <div className="p-6 sm:p-8 font-mono">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Summary & System Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-neutral-300 font-medium">
                      {architectureCards[activeTab].domain}
                    </span>
                    <span className={`text-[10px] px-3 py-1 rounded-full border font-bold ${architectureCards[activeTab].statusColor}`}>
                      {architectureCards[activeTab].statusBadge}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">
                    {architectureCards[activeTab].summary}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400 overflow-x-auto">
                    <Cpu className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-neutral-300 font-mono text-[11px] sm:text-xs">
                      {architectureCards[activeTab].stack}
                    </span>
                  </div>
                </div>

                {/* Right: Key Telemetry Metric Card */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-primary/25 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">BENCHMARK PERFORMANCE</span>
                    <span className="text-[10px] font-mono text-emerald-400">VERIFIED</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">
                      {architectureCards[activeTab].keyMetric}
                    </div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">
                      Metric 02: <span className="text-white font-bold">{architectureCards[activeTab].secondaryMetric}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/[0.08] text-[11px] text-neutral-400 flex items-center justify-between">
                    <span className="truncate">{architectureCards[activeTab].verificationNote}</span>
                    <a
                      href={architectureCards[activeTab].liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold shrink-0 ml-2"
                    >
                      Inspect <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Institutional Metric Ribbon - Expanded */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-xl glass-card border border-white/[0.08] hover:border-primary/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">99.00%</div>
              <div className="text-xs text-neutral-400 mt-1.5 font-medium">AlzDetect ViT-B/32 MRI Accuracy</div>
            </div>
            <div className="p-5 rounded-xl glass-card border border-primary/25 hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-mono tracking-tight">NEURI-R1</div>
              <div className="text-xs text-neutral-400 mt-1.5 font-medium">Elsevier Paper Under Review</div>
            </div>
            <div className="p-5 rounded-xl glass-card border border-white/[0.08] hover:border-primary/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent font-mono tracking-tight">GitNexus</div>
              <div className="text-xs text-neutral-400 mt-1.5 font-medium">Graph RAG Open-Source Contributor</div>
            </div>
            <div className="p-5 rounded-xl glass-card border border-white/[0.08] hover:border-primary/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">Distinction</div>
              <div className="text-xs text-neutral-400 mt-1.5 font-medium">MSc Artificial Intelligence (UK)</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
