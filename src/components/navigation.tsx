"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShieldCheck } from "lucide-react"
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
      <div className="max-w-6xl mx-auto flex items-center justify-between glass-dock rounded-2xl px-6 py-2.5 pointer-events-auto transition-all duration-300 border border-white/[0.1] shadow-2xl">
        
        {/* Brand Signature */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="h-8 w-8 rounded-lg bg-white/[0.06] border border-white/15 p-[1.5px] group-hover:border-primary/60 transition-colors">
            <div className="h-full w-full bg-[#0A0B0E] rounded-[6px] flex items-center justify-center font-mono font-bold text-[11px] text-white group-hover:text-primary transition-colors">
              BR
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
              BASSEY RIMAN
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            </span>
            <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase mt-0.5">
              Principal AI Architect
            </span>
          </div>
        </a>

        {/* Desktop Nav Links - Strict Single Line (whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-1 shrink-0">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="#vault"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:text-white transition-all whitespace-nowrap"
          >
            <ShieldCheck className="h-3 w-3 text-primary" />
            <span>10 Evidences</span>
          </a>
          <Button
            size="sm"
            className="h-8 px-4 rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 font-mono text-xs font-bold shadow-md transition-all whitespace-nowrap"
            asChild
          >
            <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
              Executive CV
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-1.5 text-neutral-300 hover:text-white"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto glass-dock rounded-2xl p-5 pointer-events-auto border border-white/[0.1] space-y-3"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono text-neutral-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href="#vault"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/10"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>10 Evidences Dossier</span>
              </a>
              <Button
                size="sm"
                className="w-full h-9 rounded-lg bg-white text-neutral-950 font-mono text-xs font-bold"
                asChild
              >
                <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
                  Executive CV (PDF)
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
