import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const enhance = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const text = element.innerText.split("");
      element.innerText = "";

      text.forEach((letter, index) => {
        const outer = document.createElement("span");
        outer.className = "outer";

        const inner = document.createElement("span");
        inner.className = "inner";
        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        span.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(span);
        outer.appendChild(inner);
        element.appendChild(outer);
      });
    }
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      enhance("github-link");
      enhance("medium-link");
      enhance("homepage-email");
    }
  }, [location.pathname]);

  return (
    <>
      <main className="main-content">
        <div id="text">
          <div className="line">
            <p className="offset-word">Rena</p>
            <p className="offset-word">Shen</p>
          </div>
          <div className="line">
            <p className="offset-word highlight">Frontend</p>
            <p className="offset-word highlight">&</p>
          </div>
          <div className="line">
            <p className="offset-word highlight">software development</p>
          </div>
          <div className="line">
            <a
              id="homepage-email"
              className="offset-word fancy"
              href="mailto:renashen@umich.edu"
            >
              renashen@umich.edu
            </a>
            <span className="offset-word">&#9786;</span>
          </div>
          <div className="line">
            <a
              id="github-link"
              className="offset-word fancy"
              href="https://github.com/renashen314"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10132;</span>Github
            </a>
            <a
              id="medium-link"
              className="offset-word fancy"
              href="https://medium.com/@renashen_28351"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10132;</span>Medium
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
