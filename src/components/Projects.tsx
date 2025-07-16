const projects = [
  {
    title: 'Ordinary Things',
    description: 'Web-based productivity collection',
    image: 'https://placehold.co/600x600', 
    tech: ['typescript', 'react', 'figma'],
  },
  {
    title: 'DnD Character generator',
    description: 'Generate your character in the next Advanture!',
    image: 'https://placehold.co/600x600', 
    tech: ['react', 'typescript', 'nodejs'],
  },
  {
    title: 'Banking Dashboard',
    description: 'Fake personal financial track directly linked to bank accounts via Plaid',
    image: 'https://placehold.co/600x600', 
    tech: ['react', 'typescript', 'html5', 'css3', 'figma'],
    status: 'offline',
    note: '(under development)'
  },
];

const Projects = () => {
  return (
    <section id="project-section" className="section-container project-section-bg">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.title}>
            <div className="project-image-wrapper">
              <img src={proj.image} alt={proj.title + ' screenshot'} className="project-image" />
            </div>
            <div className="project-content">
              <div>
                <h3>{proj.title}</h3>
                {proj.note && <span className="project-note"> {proj.note}</span>}
              </div>
              <div><p>{proj.description}</p></div>
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