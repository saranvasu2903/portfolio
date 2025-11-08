"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-foreground mb-4">Saran V</h4>
            <p className="text-sm text-foreground/60">Software Engineer based in Chennai, India</p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/60 hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-foreground/60 hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Expertise</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-foreground/60">MERN Stack</span>
              </li>
              <li>
                <span className="text-foreground/60">n8n Automation</span>
              </li>
              <li>
                <span className="text-foreground/60">VAPI.ai Integration</span>
              </li>
              <li>
                <span className="text-foreground/60">Backend Systems</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Follow Me</h5>
            <div className="flex gap-3">
              <a href="https://github.com/saranvasu2903" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/saranv29/" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60">
          <p>Copyright {currentYear}. All rights reserved.</p>
          <p>Crafted with care by Saran V</p>
        </div>
      </div>
    </footer>
  )
}
