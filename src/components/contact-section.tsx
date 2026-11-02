"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Building2, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="contact" className="py-28 sm:py-36 relative overflow-hidden bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panoramic Container (max-w-6xl) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Executive Leadership Statement (7 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <Badge variant="outline" className="text-xs font-mono font-medium border-primary/40 text-primary bg-primary/5 px-3 py-1">
                Executive Inquiries & Partnerships
              </Badge>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Technology Leadership, Research & Venture Inquiries
              </h2>

              <p className="text-base sm:text-lg text-neutral-300/90 leading-relaxed max-w-2xl font-normal">
                Open to high-impact machine learning research collaborations, clinical healthcare AI validation, and strategic digital technology initiatives in the UK and internationally.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-neutral-200">London, United Kingdom</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span className="text-neutral-200">RimansTech Venture Governance</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="h-12 px-7 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-mono text-xs font-bold shadow-xl shadow-white/10 gap-2 transition-all hover:scale-[1.02]"
                  asChild
                >
                  <a href="mailto:basseyriman@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span>Initiate Direct Correspondence</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-xl bg-white/[0.03] border-white/15 hover:border-primary/50 text-white font-mono text-xs gap-2 transition-all hover:bg-white/[0.05]"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/basseyriman/" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Integrated Communication Console (5 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="p-7 rounded-2xl glass-card border border-primary/20 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">OFFICIAL CHANNELS</span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    DIRECT INBOX
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Channel 1: Email */}
                  <a
                    href="mailto:basseyriman@gmail.com"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 hover:bg-white/[0.04] transition-all flex items-center justify-between group block"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase text-neutral-400">Official Correspondence</div>
                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">basseyriman@gmail.com</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>

                  {/* Channel 2: LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/basseyriman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 hover:bg-white/[0.04] transition-all flex items-center justify-between group block"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase text-neutral-400">Executive Network</div>
                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">linkedin.com/in/basseyriman</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-colors shrink-0" />
                  </a>

                  {/* Channel 3: Venture Office */}
                  <a
                    href="https://www.rimanstech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 hover:bg-white/[0.04] transition-all flex items-center justify-between group block"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase text-neutral-400">Venture Headquarters</div>
                        <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">RimansTech Industries (London, UK)</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-colors shrink-0" />
                  </a>
                </div>

                <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                  <span>Priority Response: Under 24h</span>
                  <span className="text-primary font-semibold">UK Global Talent Portfolio</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Expansive Full-Width Footer (max-w-6xl) */}
        <div className="max-w-6xl mx-auto mt-28 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© 2026 Bassey Riman. Founder & Principal AI Architect — London, UK</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/basseyriman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/basseyriman/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://rimanstech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              RimansTech
            </a>
            <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Executive CV
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
