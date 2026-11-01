"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, FileText, Github, Linkedin, Mail, Sparkles, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.0
      } as const,
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              x: node.x,
              y: node.y,
              opacity: [0.1, 0.22, 0.1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 bg-primary/10 rounded-full blur-[90px]"
            style={{
              top: node.top,
              left: node.left,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Identity & Location Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="px-3.5 py-1 text-xs font-mono font-medium border-primary/30 bg-primary/5 text-primary">
              <Sparkles className="h-3 w-3 mr-1.5 inline" />
              Founder & Principal AI Architect
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs font-mono">
              <MapPin className="h-3 w-3 mr-1 inline text-muted-foreground" />
              London, United Kingdom
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/5">
              RimansTech Industries
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Engineering <span className="bg-gradient-to-r from-primary via-sky-400 to-indigo-400 bg-clip-text text-transparent">Intelligent Systems</span> That Ship to Production.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I architect and deploy production-grade Artificial Intelligence systems across <strong className="text-foreground">Clinical Neuroimaging</strong>, <strong className="text-foreground">Autonomous Browser Agents</strong>, <strong className="text-foreground">Generative Vision</strong>, and <strong className="text-foreground">STEM Education</strong>. Founder of <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">RimansTech Industries</a> and author of <em>Young AI Explorers</em>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="gap-2 font-medium" asChild>
              <a href="#projects">
                Explore Shipped Systems
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-medium" asChild>
              <a href="/Bassey_Riman_Executive_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Executive CV (PDF)
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="gap-2 font-medium text-muted-foreground hover:text-foreground" asChild>
              <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                RimansTech Industries
              </a>
            </Button>
          </motion.div>

          {/* Key Metric Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40 text-left"
          >
            <div className="p-3.5 rounded-lg bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">99.00%</div>
              <div className="text-xs text-muted-foreground mt-0.5">AlzDetect MRI Accuracy (ViT-B/32)</div>
            </div>
            <div className="p-3.5 rounded-lg bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">5 Systems</div>
              <div className="text-xs text-muted-foreground mt-0.5">Proprietary AI Products Shipped</div>
            </div>
            <div className="p-3.5 rounded-lg bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">22 Repos</div>
              <div className="text-xs text-muted-foreground mt-0.5">Public Open-Source on GitHub</div>
            </div>
            <div className="p-3.5 rounded-lg bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-mono">Published</div>
              <div className="text-xs text-muted-foreground mt-0.5">Amazon UK STEM Book Author</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
