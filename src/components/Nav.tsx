import { Link } from "react-router-dom";

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("project-section");
  };
  const handleExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("experience-section");
  };
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("home-section");
  };
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection("contact-section");
  };

  return (
    <nav className="navbar">
      <h3 className="big-nav-button">
        <Link to="/" onClick={handleHomeClick}>
          Home
        </Link>
      </h3>
      <h3 className="big-nav-button">
        <Link to="/" onClick={handleExperienceClick}>
          Experience
        </Link>
      </h3>
      <h3 className="big-nav-button">
        <Link to="/" onClick={handleProjectClick}>
          Projects
        </Link>
      </h3>
      <h3 className="big-nav-button">
        <Link to="/publication" onClick={handleContactClick}>
          Contact
        </Link>
      </h3>
      <div className="big-nav-button">
        <h3>
          <a
            href="https://www.linkedin.com/in/rena-shen-3aa321149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span>&#10132;</span>
          </a>
        </h3>
      </div>
    </nav>
  );
}
