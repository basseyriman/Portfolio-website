"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, FileText, Sparkles, MapPin, ExternalLink, Terminal, Activity, ShieldCheck, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const telemetryData = [
  {
    id: "alzdetect",
    name: "AlzDetect ViT-B/32",
    badge: "Clinical Neuroimaging",
    status: "ELSEVIER UNDER REVIEW",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    metric1: "99.00% Accuracy",
    metric2: "0.9994 ROC-AUC",
    stack: "PyTorch • ViT-B/32 • 12-Layer Attention Rollout • Grad-CAM • FastAPI",
    description: "Evaluated by Dr. Ademola Adewara (Principal Medical Officer). Detects 4 Alzheimer's stages across 5,120 brain MRIs with clinician explainability."
  },
  {
    id: "pointly",
    name: "Pointly Assistant",
    badge: "Autonomous Browser Agent",
    status: "CHROME MV3 READY",
    statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    metric1: "Zero Auto-Clicks",
    metric2: "<150ms DOM Mut",
    stack: "Chrome Manifest V3 • Node.js / Express • GPT-4o • SVG Pointer Overlay",
    description: "Enterprise web navigation assistant. Strict 'Zero Auto-Clicks' security model: Pointly highlights target controls, human user executes."
  },
  {
    id: "voicedress",
    name: "VoiceDress AI",
    badge: "Multimodal GenAI PWA",
    status: "STRIPE MONETIZED",
    statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    metric1: "Two-Stage Diffusion",
    metric2: "£19/mo & £149/yr",
    stack: "Next.js 16 • fal.ai / FASHN • WebKit Audio API • Firebase • Stripe",
    description: "Voice-driven wardrobe stylist and layered virtual try-on engine. Multi-stage sequential diffusion onto real photographs."
  },
  {
    id: "aiquest",
    name: "AI Quest Platform",
    badge: "ML Simulation Engine",
    status: "LONDON ROOFTOP EVENT",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    metric1: "240 Card Engine",
    metric2: "15 ML Domains",
    stack: "React 19 • WebAudio DSP • 300 DPI Prepress • Directed Acyclic Graph",
    description: "Simulates full 7-stage ML lifecycle. Ticketed London rooftop playtesting at cloudM Tower of London (citizenM)."
  }
]

export function HeroSection() {
  const [activeTelemetry, setActiveTelemetry] = useState(0)

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[320px] bg-indigo-500/10 rounded-full blur-[110px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Identity & Endorsement Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="px-3.5 py-1 text-xs font-mono font-medium border-primary/40 bg-primary/10 text-primary shadow-sm shadow-primary/20">
              <Sparkles className="h-3 w-3 mr-1.5 inline text-sky-400" />
              Founder & Principal AI Architect
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs font-mono border border-border/80 text-foreground/90">
              <MapPin className="h-3 w-3 mr-1 inline text-sky-400" />
              London, United Kingdom
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs font-mono border-emerald-500/40 text-emerald-300 bg-emerald-500/10">
              <ShieldCheck className="h-3 w-3 mr-1 inline text-emerald-400" />
              Tech Nation Global Talent Candidate
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
            Engineering{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-primary bg-clip-text text-transparent">
              Intelligent Systems
            </span>{" "}
            That Ship to Production.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I architect, benchmark, and deploy mission-critical Artificial Intelligence systems spanning <strong className="text-foreground">Clinical Neuroimaging (ViT-B/32)</strong>, <strong className="text-foreground">Autonomous Browser Agents (MV3)</strong>, <strong className="text-foreground">Multimodal Vision</strong>, and <strong className="text-foreground">STEM Pedagogical Platforms</strong>. Founder of <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">RimansTech Industries</a> and author of <em>Young AI Explorers</em>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Button size="lg" className="gap-2 font-mono text-sm shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">
                Explore Shipped Systems
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-mono text-sm border-primary/50 text-foreground hover:bg-primary/10 shadow-sm" asChild>
              <a href="#vault">
                <FileText className="h-4 w-4 text-sky-400" />
                Evidence Dossier Vault (10 PDFs)
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 font-mono text-sm text-foreground hover:bg-muted" asChild>
              <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 text-primary" />
                Executive CV (PDF)
              </a>
            </Button>
          </div>

          {/* Live Architecture & Telemetry Terminal */}
          <div className="max-w-3xl mx-auto mb-10 rounded-xl border border-border/80 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden text-left">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  architecture_telemetry.live // RimansTech AI Core
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">All Systems Nominal</span>
              </div>
            </div>

            {/* Terminal Tabs */}
            <div className="flex border-b border-border/50 bg-black/40 overflow-x-auto">
              {telemetryData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTelemetry(idx)}
                  className={`px-4 py-2 text-xs font-mono whitespace-nowrap transition-all border-b-2 ${
                    activeTelemetry === idx
                      ? "border-primary text-foreground bg-primary/10 font-bold"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-neutral-800/40"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[11px] border-primary/40 text-primary bg-primary/5">
                    {telemetryData[activeTelemetry].badge}
                  </Badge>
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${telemetryData[activeTelemetry].statusColor}`}>
                    {telemetryData[activeTelemetry].status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-foreground font-bold">{telemetryData[activeTelemetry].metric1}</span>
                  <span>•</span>
                  <span className="text-foreground font-bold">{telemetryData[activeTelemetry].metric2}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed font-sans text-xs sm:text-sm">
                {telemetryData[activeTelemetry].description}
              </p>

              <div className="pt-2 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-2 overflow-x-auto">
                <Cpu className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span className="text-foreground/80 font-mono">{telemetryData[activeTelemetry].stack}</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-4 rounded-xl bg-card/70 border border-border/70 hover:border-primary/40 transition-all shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono text-sky-400">99.00%</div>
              <div className="text-xs text-muted-foreground mt-1">AlzDetect MRI Accuracy (ViT-B/32)</div>
            </div>
            <div className="p-4 rounded-xl bg-card/70 border border-border/70 hover:border-primary/40 transition-all shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono text-emerald-400">5 Systems</div>
              <div className="text-xs text-muted-foreground mt-1">Proprietary AI Products Shipped</div>
            </div>
            <div className="p-4 rounded-xl bg-card/70 border border-border/70 hover:border-primary/40 transition-all shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono text-indigo-400">22 Repos</div>
              <div className="text-xs text-muted-foreground mt-1">Public Repositories on GitHub</div>
            </div>
            <div className="p-4 rounded-xl bg-card/70 border border-border/70 hover:border-primary/40 transition-all shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono text-amber-400">10 / 10</div>
              <div className="text-xs text-muted-foreground mt-1">Tech Nation Dossiers Complete</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
