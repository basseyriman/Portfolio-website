"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const experiences = [
  {
    period: "Sept 2025 — Present",
    title: "AI Systems & Intelligent Automation",
    company: "Deloitte, London, UK",
    description:
      "Architecting and optimizing intelligent systems and data-driven operations within complex enterprise environments. Leading the deployment of AI-enabled workflows and high-impact smart facility solutions for global tier-1 clients.",
    technologies: ["AI Systems Architecture", "Intelligent Automation", "Scalable Workflows", "Enterprise AI"],
  },
  {
    period: "Jan 2024 — May 2024",
    title: "Machine Learning Research Intern (Elite Performance AI)",
    company: "Middlesbrough Football Club, UK",
    description:
      "Engineered advanced gradient-boosted ML models to predict elite athlete performance with high precision. Identified critical performance KPIs through multi-dimensional statistical profiling, directly influencing strategic data-driven talent identification.",
    technologies: ["ML Engineering", "Predictive Analytics", "Gradient Boosting", "Sports AI"],
  },
  {
    period: "Feb 2018 — Aug 2025",
    title: "Founder & Technical Lead (Applied AI & Automation)",
    company: "The Legitimate Store (E-commerce)",
    description:
      "Founded and scaled a data-driven e-commerce platform using AI for intelligent demand forecasting and consumer sentiment analysis. Engineered predictive models that optimized supply chain efficiency and increased user engagement metrics.",
    technologies: ["Technical Leadership", "Demand Forecasting", "Applied AI", "Full-Stack Engineering"],
  },
  {
    period: "Jan 2017 — Dec 2022",
    title: "Systems & Analytics (Software Engineer)",
    company: "3chub Brand Management Ltd",
    description:
      "Developed scalable web applications and backend systems. Built APIs and dashboards for enterprise business analytics and reporting.",
    technologies: ["Web Applications", "Backend Systems", "REST APIs", "Business Analytics"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center justify-center gap-4 text-center"
          >
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
            Professional Journey
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
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

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex flex-col items-center gap-4 mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center">{exp.title}</h3>
                        <p className="text-primary text-lg font-semibold tracking-wide uppercase text-center">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1.5 rounded-full glass-darker text-sm font-mono text-primary border border-primary/20 whitespace-nowrap inline-block">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{exp.description}</p>

                    <div className="flex flex-wrap justify-center gap-3">
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
