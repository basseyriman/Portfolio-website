"use client"

import { Card } from "@/components/ui/card"
import { Brain, Code, Database, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    icon: Brain,
    title: "Generative AI & LLM Ops",
    skills: [
      "Large Language Models (GPT-4, Claude)",
      "RAG Systems & Vector Search",
      "AI Agent Frameworks",
      "LangChain & LlamaIndex",
      "Prompt Engineering",
      "Fine-tuning & Quantization",
    ],
  },
  {
    icon: Sparkles,
    title: "Deep Learning & Vision",
    skills: [
      "Vision Transformers (ViT)",
      "PyTorch & TensorFlow",
      "Neural Architecture Design",
      "Convolutional Neural Networks",
      "Object Detection & Segmentation",
      "Model Optimization",
    ],
  },
  {
    icon: Database,
    title: "MLOps & Infrastructure",
    skills: [
      "Docker & Kubernetes",
      "Vector DBs (Pinecone, Milvus)",
      "AWS / GCP / Azure",
      "MLflow & Model Tracking",
      "CI/CD for Machine Learning",
      "Scalable API Deployment",
    ],
  },
  {
    icon: Code,
    title: "Data Science & analytics",
    skills: [
      "Gradient Boosting (XGBoost, LightGBM)",
      "Predictive Modeling",
      "Statistical Data Analysis",
      "Data Pipeline Engineering",
      "Feature Engineering",
      "Advanced SQL & NoSQL",
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
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center gap-4"
          >
            Skills & Expertise
            <div className="h-px bg-primary/30 flex-1" />
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
                  <Card className="p-8 glass hover:bg-white/5 border-white/5 hover:border-primary/50 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl glass-darker group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground text-lg flex items-center gap-3 group-hover:text-foreground transition-colors">
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
