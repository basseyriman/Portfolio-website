"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2, Globe, Microscope, Presentation } from "lucide-react"
import { Card } from "@/components/ui/card"

const achievements = [
  {
    icon: Globe,
    title: "National Media Authority",
    description: "Formally recognized by ThisDay, The Nation, and Vanguard for pioneering AI research and high-impact leadership in healthcare and education.",
  },
  {
    icon: Microscope,
    title: "98% Diagnostic Accuracy (ViT)",
    description: "Developed and deployed a Vision Transformer (ViT) system for early Alzheimer’s discovery from clinical MRI scans with explainable AI validation.",
  },
  {
    icon: Award,
    title: "Strategic AI Impact Across Domains",
    description: "Proven track record of bridging the gap between advanced academic research and scalable production-level AI systems in healthcare and industry.",
  },
  {
    icon: Presentation,
    title: "Thought Leadership",
    description: "Speaker and contributor to AI discussions, helping shape the conversation around ethical and applied AI systems.",
  },
]

export function KeyAchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center justify-center gap-4 text-center"
          >
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
            Key Achievements
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 h-full glass hover:bg-white/5 border-white/5 hover:border-primary/50 transition-all duration-500 group flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 inline-flex items-center gap-2 px-6 py-3 rounded-full glass-darker border border-primary/20 text-primary font-medium"
          >
            <CheckCircle2 className="h-5 w-5" />
            Recognised for Excellence in Applied AI
          </motion.div>
        </div>
      </div>
    </section>
  )
}
