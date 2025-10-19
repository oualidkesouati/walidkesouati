"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">Kesouati Oualid</h1>

            <p className="text-xl sm:text-2xl text-primary font-semibold mb-4">
              Ingénieur Informatique (2025) - Fullstack & Data Science
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ingénieur diplômé de l'EMSI, je conçois et développe des applications web et mobiles innovantes. Spécialisé en
              architecture microservices, développement fullstack et analyse de données.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:kesouatioualid@outlook.com"
                className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover-lift"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Contactez-moi
              </Link>
            </div>
          </div>

          {/* Right Section - Circular Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/walidphoto.jpeg"
                  alt="Kesouati Oualid"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative circle behind the image */}
              <div className="absolute -top-4 -right-4 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
