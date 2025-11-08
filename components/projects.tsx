"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "AI Voice Call Automation System",
    description: "Developed an AI-powered voice call automation system using VAPI, integrated with multiple CRM platforms to streamline communication workflows. Implemented real-time AI call handling, automated customer interaction flows, and full deployment optimization.",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&h=900&fit=crop&auto=format",
    tags: ["VAPI.AI", "N8N", "CRM Integration", "Voice AI"],
  },
  {
    title: "TPB – Document Template Workflow System",
    description: "Built the backend architecture for a document management and workflow system for Fidelity National Finance. Implemented admin-driven dynamic template creation, role-based data submissions, ML-based field auto-population, and detailed reporting and analytics.",
    category: "Enterprise System",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&h=900&fit=crop&auto=format",
    tags: ["React.js", "Node.js", "ML", "Workflow Management"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">My Latest Projects</h2>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium hidden sm:inline">View All</span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-foreground transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          <p className="text-foreground/60 text-lg">
            Showcase of recent work demonstrating technical expertise and design excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl bg-muted aspect-video mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-foreground/70 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-muted text-foreground/70 rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/projects"
            className="group flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Explore More Projects</h3>
              <p className="text-sm text-foreground/60">View my complete portfolio and case studies</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
