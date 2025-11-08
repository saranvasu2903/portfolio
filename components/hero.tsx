"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Hi everyone, I'm Saran V"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground/70">
              <span className="font-semibold text-foreground">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Software Engineer

            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              I'm a software engineer specializing in MERN stack development, n8n automation, and VAPI.ai integration. I
              craft scalable solutions that blend technical excellence with user-centric design.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/SARAN V.pdf" download className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/saranvasu2903" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/saranv29/" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.686 1.685-1.665 4.108-1.665 3.002 0 5.251 1.96 5.251 6.169v5.778zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.912.753 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.581 11.597H3.73V9.859h3.188v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-transparent rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-muted rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/saran.jpeg"
                alt="Saran V - Software Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
