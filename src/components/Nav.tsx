import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <h3 className="big-nav-button">
        <Link to="/">Home</Link>
      </h3>
      <h3>React & JS</h3>
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
      </ul>
      <div className="flex">
        <h3>Ruby on Rails</h3>
      </div>
      <ul>
        <li>
          <Link to="/work">
            <span>&#128193;</span>Dev Team Project Management
          </Link>
        </li>
      </ul>
      <h3 className="big-nav-button">
        <Link to="/about">About me</Link>
      </h3>
      <div className="external-link">
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
