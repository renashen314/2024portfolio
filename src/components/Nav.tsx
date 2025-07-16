import { Link } from "react-router-dom";

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('project-section');
  };
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('about-section');
  };

  return (
    <nav className="navbar">
      <h3 className="big-nav-button">
        <a href="/">Home</a>
      </h3>
      <h3 className="big-nav-button">
        <Link to="/project">Projects</Link>
      </h3>
      <h3 className="big-nav-button">
        <a href="#" onClick={handleAboutClick}>Experience</a>
      </h3>
      <h3 className="big-nav-button">
        <Link to="/publication">Publication</Link>
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
      {/* <h3>React & JS</h3>
      <ul>
        <li>
          <Link to="/notebook">
            <span>&#128210;</span>Markdown Notebook
          </Link>
        </li>
        <li>
          <Link to="/nyc_park_map">
            <span>&#128510;</span>NYC Park Map
          </Link>
        </li>
      </ul>
      <h3>React Native</h3>
      <ul>
        <li>
          <Link to="/uptap">
            <span>&#128199;</span>Uptap
          </Link>
        </li>
      </ul>
      <h3>Python</h3>
      <ul>
        <li>
          <Link to="/media_dashboard">
            <span>&#128202;</span>Media Dashboard
          </Link>
        </li>
        <li>
          <Link to="/music_show_rec">
            <span>&#127878;</span>Concert Recommender
          </Link>
        </li>
      </ul> */}

    </nav>
  );
}
