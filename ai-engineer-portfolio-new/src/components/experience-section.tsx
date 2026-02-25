"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const experiences = [
  {
    period: "Sept 2025 — Present",
    title: "Technical Operations Specialist",
    company: "Deloitte, London, UK",
    description:
      "Delivering excellent client service and issue resolution across Deloitte smart facilities. Managing staff access via Cardex and contractor permits through Gallagher, while maintaining knowledge of Smart Wayfinding systems.",
    technologies: ["Cardex", "Gallagher", "Smart Wayfinding", "Client Operations"],
  },
  {
    period: "Jan 2024 — May 2024",
    title: "Machine Learning Engineer (Intern)",
    company: "Middlesbrough Football Club, UK",
    description:
      "Developed machine learning models to classify players and predict performance outcomes based on physical profiling data. Leveraged gradient boosting techniques for accurate predictions, using regularization to prevent overfitting and identify key performance indicators.",
    technologies: ["AI/ML", "Predictive Modeling", "Gradient Boosting", "Sports Analytics"],
  },
  {
    period: "Feb 2018 — Aug 2025",
    title: "Founder & Technical Lead",
    company: "The Legitimate Store (E-commerce)",
    description:
      "Founded and engineered the platform, leading end-to-end development. Built 'Lana', an AI/ML system for sales optimization and customer insights. Developed predictive models for demand forecasting and recommendation engines while managing a scalable React PWA frontend.",
    technologies: ["AI/ML", "Predictive Modeling", "React", "State Management", "PWA"],
  },
  {
    period: "Jan 2017 — Dec 2022",
    title: "Software Engineer",
    company: "3chub Brand Management Ltd",
    description:
      "Designed scalable web and backend systems for high-traffic e-commerce. Built REST APIs and databases, integrating React for responsive UI experiences, and developed advanced analytics tools for sales and inventory tracking.",
    technologies: ["REST APIs", "React", "Backend Systems", "Analytics Tools", "Database Design"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center gap-4"
          >
            Experience
            <div className="h-px bg-primary/30 flex-1" />
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 sm:p-10 glass hover:bg-white/5 border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-8xl font-black">{index + 1}</span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                        <p className="text-primary text-lg font-semibold tracking-wide uppercase">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1.5 rounded-full glass-darker text-sm font-mono text-primary border border-primary/20 whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{exp.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors border-white/5">
                          {tech}
                        </Badge>
                      ))}
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
