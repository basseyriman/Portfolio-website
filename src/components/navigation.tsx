"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Shipped Systems", href: "#projects" },
  { name: "Evidence Vault", href: "#vault" },
  { name: "Press & Keynotes", href: "#recognition" },
  { name: "Milestones", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 glass-darker border-b border-border/80 shadow-2xl"
          : "h-20 bg-background/60 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary via-indigo-500 to-sky-400 p-[1.5px] shadow-lg shadow-primary/20">
              <div className="h-full w-full bg-background rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-foreground group-hover:text-primary transition-colors">
                BR
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-foreground leading-none flex items-center gap-1.5">
                BASSEY RIMAN
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase mt-0.5">
                Principal AI Architect
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:bg-card/60 rounded-md transition-all relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}

            <div className="ml-3 flex items-center gap-2 border-l border-border/60 pl-3">
              <Button size="sm" variant="outline" className="text-xs font-mono gap-1.5 border-primary/40 hover:bg-primary/10" asChild>
                <a href="#vault">
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  10 Evidences
                </a>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs font-mono shadow-md shadow-primary/25" asChild>
                <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer">
                  Executive CV
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-darker overflow-hidden rounded-2xl mt-2 border border-border/80"
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="block text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="w-full text-xs font-mono" asChild>
                    <a href="#vault" onClick={() => setIsMobileMenuOpen(false)}>Evidence Vault (10 Dossiers)</a>
                  </Button>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs font-mono" asChild>
                    <a href="/dossiers/00_MANDATORY_Bassey_Riman_Executive_CV_3Pages.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                      Download Executive CV (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
