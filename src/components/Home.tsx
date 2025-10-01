import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTextEnhancement } from "../hooks/useTextEnhancement";
import Experience from "./Experience";

export default function Home() {
  const githubRef = useRef<HTMLAnchorElement>(null);
  const mediumRef = useRef<HTMLAnchorElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);

  const enhance = useTextEnhancement();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      if (githubRef.current) enhance(githubRef.current);
      if (mediumRef.current) enhance(mediumRef.current);
      if (emailRef.current) enhance(emailRef.current);
    }
  }, [location.pathname, enhance]);

  return (
    <>
      <main className="main-content">
        {/* Home Section */}
        <section id="home-section" className="home-section">
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
                ref={emailRef}
                className="offset-word fancy"
                href="mailto:renashen@umich.edu"
              >
                renashen@umich.edu
              </a>
              <span className="offset-word">&#9786;</span>
            </div>
            <div className="line">
              <a
                ref={githubRef}
                className="offset-word fancy"
                href="https://github.com/renashen314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>&#10132;</span>Github
              </a>
              <a
                ref={mediumRef}
                className="offset-word fancy"
                href="https://medium.com/@renashen_28351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>&#10132;</span>Medium
              </a>
            </div>
          </div>
          <div className="scroll-indicator">
            <button
              onClick={() => scrollToSection("experience-section")}
              className="scroll-button"
            >
              Get to know Me ↓
            </button>
          </div>
        </section>
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
