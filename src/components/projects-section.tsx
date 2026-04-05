"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "🧠 AI System for Early Alzheimer’s Detection",
    description:
      "Achieved 98% accuracy in Alzheimer's classification using Vision Transformers (ViT) with explainability (Grad-CAM), significantly improving early diagnostic potential from MRI scans.",
    image: "/alzdetect_screenshot.jpg",
    technologies: ["Vision Transformers", "PyTorch", "XAI (Grad-CAM)", "Healthcare"],
    authorityTags: ["Medical AI", "Computer Vision", "Explainable AI", "Deployed System"],
    impact: [
      "Achieved 98% classification accuracy via Vision Transformers",
      "Analysed 1,000+ MRI scans with high F1/AUC scores",
      "Implemented Grad-CAM for medical-grade XAI trust"
    ],
    github: "https://github.com/basseyriman/AlzDetect",
    demo: "https://alzdetect-ruby.vercel.app/",
  },
  {
    title: "📊 Adaptive AI in Education platform",
    description:
      "Improved prediction reliability and student learning outcomes through personalized AI-driven pathways, scaling adaptive learning systems to support real-time performance analytics.",
    image: "/ai_edu_platform.jpg",
    technologies: ["Generative AI", "Predictive Analytics", "Next.js", "AI Education"],
    authorityTags: ["Generative AI", "Adaptive Learning", "Scalable Impact", "EdTech"],
    impact: [
      "Optimized learning outcomes via adaptive AI pathways",
      "Scalable impact across multiple educational domains",
      "Real-time student performance prediction & analytics"
    ],
    github: "https://github.com/basseyriman/",
    demo: "#",
  },
  {
    title: "⚙️ Applied Intelligent Systems",
    description:
      "Developing production-ready AI systems and intelligent automation that translate advanced research into real-world impact and optimized operations for enterprise-scale environments.",
    image: "/applied_ml.jpg",
    technologies: ["Applied AI", "Intelligent Systems", "Scalable Architecture", "Automation"],
    authorityTags: ["System Architecture", "Intelligent Automation", "Real-World Impact", "Production Ready"],
    impact: [
      "Bridging the gap between AI research and production-grade industrial applications",
      "Translating Research to Impact",
      "Intelligent Workflow Automation"
    ],
    github: "https://github.com/basseyriman/",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center justify-center gap-4 text-center"
          >
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
            Featured Projects
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden glass border-white/5 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video bg-secondary/10 flex items-start justify-center pt-1 sm:pt-2">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-auto rounded-t-sm shadow-md transition-shadow group-hover:shadow-2xl"
                    />
                  </div>

                  <div className="p-8 space-y-6 flex-1 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight text-center">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2">
                       {project.authorityTags.map((tag) => (
                         <Badge key={tag} variant="outline" className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary border-primary/20">
                           {tag}
                         </Badge>
                       ))}
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed text-center">{project.description}</p>

                    <div className="space-y-2 flex-1 flex flex-col items-center text-center">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary/80">Key Impact</h4>
                      <ul className="space-y-1">
                        {project.impact.map((point, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 bg-white/5 text-xs font-medium border-white/5 group-hover:border-primary/20 transition-colors text-nowrap">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5 w-full">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <Github className="h-5 w-5" />
                        Source
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
