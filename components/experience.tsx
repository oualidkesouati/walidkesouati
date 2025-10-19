"use client"

const experiences = [
  {
    company: "Cost House",
    position: "Développeur Fullstack & Data",
    period: "2024 - Présent",
    description:
      "Conception de Nudgio, une plateforme innovante avec architecture microservices. Intégration WhatsApp Cloud API et création de dashboards KPIs.",
    technologies: ["Angular", "Flutter", "Spring Boot", "Wix", "Python"],
  },
  {
    company: "PFA Emsi",
    position: "Développeur Fullstack",
    period: "2023 - 2024",
    description: "Développement de ChatApp, une application web de messagerie instantanée avec support temps réel.",
    technologies: ["Angular", "Spring Boot", "JWT", "WebSockets", "MySQL"],
  },
  {
    company: "6 Solutions",
    position: "Développeur Fullstack",
    period: "2023",
    description: "Création de Locatrack, une application mobile de géolocalisation avec gestion des alertes.",
    technologies: ["Flutter", "Spring Boot", "MySQL", "Git", "CI/CD"],
  },
  {
    company: "PFE FSB'M",
    position: "Développeur Fullstack",
    period: "2022 - 2023",
    description: "Développement d'une application web pour la gestion des aides soignants.",
    technologies: ["ReactJS", "PHP", "Laravel", "MySQL"],
  },
  {
    company: "BOUANITRV",
    position: "Développeur Web",
    period: "2022",
    description: "Création et maintenance d'un site WordPress professionnel.",
    technologies: ["PHP", "WordPress"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Expérience Professionnelle</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border hover-lift relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />

              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
