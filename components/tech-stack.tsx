"use client"

const techStack = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "hover:text-[#61DAFB]"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "hover:text-foreground"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "hover:text-[#339933]"
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "hover:text-foreground"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "hover:text-[#4169E1]"
  },
  {
    name: "MS SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    color: "hover:text-[#CC2927]"
  },
  {
    name: "N8N",
    icon: "https://n8n.io/favicon.ico",
    color: "hover:text-[#EA4B71]"
  },
  {
    name: "VAPI.AI",
    icon: "https://www.vapi.ai/favicon.ico",
    color: "hover:text-[#7C3AED]"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "hover:text-[#F05032]"
  },
  {
    name: "CRM",
    icon: "https://cdn-icons-png.flaticon.com/512/3524/3524388.png",
    color: "hover:text-[#0284C7]"
  },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Tech Stack & Tools</h2>
          <p className="text-foreground/60">
            Technologies I work with to build robust solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 hover:border-foreground/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className={`text-sm font-medium text-foreground/70 transition-colors duration-300 ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
