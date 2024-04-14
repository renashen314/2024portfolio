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
          <Link to="/work">Work</Link>
          <Link to="/work">Mapbox</Link>
        </li>
      </ul>
      <h3>React Native</h3>
      <ul>
        <li>
          <Link to="/">Uptap</Link>
        </li>
      </ul>
      <h3>Python</h3>
      <ul>
        <li>
          <Link to="/">Media Dashboard</Link>
        </li>
        <li>
          <Link to="/">Music Show Recommendation</Link>
        </li>
      </ul>
      <h3>Ruby on Rails</h3>
      <ul>
        <li>
          <Link to="/">WADS Team Project Management</Link>
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
            LinkedIn<span>&#10132;</span>
          </a>
        </h3>
      </div>
    </nav>
  );
}
