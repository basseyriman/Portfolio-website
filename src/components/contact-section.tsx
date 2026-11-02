"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black mb-6 text-balance text-gradient">
              Technology Leadership, Research & Venture Inquiries
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Open to high-impact machine learning research collaborations, healthcare AI validation, and strategic digital technology initiatives in the UK and internationally.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {[
              { icon: Mail, title: "Official Correspondence", value: "basseyriman@gmail.com", href: "mailto:basseyriman@gmail.com", subtext: "Direct Inquiries" },
              { icon: MessageSquare, title: "Executive Network", value: "linkedin.com/in/basseyriman", href: "https://www.linkedin.com/in/basseyriman/", subtext: "LinkedIn Verified" },
              { icon: Calendar, title: "Venture Headquarters", value: "RimansTech Industries", href: "https://www.rimanstech.com", subtext: "London, United Kingdom" },
            ].map((contact, i) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-8 text-center glass hover:bg-white/5 border-white/5 group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex p-4 rounded-xl glass-darker group-hover:bg-primary/20 transition-colors mb-6 text-primary">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{contact.title}</h3>
                    <p className="text-sm font-semibold text-primary/90 mb-1 truncate">{contact.value}</p>
                    <p className="text-xs text-muted-foreground">{contact.subtext}</p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20 group" asChild>
              <a href="mailto:basseyriman@gmail.com">
                <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Send Me a Message
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-24 px-4 pb-12 flex flex-col items-center">
        <div className="pt-12 w-full border-t border-white/5 flex flex-col items-center justify-center gap-6 text-base text-muted-foreground text-center">
          <p>© 2026 Bassey Riman. Founder & Principal AI Architect — London, UK</p>
          <div className="flex items-center gap-8">
            <a href="https://github.com/basseyriman" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/basseyriman/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
