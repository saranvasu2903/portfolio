"use client"

import { Code2, Zap, Rocket } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building scalable web applications using MERN stack, from database design to responsive UIs",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "Streamlining workflows with n8n automation and AI voice integration using VAPI.ai",
    skills: ["n8n", "VAPI.ai", "API Integration", "Automation"],
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps Tools",
    description: "Deploying and managing web applications with smooth hosting, version control, and seamless updates",
    skills: ["Netlify", "Vercel", "Render", "Git", "GitHub"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Expertise & Solutions</h2>
        <p className="text-foreground/60 text-lg mb-16 max-w-2xl">
          Specialized services tailored to transform your business through technology
        </p>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-background rounded-xl p-8 border border-border hover:border-foreground/30 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/10 group-hover:bg-foreground/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                <p className="text-foreground/70 text-base mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-foreground/10 text-foreground text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "10+" },
            { label: "Years Experience", value: "1" },
            { label: "Technologies", value: "15+" },
            { label: "Clients Satisfied", value: "90%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
