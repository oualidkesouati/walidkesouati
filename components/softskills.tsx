"use client"

const softSkills = [
  "Communication",
  "Créativité",
  "Sense de Responsabilité",
  "Capacité d'adaptation",
  "Esprit d'équipe",
  "Résolution de problèmes",
  "Gestion du temps",
  
]

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Soft Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border hover-lift text-center">
              <p className="text-lg font-semibold text-foreground">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

