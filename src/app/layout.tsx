import type React from "react"
import type { Metadata } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"

// <CHANGE> Using Outfit for a premium modern aesthetic and JetBrains Mono for code
const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bassey Riman | Principal AI Architect & Tech Founder",
  description:
    "Principal AI Architect and Founder of RimansTech Industries (London, UK). Architect of AlzDetect (99.00% ViT-B/32, Elsevier NEURI-D-26-00260R1), GitNexus Graph RAG open-source contributor, and author of Young AI Explorers.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
