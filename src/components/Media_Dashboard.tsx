export default function Media_Dashboard() {
  return (
    <main className="flex">
      <section className="article">
        <div>
          <h1>Media Dashboard</h1>
          <p>
            The Media Analytics Dashboard streamlines the process of monitoring
            daily news from the internet related to the City of Dearborn. This
            enhances the city's current situational awareness strategies,
            keeping them informed about what's happening in the city and further
            analyze the news. This way, they can better understand and serve the
            community.
          </p>
        </div>
        <h2>Project Overview</h2>
        <div className="grid-col-2">
          <div>
            <h2>Problem</h2>
            <p>
              The City of Dearborn's current method for collecting online news
              is inefficient and time-consuming. They are looking for an
              automated and budget-fridendly way to check dauly news and
              analysis.
            </p>
            <h2>Solution</h2>
            <p>
              Our project streamlines the collection, normalization, and
              visualization of data. It eliminates the need for our client to
              manually collect and process information.
            </p>
            <h2>Impact</h2>
            <p>
              Reduces errors from manual operations and significantly improves
              data quality and process efficiency. Moreover, data visualization
              techniques, like word clouds, highlight recurring themes from
              relevant news articles. - We also incorporate sentiment analysis
              from Google Natural Language into our data calculations to assign
              a score to each article. This gives our clients a straightforward
              overview of the articles.
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
            <img
              src="../../public/media_dashboard.jpg"
              alt="A dashboard of news articles fetched from google news"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
