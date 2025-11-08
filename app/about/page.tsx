import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">About Me</h1>
            <div className="h-1 w-20 bg-foreground rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm Saran V, a passionate software engineer based in Chennai, India. With expertise in full-stack
                development and modern automation tools, I transform ideas into scalable digital solutions.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in software engineering started with a curiosity about how things work. Over the years, I've
                honed my skills in the MERN stack, backend architecture, and intelligent automation systems. I believe
                in writing clean, maintainable code and creating user-centric experiences.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or helping
                others solve complex problems through mentorship.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-foreground mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "n8n",
                    "VAPI.ai",
                    "System Design",
                    "API Development",
                    "DevOps",
                    "JavaScript",
                  ].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-foreground/10 text-foreground rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-foreground">1</div>
                    <div>
                      <p className="font-semibold text-foreground">Years of Experience</p>
                      <p className="text-sm text-foreground/60">Building scalable solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-foreground">10+</div>
                    <div>
                      <p className="font-semibold text-foreground">Projects Completed</p>
                      <p className="text-sm text-foreground/60">Diverse and impactful</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-foreground">15+</div>
                    <div>
                      <p className="font-semibold text-foreground">Technologies Mastered</p>
                      <p className="text-sm text-foreground/60">Constantly learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-foreground mb-3">01</div>
                <h4 className="font-bold text-foreground mb-2">Understand</h4>
                <p className="text-foreground/70">Deep dive into your business needs and project requirements</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-3">02</div>
                <h4 className="font-bold text-foreground mb-2">Design</h4>
                <p className="text-foreground/70">Create scalable architecture and intuitive user experiences</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-3">03</div>
                <h4 className="font-bold text-foreground mb-2">Deliver</h4>
                <p className="text-foreground/70">Build robust solutions with continuous support and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
