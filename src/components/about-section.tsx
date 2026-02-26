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
    <section id="about" className="py-24 sm:py-32 border-t border-border/50 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12 text-balance flex items-center gap-4"
          >
            About Me
            <div className="h-px bg-primary/30 flex-1" />
          </motion.h2>

          <div className="space-y-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <motion.p variants={itemVariants}>
              I am an experienced technical founder and AI/Machine Learning Engineer specializing in large language models,
              deep learning systems, and intelligent applications. My expertise lies in developing end-to-end AI solutions
              across diverse domains including healthcare, predictive analytics, and generative AI.
            </motion.p>

            <motion.p variants={itemVariants}>
              With a background as a Technical Lead, I specialize in model architecture design, generative AI orchestration,
              data pipelines, and full-stack MLOps deployment. I am passionate about building robust, production-grade
              systems that bridge the gap between complex research and scalable business solutions.
            </motion.p>

            <motion.p variants={itemVariants}>
              I have a proven track record of driving product vision, engineering high-performance platforms, and
              leveraging AI to solve real-world problems. Whether it's fine-tuning LLMs, building RAG systems, or
              optimizing computer vision models, I thrive on the challenge of building intelligent systems that deliver
              tangible value.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
