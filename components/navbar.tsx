"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-foreground">Kesouati Oualid</div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
              Expérience
            </Link>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projets
            </Link>
            <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
              Compétences
            </Link>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
