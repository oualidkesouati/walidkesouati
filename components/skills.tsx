"use client"

const skillCategories = [
  {
    title: "Langages",
    skills: ["Java", "Python", "Dart", "C#", "PHP", "TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "ASP.NET", "Flutter", "Angular", "React", "Laravel"],
  },
  {
    title: "BI & Data",
    skills: ["Power BI", "Selenium", "ETL", "Data Analysis"],
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "SQL Server", "Oracle", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Outils",
    skills: ["Docker", "Git", "Azure", "GitHub Actions", "JUnit", "Postman", "Microservices", "Jira", "Trello"],
  },
  {
    title: "Méthodologies",
    skills: ["Agile", "Scrum", "CI/CD"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Compétences Techniques</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-card rounded-lg border border-border hover-lift">
              <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
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
