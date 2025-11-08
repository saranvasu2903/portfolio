import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const allProjects = [
  {
    title: "AI Voice Call Automation System",
    description: "Developed an AI-powered voice call automation system using VAPI, integrated with multiple CRM platforms to streamline communication workflows. Implemented real-time AI call handling, automated customer interaction flows, and full deployment optimization, resulting in enhanced operational efficiency and seamless end-to-end voice automation.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&h=900&fit=crop&auto=format",
    category: "AI Automation",
    tags: ["VAPI.AI", "N8N", "CRM Integration", "Voice AI", "Automation"],
    link: "#",
    github: "#",
  },
  {
    title: "TPB – Document Template Workflow System",
    description: "Built the backend architecture for a document management and workflow system for Fidelity National Finance. Implemented admin-driven dynamic template creation, role-based data submissions, ML-based field auto-population, image batch processing, quality control dashboards, reassignment modules, and detailed reporting and analytics for improved operational transparency and accuracy.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&h=900&fit=crop&auto=format",
    category: "Enterprise System",
    tags: ["React.js", "Node.js", "ML", "Workflow Management", "Analytics"],
    link: "#",
    github: "#",
  },
  {
    title: "TaskFlow Pro – Multi-Level Task Assignment System",
    description: "Designed a task automation platform enabling hierarchical task assignment and tracking. Managers can upload Excel task sheets in bulk and assign tasks to team leads, who further distribute tasks to employees. Employees can track assigned tasks, update progress, upload outputs, and mark completion. Automated real-time notifications ensure managers and team leads are alerted as tasks move through the workflow.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1600&h=900&fit=crop&auto=format",
    category: "Productivity",
    tags: ["Next.js", "PostgreSQL", "Task Management", "Notifications", "Excel Integration"],
    link: "#",
    github: "#",
  },
  {
    title: "BillEase – Smart Billing & Invoice Management System",
    description: "Developed a digital billing and invoice generation platform for reception and retail operations. System allows product catalog management with pricing and details, and supports invoice creation by selecting items and auto-calculating totals. Enables fast billing, error-free calculations, and professional invoice generation for improved customer experience and streamlined administrative work.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1600&h=900&fit=crop&auto=format",
    category: "Business Solution",
    tags: ["Next.js", "PostgreSQL", "Billing", "Invoice Management", "Retail"],
    link: "#",
    github: "#",
  },
  {
    title: "AudioCare Insight – Audiology Analysis System",
    description: "Created a healthcare analytics system designed for audiologists to upload and analyze patient audiology data. The platform processes reports and provides detailed insights into hearing issues, enabling doctors to diagnose more accurately and efficiently with enhanced data visualization and interpretation.",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1600&h=900&fit=crop&auto=format",
    category: "Healthcare",
    tags: ["Next.js", "Data Analytics", "Healthcare", "Data Visualization", "Medical"],
    link: "#",
    github: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Portfolio</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Showcase of recent projects demonstrating technical expertise, creative problem-solving, and design
              excellence.
            </p>
          </div>

          {/* All Projects - 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl bg-muted aspect-video mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <span className="text-xs px-3 py-1 bg-foreground/10 text-foreground rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-foreground/10 text-foreground text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
