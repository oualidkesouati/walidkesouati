"use client"

const projects = [
  {
    title: "Application d'Appel Vidéo en Réseau Local",
    description: "Développement d'une application de communication en temps réel (RTC) permettant des appels vidéo peer-to-peer sécurisés entre utilisateurs connectés au même réseau local.",
    technologies: ["WebRTC", "WebSockets", "Spring Boot", "Angular"],
  },
  {
    title: "Application de gestion du contrôle technique",
    description: "Plateforme complète pour la gestion et le suivi des contrôles techniques automobiles.",
    technologies: ["ASP.NET", "SQL Server", "C#"],
  },
  {
    title: "Application Web de gestion d'un club sportif",
    description: "Système de gestion intégré pour les clubs sportifs incluant membres, événements et finances.",
    technologies: ["Thymeleaf", "Spring Boot", "MySQL"],
  },
  {
    title: "FIFA Players Dataset - Analyse de données",
    description: "Analyse approfondie du dataset FIFA avec visualisations et insights sur les joueurs.",
    technologies: ["Power BI", "Kaggle", "Data Analysis"],
  },
  {
    title: "Application Web de Gestion de Bibliothèque",
    description: "Plateforme complète pour la gestion du catalogue de livres, le suivi des membres et des emprunts en temps réel.",
    technologies: ["ASP.NET", "Tailwind CSS]", "SQL Server"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-card rounded-lg border border-border hover-lift flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
