"use client"

import { motion } from "framer-motion"
import { Target, Heart, Sparkles } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-primary/5 opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Target className="h-4 w-4" />
            My Mission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-12 text-balance leading-tight"
          >
            Advancing the Future of Healthcare & Learning through AI
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl glass-darker border border-white/5 relative group"
          >
            <div className="absolute -top-6 -left-6 p-4 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary">
              <Sparkles className="h-8 w-8" />
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic font-medium">
              "I am focused on developing AI systems that improve early disease detection and expand access to intelligent education tools, contributing to the future of healthcare and learning globally."
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                   <Target className="h-5 w-5" />
                </div>
                <span className="font-semibold tracking-wide uppercase text-xs">Global Impact</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                   <Heart className="h-5 w-5" />
                </div>
                <span className="font-semibold tracking-wide uppercase text-xs">Human Centric</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
