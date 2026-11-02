"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Brain,
    title: "Clinical AI & Medical Vision",
    badge: "Neuroimaging & XAI",
    skills: [
      "Vision Transformers (ViT-B/32)",
      "12-Layer Attention Rollout & Grad-CAM",
      "MRI Scans & Atrophy Localization",
      "Faithfulness AUC (Deletion/Insertion)",
      "Clinical Expert-in-the-Loop Protocols",
      "PyTorch, TorchVision & Medical FastAPIs",
    ],
  },
  {
    icon: Sparkles,
    title: "Agentic Systems & Zero-Server WASM",
    badge: "Graph RAG & Agents",
    skills: [
      "In-Browser Knowledge Graphs (WASM)",
      "Graph RAG Orchestration (LangGraph)",
      "AbortController Stream Cancellation (PR #1615)",
      "Chrome Manifest V3 Browser Agents",
      "DOM Mutation Observers & Safety Enforcers",
      "Zero-Server Client Sandbox Security",
    ],
  },
  {
    icon: Database,
    title: "Generative Multimodal & EdTech",
    badge: "Diffusion & Education",
    skills: [
      "Sequential Diffusion Try-On (FASHN / fal.ai)",
      "Procedural WebAudio Synthesizers",
      "Speech-to-Wardrobe NLP Parsing",
      "300-DPI Prepress Automated Publishing",
      "Generative Curriculum DAGs (Vision Vee)",
      "Multi-Tenant Platforms & 5-Locale i18n",
    ],
  },
  {
    icon: Code,
    title: "Production Architecture & Venture Stack",
    badge: "Venture Leadership",
    skills: [
      "Next.js 16 (App Router) & React 19",
      "TypeScript, Python & C++ WASM Toolchains",
      "High-Performance Asynchronous APIs",
      "Commercial Stripe Recurring Subscriptions",
      "Docker Production Containerization",
      "Vercel Edge & Cloud Deployment",
    ],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/30 text-primary">
            Technical Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Applied AI Architecture & Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A comprehensive matrix of production capabilities spanning clinical deep learning, autonomous agent runtimes, multimodal generative engines, and venture-grade infrastructure.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-7 bg-card/60 border-border/60 hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border/40">
                        {category.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-start gap-2 p-2 rounded-md bg-background/50 border border-border/30 text-xs text-foreground/85 font-medium hover:border-primary/30 transition-colors"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-tight">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
