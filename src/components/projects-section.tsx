"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AlzDetect – AI-Powered Alzheimer's Detection System",
    description:
      "An AI-powered web application for early Alzheimer's Disease detection through MRI analysis. Achieved 99% accuracy using Vision Transformer (ViT-B32) model.",
    image: "/alzdetect_screenshot.jpg",
    technologies: ["Python", "Vision Transformers (ViT)", "MRI Analysis", "Healthcare AI"],
    github: "https://github.com/basseyriman/AlzDetect",
    demo: "https://dissertation-7btvsdelz-bassey-rimans-projects.vercel.app/",
  },
  {
    title: "PhotoCap – Generative AI Vision App",
    description:
      "An AI-powered caption generator that helps users create engaging captions for their photos based on location, outfit colors, and time of day. Simplifies social media content creation.",
    image: "/photocap_screenshot.jpg",
    technologies: ["React", "Next.js", "GPT-4 Vision API", "Tailwind CSS"],
    github: "https://github.com/basseyriman/PhotoCap",
    demo: "https://photo-cap.vercel.app/",
  },
  {
    title: "PursePro – PWA Financial Dashboard",
    description:
      "Developed a premium, modern progressive web application (PWA) interactive financial dashboard featuring budgeting logic, charting components, and interactive category tracking.",
    image: "/pursepro_dashboard.png",
    technologies: ["React", "TailwindCSS", "Zustand", "Recharts"],
    github: "https://github.com/basseyriman/pursepro",
    demo: "https://pursepro.app",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center gap-4"
          >
            Featured Projects
            <div className="h-px bg-primary/30 flex-1" />
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

                  <div className="p-8 space-y-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 bg-white/5 text-xs font-medium border-white/5 group-hover:border-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
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
