"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    period: "Nov 2024 — Present",
    title: "Founder & Principal AI Architect",
    company: "RimansTech Industries (London, UK)",
    location: "London, United Kingdom",
    type: "Technology Venture Leadership",
    description:
      "Directing the strategic product vision, applied machine learning research, and full-stack engineering of RimansTech Industries (rimanstech.com). Conceived and shipped 5 proprietary AI systems across neuroimaging, consumer generative vision, browser agents, and STEM education.",
    achievements: [
      "Architected AlzDetect (alzdetect.live), achieving 99.00% accuracy in clinical Alzheimer's MRI classification",
      "Engineered VoiceDress (voicedress.com) with multi-stage diffusion try-on and recurring Stripe memberships",
      "Built Pointly (gopointly.com) Chrome Manifest V3 extension with zero auto-clicks security guarantee",
      "Organized official AI Quest London Rooftop Playtesting showcase at cloudM Tower of London"
    ],
    technologies: ["AI Systems Architecture", "Vision Transformers", "Next.js 16", "FastAPI", "Stripe API", "Docker"],
  },
  {
    period: "Sept 2025 — Present",
    title: "Technical Operations Specialist",
    company: "Deloitte (London, UK)",
    location: "London, United Kingdom",
    type: "Workplace Technology",
    description:
      "Managing enterprise smart facilities technology and client service infrastructure across Deloitte's London headquarters. Supporting workspace navigation, automated access control (Cardex/Gallagher), and smart workplace systems.",
    achievements: [
      "Maintain operations of Deloitte Smart Wayfinding and executive facility navigation systems",
      "Advised by Barry Evans, Director of Workplace Technology at Deloitte UK, on applied AI deployment",
      "Coordinate critical contractor permits and facility compliance across high-density client buildings"
    ],
    technologies: ["Smart Workplace Systems", "Cardex / Gallagher", "Enterprise Operations", "Wayfinding"],
  },
  {
    period: "Jan 2024 — May 2024",
    title: "Machine Learning Research Intern (Elite Performance AI)",
    company: "Middlesbrough Football Club (UK)",
    location: "Middlesbrough, UK",
    type: "Sports Data Science & AI",
    description:
      "Engineered machine learning models to classify player performance and predict injury risks from longitudinal physical profiling data. Applied gradient boosting and regularization to identify key physical performance indicators.",
    achievements: [
      "Built predictive gradient-boosted trees for multi-dimensional athlete performance profiling",
      "Identified critical physical recovery indicators, mitigating overfitting in high-variance sports data"
    ],
    technologies: ["Gradient Boosting", "Python / Scikit-Learn", "Feature Engineering", "Sports Analytics"],
  },
  {
    period: "Feb 2018 — Aug 2025",
    title: "Founder & Technical Lead",
    company: "The Legitimate Store (E-commerce)",
    location: "Remote / Hybrid",
    type: "Digital Commerce Venture",
    description:
      "Founded and engineered an e-commerce platform. Developed 'Lana', an applied machine learning system for demand forecasting and customer purchase recommendation. Built responsive PWA with deterministic state.",
    achievements: [
      "Engineered 'Lana' predictive recommendation engine for personalized consumer basket suggestions",
      "Designed full-stack PWA architecture ensuring offline resilience and sub-second load times"
    ],
    technologies: ["Predictive Analytics", "Recommendation Algorithms", "PWA", "Full-Stack Development"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-xs font-mono font-medium border-primary/30 text-primary">
            Career Timeline
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Professional & Founder Leadership
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Demonstrated track record of directing technology ventures, collaborating with tier-1 enterprise institutions, and translating research into commercial impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-6 sm:p-8 bg-card/60 border-border/60 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="text-sm font-medium text-primary flex items-center gap-1.5 mt-0.5">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="secondary" className="font-mono text-xs">
                      <Calendar className="h-3 w-3 mr-1 inline" />
                      {exp.period}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-1.5 mb-5 pt-1">
                  {exp.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-muted/80 text-muted-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
