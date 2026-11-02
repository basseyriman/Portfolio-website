"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, FileCheck, Stethoscope, BookCheck, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  {
    icon: Stethoscope,
    title: "Clinical Neuro-AI Validation",
    subtitle: "AlzDetect Clinical Evaluation",
    description: "Evaluated by Dr. Ademola Adewara (Principal Medical Officer, FMC Iddo-Ekiti). Formally verified that the 12-layer attention rollout maps accurately pinpoint early hippocampal atrophy for physician trust.",
    metric: "99.00% Accuracy",
    subtext: "5,120 Brain MRIs Evaluated"
  },
  {
    icon: GraduationCap,
    title: "Academic Research Distinction",
    subtitle: "MSc Artificial Intelligence",
    description: "Graduated with Distinction in MSc Artificial Intelligence with Advanced Practice at Teesside University, UK. Supervised by Prof. Claudio Angione, leading to Elsevier journal submission.",
    metric: "Distinction Award",
    subtext: "Teesside University, UK"
  },
  {
    icon: Award,
    title: "Journal Submission & Faithfulness",
    subtitle: "Elsevier Neuroscience Informatics",
    description: "Authored manuscript NEURI-D-26-00260R1 demonstrating that Vision Transformers achieve 0.182 Deletion and 0.788 Insertion AUC faithfulness, outperforming CNN baselines. 51-page revision with comprehensive reviewer responses submitted.",
    metric: "0.9994 ROC-AUC",
    subtext: "Elsevier NEURI-D-26-00260R1"
  },
  {
    icon: BookCheck,
    title: "Published STEM Book Author",
    subtitle: "Young AI Explorers (Amazon UK)",
    description: "Published 37-chapter educational AI guide for ages 9–12 (ASIN: B0H4KGNW3B). Conceived 13-page student activity workbook and direct grassroots book donation initiative to UK school libraries.",
    metric: "Amazon UK ASIN",
    subtext: "B0H4KGNW3B / Library Donations"
  },
  {
    icon: ShieldCheck,
    title: "Commercial Multi-Product Venture",
    subtitle: "RimansTech Industries",
    description: "Founded London AI venture shipping 5 proprietary platforms with active Stripe recurring billing, live Vercel Edge deployments, and ticketed London rooftop industry events at cloudM Tower of London.",
    metric: "5 Systems Shipped",
    subtext: "London Headquarters"
  },
  {
    icon: FileCheck,
    title: "Open-Source & Graph RAG",
    subtitle: "GitNexus & 22 Public Repositories",
    description: "Contributed to GitNexus (trending in-browser Graph RAG agent) with AbortController streaming cancellation (PR #1615), alongside 22 public GitHub repositories and technical publications on Medium.",
    metric: "GitNexus Contributor",
    subtext: "github.com/basseyriman"
  },
]

export function KeyAchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Badge variant="outline" className="mb-3 text-xs font-mono font-medium border-primary/30 text-primary">
            Verifiable Milestones
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Key Academic & Industry Milestones
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Backed by independent clinical evaluations, peer-reviewed scientific submissions, published authorship, and senior enterprise letters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="p-6 bg-card/60 border-border/60 hover:border-primary/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs font-semibold">
                        {item.metric}
                      </Badge>
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-0.5">
                      {item.title}
                    </h3>
                    <div className="text-xs text-primary font-mono mb-2.5">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-border/40 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                    <span>{item.subtext}</span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
