"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }

  const [nodes, setNodes] = useState<{ top: string; left: string; duration: number; x: number[]; y: number[] }[]>([])

  useEffect(() => {
    const generatedNodes = [...Array(6)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 10 + i * 2,
      x: [0, Math.random() * 100 - 50, 0],
      y: [0, Math.random() * 100 - 50, 0],
    }))
    setNodes(generatedNodes)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Neural Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              x: node.x,
              y: node.y,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 bg-primary/10 rounded-full blur-[80px]"
            style={{
              top: node.top,
              left: node.left,
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Animated Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="text-sm font-mono text-primary border border-primary/30 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none"
            >
              Bassey Riman
              <span className="block text-primary mt-4 text-gradient text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                AI Engineer specializing in healthcare and education, building Vision Transformer systems for real-world impact.
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-primary/80 bg-primary/5 backdrop-blur-sm border border-primary/10 px-6 py-2 rounded-full w-fit mx-auto"
            >
              <span className="whitespace-nowrap">MSc AI (Distinction)</span>
              <span className="opacity-30">|</span>
              <span className="whitespace-nowrap text-primary">Speaker | AI Research & Innovation | Healthcare AI Advocate</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
            >
              Featured in ThisDay, The Nation, and Vanguard for work in healthcare AI and AI education.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 group shadow-xl shadow-primary/20" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg backdrop-blur-sm" asChild>
              <a href="#contact">Open to Collaborations & Research</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-12"
          >
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/basseyriman" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/basseyriman/" },
              { icon: Mail, label: "Email", href: "mailto:basseyriman@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
