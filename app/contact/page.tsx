"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xjkpnnkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Have a project in mind or just want to say hello? Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted/50 rounded-xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:saranvaradharajan29@gmail.com" className="text-foreground/80 hover:text-foreground transition-colors">
                saranvaradharajan29@gmail.com
              </a>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+91-9876543210" className="text-foreground/80 hover:text-foreground transition-colors">
                +91 93610 12902
              </a>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">Chennai, India</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Send Me a Message</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 text-foreground placeholder:text-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 text-foreground placeholder:text-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 text-foreground placeholder:text-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, requirements, or just say hello..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 text-foreground placeholder:text-foreground/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-foreground/10 border border-foreground/20 rounded-lg text-foreground text-sm text-center">
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}
            </form>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/saranvasu2903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted border border-border hover:border-foreground hover:text-foreground transition-all flex items-center justify-center text-foreground/70"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saranv29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted border border-border hover:border-foreground hover:text-foreground transition-all flex items-center justify-center text-foreground/70"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.686 1.685-1.665 4.108-1.665 3.002 0 5.251 1.96 5.251 6.169v5.778zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.912.753 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.581 11.597H3.73V9.859h3.188v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl p-8 border border-border">
                <h3 className="font-bold text-foreground mb-4">Response Time</h3>
                <p className="text-foreground/70 mb-4">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/60">Available for:</p>
                  <ul className="space-y-2 mt-3">
                    <li className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                      Freelance Projects
                    </li>
                    <li className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                      Full-time Opportunities
                    </li>
                    <li className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                      Mentorship & Consultation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
