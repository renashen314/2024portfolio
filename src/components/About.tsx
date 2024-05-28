export default function About() {
  return (
    <div>
      <main className="flex">
        <section className="article">
          <h1>About</h1>
          <div className="flex">
            <div className="image-placeholder">Image Placeholder</div>
            <p>
              From the creative industry to the fast evolving technology world,
              Rena Shen has successfully transitioned into frontend development,
              recently earning her master's degree in Information from the
              University of Michigan, School of Information.
              <br />
              Rena is dedicated to delivering high-quality UX solutions that
              align with the business goals. She is a self-motivated and
              adaptive learner, continuously teaching herself new programming
              languages and frameworks. In addition to her technical skills,
              Rena is a compassionate leader who fosters an inclusive
              environment, promoting collaboration and transparency within her
              team. She dedicates time to mentoring her junior teammates,
              believing that the team's growth is essential for optimal
              performance and delivering value to end users.
              <br />
              Aside from profesional pursuits, Rena enjoys birding(A.K.A adult
              Pokemon), hiking, and build miniatures.
            </p>
          </div>
          <div>
            <h2>Language/Framework</h2>
            <a href="https://skillicons.dev">
              <img
                src="https://skillicons.dev/icons?i=react,python,typescript,javascript,nodejs,vuejs,tailwind,rails,ruby,r"
                alt="skill icons"
              />
            </a>
          </div>
          <div>
            <h2>Database/Backend</h2>
            <a href="https://skillicons.dev">
              <img
                src="https://skillicons.dev/icons?i=nodejs,firebase,mongodb,git,mysql,postgres,nextjs"
                alt="skill icons"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
