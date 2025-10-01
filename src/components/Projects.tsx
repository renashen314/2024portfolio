interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  tech: string[];
  status?: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "Multi-tenant Ecommerence App",
    description: "A gumroad mockup, with payment and multi tenancy",
    image: "https://placehold.co/600x600",
    url: "",
    tech: ["react query", "typescript", "payload", "stripe", "tailwindcss"],
    status: "offline",
    note: "(under development)",
  },
  {
    title: "Ordinary Things",
    description: "Web-based productivity collection",
    url: "",
    image: "public/ordinary-things.png",
    tech: ["typescript", "react", "figma"],
  },
  {
    title: "Concert Finder",
    description:
      "Provides concert recommendations based on your favorate artist",
    url: "https://github.com/renashen314/recommend_music_events",
    image: "public/ordinary-things.png",
    tech: ["Python", "react", "Oath2.0"],
  },
  {
    title: "DnD Character generator",
    description: "Generate your character in the next Adventure!",
    image: "https://placehold.co/600x600",
    tech: ["react", "typescript", "nodejs"],
    url: "",
  },

  {
    title: "Uptap",
    description: "Share your customized business card!",
    image: "https://placehold.co/600x600",
    tech: ["react native", "firestore", "Expo", "nodejs"],
    url: "",
  },
  {
    title: "Banking Dashboard",
    description:
      "Fake personal financial track directly linked to bank accounts via Plaid",
    image: "https://placehold.co/600x600",
    url: "",
    tech: ["react", "typescript", "html5", "css3", "figma"],
    status: "offline",
    note: "(under development)",
  },
];

const Projects = () => {
  return (
    <section
      id="project-section"
      className="section-container project-section-bg"
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.title}>
            <div className="project-image-wrapper">
              <img
                src={proj.image}
                alt={proj.title + " screenshot"}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div>
                <h3>{proj.title}</h3>
                {proj.note && (
                  <span className="project-note"> {proj.note}</span>
                )}
              </div>
              <div>
                <p>{proj.description}</p>
              </div>
              <div className="project-tech-row">
                {proj.tech.map((tech) => (
                  <span className={`tech-icon tech-${tech}`} key={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
