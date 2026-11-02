"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight, ShieldCheck, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Shipped Systems", href: "#projects" },
  { name: "Evidence Vault", href: "#vault" },
  { name: "Keynotes & Press", href: "#recognition" },
  { name: "Milestones", href: "#achievements" },
  { name: "Experience", href: "#experience" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between glass-dock rounded-full px-5 py-2.5 pointer-events-auto transition-all duration-300">
        
        {/* Brand Signature */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 p-[1.5px] shadow-lg shadow-amber-500/20">
            <div className="h-full w-full bg-[#0A0B0E] rounded-full flex items-center justify-center font-mono font-bold text-[11px] text-amber-200 group-hover:text-white transition-colors">
              BR
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
              BASSEY RIMAN
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            </span>
            <span className="text-[9px] font-mono text-amber-200/70 tracking-wider uppercase mt-0.5">
              Principal AI Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="#vault"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:text-white transition-all"
          >
            <ShieldCheck className="h-3 w-3 text-primary" />
            <span>10 Evidences</span>
          </a>
          <Button
            size="sm"
            className="h-8 px-4 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-mono text-xs font-semibold shadow-lg shadow-white/10 transition-all"
            asChild
          >
            <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
              Executive CV
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1.5 text-neutral-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden max-w-sm mx-auto mt-2 glass-dock rounded-2xl p-5 border border-white/10 pointer-events-auto shadow-2xl"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-mono text-neutral-300 hover:text-white py-1 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#vault"
                  className="w-full text-center py-2 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/10 text-neutral-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View 10 Evidence Dossiers
                </a>
                <a
                  href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded-lg text-xs font-mono font-semibold bg-white text-neutral-950"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download Executive CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
