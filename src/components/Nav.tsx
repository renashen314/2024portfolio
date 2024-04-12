import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>React</h3>
      <ul>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
      <h3>React Native</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <h3>
        <Link to="/about">About</Link>
      </h3>
      <h3>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Medium
        </a>
      </h3>
      <h3>
        <a
          href="https://www.linkedin.com/in/rena-shen-3aa321149/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </h3>
    </nav>
  );
}
