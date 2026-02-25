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
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black mb-6 text-balance text-gradient">
              Let's Build Something Amazing
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {[
              { icon: Mail, title: "Email", value: "basseyriman@gmail.com", href: "mailto:basseyriman@gmail.com" },
              { icon: MessageSquare, title: "LinkedIn", value: "Bassey Riman", href: "https://www.linkedin.com/in/basseyriman/" },
              { icon: Calendar, title: "Work", value: "Full-time / Contract", href: "#" },
            ].map((contact, i) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-8 text-center glass hover:bg-white/5 border-white/5 group-hover:border-primary/50 transition-all duration-500 h-full">
                  <div className="inline-flex p-4 rounded-xl glass-darker group-hover:bg-primary/20 transition-colors mb-6 text-primary">
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{contact.title}</h3>
                  <p className="text-muted-foreground truncate">{contact.value}</p>
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
      <div className="max-w-4xl mx-auto mt-24 px-4 pb-12">
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-base text-muted-foreground">
          <p>© 2026 Bassey Riman. Built with Next.js, Framer Motion & Premium Aesthetics</p>
          <div className="flex items-center gap-8">
            <a href="https://github.com/basseyriman" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/basseyriman/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
