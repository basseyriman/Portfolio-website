"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border/50 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-16 text-balance flex items-center justify-center gap-4 text-center"
          >
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
            About Me
            <div className="h-px bg-primary/30 flex-1 hidden sm:block" />
          </motion.h2>

          <div className="space-y-8 text-lg sm:text-xl text-muted-foreground leading-relaxed text-center">
            <motion.p variants={itemVariants}>
              I am a strategic AI leader bridging the gap between <strong className="text-foreground font-semibold">Scientific Research</strong> and <strong className="text-foreground font-semibold">Industrial Application</strong>. My expertise lies in architecting high-impact AI systems that solve complex challenges in healthcare and education at scale.
            </motion.p>

            <motion.p variants={itemVariants}>
              Specializing in <strong className="text-foreground font-semibold">Vision Transformers (ViT)</strong> and <strong className="text-foreground font-semibold">Explainable AI (XAI)</strong>, I have a proven track record of transitioning complex lab-stage models into high-reliability clinical tools. My work is recognized nationally for its potential to transform early diagnostic pathways and expand access to personalized learning globally.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full py-12 border-y border-white/5 bg-primary/5 rounded-3xl"
          >
            {[
              { label: "AI Expertise", value: "8+ Years" },
              { label: "Systems Deployed", value: "11+" },
              { label: "Clinical Accuracy", value: "98%" },
              { label: "Press Features", value: "National" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-black text-primary mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
