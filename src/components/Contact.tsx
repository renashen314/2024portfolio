const Contact = () => {
  return (
    <section id="contact-section" className="section-container">
      <div className="contact-card">
        <h2>Let's talk</h2>
        <p className="contact-desc">
          I'm excited to apply my skills to your teams. Let's discuss how I can
          contribute!
        </p>

        <a
          href="mailto:renashen@umich.edu?subject=Let's%20Connect&body=Hi%20Rena,%0D%0A%0D%0A"
          className="contact-email-link"
        >
          renashen@umich.edu
        </a>

        <div className="contact-alt-title">Also find me at:</div>

        <div className="contact-socials-row">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/rena-shen-3aa321149/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="150" height="150" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="16" fill="#0077b5" />
                <path
                  d="M20 24h4v16h-4V24zm2-6a2 2 0 110 4 2 2 0 010-4zm6 6h4v2.2c.6-1.1 2-2.2 4.2-2.2C39.6 24 42 26.1 42 30.1V40h-4v-8c0-1.2-.8-2-2-2s-2 .8-2 2v8h-4V24z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://github.com/renashen314"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="150" height="150" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="16" fill="#111" />
                <path
                  d="M30 16c-7.7 0-14 6.3-14 14 0 6.2 4 11.5 9.5 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.7-4.7-1.7-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.9-1.7-3.1-.4-6.4-1.6-6.4-7.1 0-1.6.6-2.9 1.5-3.9-.2-.4-.7-2 .1-4.1 0 0 1.2-.4 4 1.5a13.8 13.8 0 017.2 0c2.8-1.9 4-1.5 4-1.5.8 2.1.3 3.7.1 4.1.9 1 1.5 2.3 1.5 3.9 0 5.5-3.3 6.7-6.4 7.1.5.4 1 1.2 1 2.5v3.7c0 .4.3.8 1 .7C40 41.5 44 36.2 44 30c0-7.7-6.3-14-14-14z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
