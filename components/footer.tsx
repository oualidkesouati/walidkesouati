"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:kesouatioualid@outlook.com" className="hover:opacity-80 transition-opacity">
                  kesouatioualid@outlook.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="#home" className="block hover:opacity-80 transition-opacity">
                Accueil
              </Link>
              <Link href="#experience" className="block hover:opacity-80 transition-opacity">
                Expérience
              </Link>
              <Link href="#projects" className="block hover:opacity-80 transition-opacity">
                Projets
              </Link>
              <Link href="#skills" className="block hover:opacity-80 transition-opacity">
                Compétences
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/kesouati-oualid-684907252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/oualidkesouati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:kesouatioualid@outlook.com"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Kesouati Oualid. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
