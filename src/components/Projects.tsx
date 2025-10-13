interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  demo?: string;
  image: string;
  tech?: string[];
  status: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "Banking Dashboard",
    description: "Personal finance tracking app, powered by Plaid and Dowalla.",
    image: "/banking-dashboard.png",
    demo: "https://banking-dashboard-gamma.vercel.app",
    githubUrl: "https://github.com/renashen314/banking_dashboard",
    tech: ["react", "typescript", "html5", "css3", "figma"],
    status: "deployed",
  },
  {
    title: "Ordinary Things",
    description: "Web-based productivity tool collection.",
    demo: "https://ordinary-things.vercel.app/",
    image: "/ordinary-things.png",
    status: "deployed",
  },
  {
    title: "Concert Finder",
    description:
      "Provides concert recommendations based on your favorate artist.",
    demo: "https://drive.google.com/file/d/1HkG9hyJAoCB_JFZ1tWIGBLs8GxgLW_ig/view?usp=sharing",
    githubUrl: "https://github.com/renashen314/recommend_music_events",
    image: "/concert-finder.png",
    tech: ["Python", "react", "Oath2.0"],
    status: "deployed",
  },
  {
    title: "Multi-tenant Ecommerence App",
    description: "Payment, role management and multi tenancy.",
    image: "/funroad.png",
    githubUrl: "https://github.com/renashen314/multi-vendor-ecommerce",
    tech: ["react query", "typescript", "payload", "stripe", "tailwindcss"],
    status: "offline",
    note: "(under development)",
  },
  {
    title: "Uptap",
    description: "A mobile app to share customized business card via QR code.",
    image: "/uptap.png",
    tech: ["react native", "firestore", "Expo", "nodejs"],
    demo: "https://drive.google.com/file/d/1FZkh9kYZ5VNzs8v1WlIYZKVJJFKY4MQF/view?usp=sharing",
    githubUrl: "https://github.com/renashen314/uptap-contact-sharing",
    status: "deployed",
  },

  // {
  //   title: "DnD Character generator",
  //   description: "Generate your character in the next Adventure!",
  //   image: "https://placehold.co/600x600",
  //   tech: ["react", "typescript", "nodejs"],
  //   githubUrl: "",
  //   status: "offline",
  // },
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
                <h3>
                  {proj.title}
                  <span className={`status-icon status-${proj.status}`}></span>
                </h3>

                {proj.note && <span> {proj.note}</span>}
              </div>
              <div>
                <p>{proj.description}</p>
              </div>
              {/* <div className="project-tech-row">
                {proj.tech.map((tech) => (
                  <span className={`tech-icon tech-${tech}`} key={tech} />
                ))}
              </div> */}
            </div>
            <div className="project-links">
              <a href={proj.githubUrl} className="project-link">
                Github
              </a>
              {proj.demo && (
                <a href={proj.demo} className="project-link demo">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
