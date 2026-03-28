"use client"

import { Card } from "@/components/ui/card"
import { Brain, Code, Database, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Brain,
    title: "Clinical AI & Medical Vision",
    skills: [
      "Clinical Image Analysis",
      "MRI & Medical Data Processing",
      "Vision Transformers (ViT)",
      "Disease Prediction Models",
      "Medical Diagnostic Support",
      "Healthcare Data Strategy",
    ],
  },
  {
    icon: Database,
    title: "Applied XAI & Model Trust",
    skills: [
      "Grad-CAM & Attention Maps",
      "SHAP & Model Interpretability",
      "Clinical Trust & Transparency",
      "Bias Analysis & Mitigation",
      "Expert-in-the-loop Systems",
      "Strategic Model Validation",
    ],
  },
  {
    icon: Sparkles,
    title: "Intelligent Systems & Automation",
    skills: [
      "Neural Architecture Design",
      "Adaptive Learning Systems",
      "Predictive Analytics & ROI",
      "Scalable Learning Infrastructure",
      "Intelligent Process Automation",
      "Generative AI Architectures",
    ],
  },
  {
    icon: Code,
    title: "Advanced Engineering Stack",
    skills: [
      "Python / PyTorch / TensorFlow",
      "Next.js / TypeScript / React",
      "Cloud AI (AWS / Azure / GCP)",
      "Production-Grade MLOps",
      "Distributed System Design",
      "Full-Stack AI Integration",
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center justify-center gap-4 text-center"
          >
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
            Skills & Expertise
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 glass hover:bg-white/5 border-white/5 hover:border-primary/50 transition-all duration-500 group flex flex-col items-center text-center">
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl glass-darker group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-center">{category.title}</h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground text-lg flex items-center justify-center gap-3 group-hover:text-foreground transition-colors">
                          <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
