export default function Media_Dashboard() {
  return (
    <main className="flex">
      <section className="section-container">
        <div>
          <h1>Media Dashboard</h1>
          <p>
            In partnership with our exceptional client, City of Dearborn, our
            capstone project, the Media Analytics Dashboard, streamlines the
            process of monitoring daily news from the internet related to the
            city. This enhances the City of Dearborn's current situational
            awareness strategies, keeping them informed about what's happening
            in the city and the news surrounding it. This way, they can better
            understand and serve the community.
          </p>
          <img
            src="/media_dashboard.jpg"
            alt="A dashboard of news articles fetched from google news"
          />
          <h2>Impact</h2>
          <h3>1. Automated Process: </h3>
          <p>
            Utilizing Google Cloud Function and Google Cloud Scheduler, we have
            created an automated process for news scraping and analyzing. This
            process is scheduled to run promptly at 5am every morning. This
            ensures that the most recent news is collected and analyzed at the
            start of each day, providing up-to-date content.
          </p>
          <h3>2. Opensource Package:</h3>{" "}
          <p>
            In the development of this project, we utilized the Google News
            package. This is an open-source package which is completely free of
            charge. It encourages contributions from users, allowing us to
            tailor the package to suit our specific needs.
          </p>
          <h3>3. Modular Design:</h3>{" "}
          <p>
            Our design is modular, which means it can adapt to a variety of
            scenarios and is flexible to many different contexts. This
            adaptability ensures our system can handle a wide array of
            situations and requirements, providing a robust and versatile
            solution.{" "}
          </p>
          <h3>4.Increasing Situational Awareness in the Community:</h3>
          <p>
            The system works by monitoring news articles related to the City of
            Dearborn on a daily basis. This constant monitoring allows the city
            to gain a better understanding of the evolving situation. By staying
            informed, the city can provide improved services and respond more
            effectively to the needs of the community.
          </p>
          <p>
            Reduces errors from manual operations and significantly improves
            data quality and process efficiency. Moreover, data visualization
            techniques, like word clouds, highlight recurring themes from
            relevant news articles. - We also incorporate sentiment analysis
            from Google Natural Language into our data calculations to assign a
            score to each article. This gives our clients a straightforward
            overview of the articles.
          </p>
        </div>
        {/* <h2>Project Overview</h2>
        <div className="grid-col-2">
          <div>
            <h2>Problem</h2>
            <p>
              The City of Dearborn's current method for collecting online news
              is inefficient and time-consuming. They are looking for an
              <b> automated</b> and <b>budget-fridendly</b> way to check dauly
              news and analysis.
            </p>
            <h2>Solution</h2>
            <p>
              The Media Dashboard is built in Looker Studio and embeds in
              Monday.com workspace. The news can be viewed and analyzed all in
              one place without any manual effort.
            </p>

            <h2>Methods</h2>
            <h3>Looker Studio</h3>
            <h3>MySQL</h3>
            <h3>Cloud Architecture</h3>
            <h4>Cloud Function</h4>
            <h4>Cloud Scheduler</h4>
            <h4>Cloud Natural Language</h4>
          </div>
          <div>
            <h2>Diagrams</h2>
            <div>
              <img
                src="/media_dashboard.jpg"
                alt="A dashboard of news articles fetched from google news"
              />
            </div>
            <div style={{ marginTop: "2rem", maxWidth: "60%" }}>
              <img
                src="/dashboard-workflow.png"
                alt="A dashboard of news articles fetched from google news"
              />
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
