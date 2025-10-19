"use client"

const education = [
  {
    degree: "Diplôme d'ingénieur",
    school: "EMSI",
    period: "2023 - 2025",
    type: "education",
  },
  {
    degree: "Licence SMI",
    school: "Faculté des Sciences",
    period: "2019 - 2023",
    type: "education",
  },
  {
    degree: "Baccalauréat SVT",
    period: "2018 - 2019",
    type: "education",
  },
]

const certifications = [
  "Introduction à Java",
  "Introduction à Git et GitHub (IBM)",
  "Introduction aux conteneurs avec Docker (IBM)",
  "Introduction to DevOps (IBM)",
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Formation & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Formation</h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground">{item.degree}</h4>
                  {item.school && <p className="text-primary text-sm">{item.school}</p>}
                  <p className="text-muted-foreground text-sm">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
