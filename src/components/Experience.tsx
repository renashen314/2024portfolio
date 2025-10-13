const experiences = [
  {
    title: "Frontend developer",
    company: "LSA Techonolody Services, University of Michigan",
    date: "May 2023 - Present",
    tech: ["Javascript", "Git", "Figma"],
    responsibilities: [
      "Develop JS web components for schools' and departments' websites.",
      "Migrate legacy VB .NET Framework webforms to C# ASP.NET Core",
      "Design UX and polished UI for websites in Figma.",
    ],
    results: [],
  },
  {
    title: "QA Software Engineer",
    company: "LSA Techonolody Services, University of Michigan",
    date: "May 2023 - Aug 2024",
    tech: ["Jest", "Cypress", "JavaScript", "Git", "Figma"],
    responsibilities: [
      "Create and adjust UIs based on Figma prototypes.",
      "Maintain and refactor code.",
      "Integrate with REST APIs.",
      "Write unit tests using Jest.",
    ],
  },
  {
    title: "Engineering Manager, Web section",
    company: "The Michigan Daily",
    date: "Jan 2024 - Aug 2024",
    tech: ["JavaScript", "TypeScript", "AWS", "SCSS", "Git", "Figma"],
    responsibilities: [
      "Developed interactive special-edition websites",
      "Maintained documentation to facilitate team knowledge sharing",
      "Led code reviews and QA testing to uphold production-grade quality",
      "Reviewed code and peer-programed",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <section id="experience-section" className="section-container">
        <h2>Experience</h2>
        <div className="experience-section">
          <p>
            I am a <span>NYC based</span> developer with
            <br />
            <span>3 years</span> of experience as a coding enthusiast, and
            <span>1.5 years</span> as a professional frontend developer.
          </p>
          <div>
            <h3>Language/Framework</h3>
            <a href="https://skillicons.dev">
              <img
                src="https://skillicons.dev/icons?i=react,python,typescript,javascript,nodejs,vuejs,tailwind,rails,ruby,r,cs,dotnet"
                alt="skill icons"
              />
            </a>
            <h3>Database/Backend</h3>
            <a href="https://skillicons.dev">
              <img
                src="https://skillicons.dev/icons?i=nodejs,firebase,mongodb,git,mysql,postgres,nextjs"
                alt="skill icons"
              />
            </a>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={exp.title + idx}>
              <div className="experience-header">
                <div>
                  <span className="exp-job-title">{exp.title}</span>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <div className="exp-tech-row">
                {exp.tech.map((tech) => (
                  <span
                    className={`exp-tech-pill tech-${tech
                      .replace(/\s+/g, "")
                      .toLowerCase()}`}
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="exp-body">
                <div className="exp-section-label">Responsibilities</div>
                <ul className="exp-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {exp.results && (
                  <>
                    <div className="exp-section-label">Key Results</div>
                    <ul className="exp-list">
                      {exp.results.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
