"use client"

import { motion } from "framer-motion"

const mediaFeatures = [
  { 
    name: "ThisDay", 
    logo: "/thisday-logo.png",
    description: "Featured for clinical AI research and early Alzheimer’s detection systems.",
    link: "https://www.thisdaylive.com/2026/03/27/uk-based-ai-researcher-develops-vision-transformer-system-to-detect-early-alzheimers-from-brain-scans/" 
  },
  { 
    name: "The Nation", 
    logo: "/thenation-logo.png",
    description: "Recognised for contributions to real-world AI systems in Healthcare and Education.",
    link: "https://thenationonlineng.net/uk-based-ai-researcher-develops-vision-transformer-system-to-detect-early-alzheimers-from-brain-scans/" 
  },
  { 
    name: "Vanguard", 
    logo: "/vanguard-logo.png",
    description: "Cited for leadership in AI literacy and preparing the future digital workforce.",
    link: "https://www.vanguardngr.com/2026/03/students-must-prepare-for-an-ai-driven-world-riman/" 
  },
]

export function MediaSection() {
  return (
    <section id="recognition" className="py-16 bg-muted/30 border-y border-border/50 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-primary/70 mb-8"
          >
            Featured In
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 transition-all duration-500 mb-12">
            {mediaFeatures.map((media) => (
              <motion.a
                key={media.name}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="relative h-20 w-64 flex items-center justify-center pt-1"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="max-h-full max-w-full object-contain filter grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mediaFeatures.map((media, i) => (
              <motion.a
                key={media.name}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass hover:bg-white/5 border-white/5 hover:border-primary/30 transition-all text-center flex flex-col items-center group"
              >
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{media.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{media.description}</p>
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest mt-auto border-b border-primary/20 pb-0.5 group-hover:text-primary transition-colors">
                  Read Article
                </span>
              </motion.a>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-primary font-medium max-w-3xl mx-auto leading-relaxed"
          >
            My work focuses on developing real-world AI systems and contributing to conversations shaping the future of AI in healthcare and education.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
