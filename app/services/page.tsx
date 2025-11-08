import Header from "@/components/header"
import Footer from "@/components/footer"
import { Code2, Zap, Rocket } from "lucide-react"

const serviceDetails = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development using modern MERN stack technologies",
    features: [
      "React component architecture with hooks and state management",
      "Node.js backend with Express and middleware optimization",
      "MongoDB database design and optimization",
      "RESTful and GraphQL API development",
      "Authentication and authorization systems",
      "Responsive and accessible UI design",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "Streamline workflows and integrate systems with intelligent automation",
    features: [
      "n8n workflow automation and custom integrations",
      "VAPI.ai voice integration and call handling",
      "Third-party API integrations",
      "Data synchronization and mapping",
      "Workflow optimization and testing",
      "Real-time notification systems",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps Tools",
    description: "Deploying and managing web applications with smooth hosting, version control, and seamless updates",
    features: [
      "Netlify deployment with continuous integration",
      "Vercel hosting for Next.js applications",
      "Render cloud platform management",
      "Git version control and branching strategies",
      "GitHub Actions and CI/CD pipelines",
      "Domain configuration and DNS management",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Services & Expertise</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Comprehensive solutions tailored to your business needs, delivered with precision and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-muted/30 rounded-xl p-8 border border-border hover:border-foreground/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-foreground/10 group-hover:bg-foreground/20 transition-colors flex-shrink-0">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-base text-foreground/60 mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technology Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { category: "Frontend", tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
                { category: "Backend", tech: ["Node.js", "Express" ] },
                { category: "Database", tech: ["MongoDb", "PostgreSQL"] },
                { category: "Automation", tech: ["n8n", "VAPI.ai", "Webhooks", ] },
                { category: "Deployment", tech: ["Netlify", "Vercel", "Git", "GitHub"] },
              ].map((stack, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-foreground mb-3">{stack.category}</h4>
                  <ul className="space-y-2">
                    {stack.tech.map((tech, tidx) => (
                      <li key={tidx} className="text-base text-foreground/70">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
