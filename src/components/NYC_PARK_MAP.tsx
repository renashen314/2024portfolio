export default function NYC_PARK_MAP() {
  return (
    <main className="flex">
      <section className="article">
        <h1>NYC Park Map</h1>
        <h2>A GIS data visualization project.</h2>
        <p>
          As a type of urban intelligence, parks and community gardens are
          quintessential in the urban landscape that contribute significantly to
          the physical, social, and environmental health of the city and its
          residents. They support the well-being of city residents by providing
          an inclusive space for social activities and recreational
          opportunities. <br />
          In this project, the social infrastructure in the parks are measured
          by the facilities they provide. This project also aims to analyze the
          quality of Points of Interest (POI) data from a chosen public
          database, NYC Open Data Portal.
        </p>
        <div className="button-wrapper">
          <div className="rounded-button">
            <a
              href="https://renashen314.github.io/NYC-Park-Map/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Park Map Live Demo
            </a>
          </div>
          <div className="rounded-button">
            <div className="flex">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="skill icons"
                style={{
                  width: "auto",
                  height: "24px",
                  paddingRight: "8px",
                }}
              />
              <a
                href="https://github.com/renashen314/nyc-park-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="../../public/nyc-map-image.png"
            alt="an image of nyc map with parks highlighted"
          />
        </div>
        <h2>Map interpretation</h2>
        <p>
          The interactive web map visualizes geographic data obtained from NYC
          Open Data Portal. Such data includes <b>public park properties</b>
          (public parks), <b>privately owned public spaces</b>(private parks),
          and specific park facilities(basketball courts and running tracks).
          The geographic data is visualized with Mapbox GL JS library.
        </p>
        <h2>Data availability</h2>
        <p>
          In general, the NYC open data portal provided ample geographic
          datasets related to the city's recreational infrastructure. Park
          Properties and POPs dataset appear to be most well-maintained. For
          information on park facilities, however, they do not seem to be
          comprehensively documented. Below is the breakdown of the quality of
          each dataset.
        </p>
        <h3>Park Properties</h3>
        <p>
          This dataset identifies property managed partially or solely by NYC
          Parks. It includes green spaces that would not normally be considered
          as a "park", as they are not accessible and serve as a space for
          recreational or civic engagement purposes. A good example is the
          decorative green strip along highways. In this project, I excluded the
          inaccessible green spaces by using the query tool provided by NYC open
          data portal.
        </p>
        <h3>
          <a href="https://data.cityofnewyork.us/City-Government/Privately-Owned-Public-Spaces-POPS-/rvih-nhyn/about_data">
            Privately-Owned-Public-Spaces-POPS
          </a>
        </h3>
        <p>
          POPS are outdoor and indoor spaces provided for public enjoyment by
          private owners in exchange for bonus floor area or waivers, an
          incentive first introduced into New York City’s zoning regulations in
          1961. The data set represents POPS as point geometry, therefore we
          would not know how they look geographically on the map.
        </p>
        <h3>Directory of Running Tracks</h3>
        <p>
          This dataset is available in JSON format, and is converted to geojson
          for this project. There are 9 invalid entries out of 35 (25.71%) in
          this dataset for not having location data. It was last updated in
          2018.
        </p>
        <h3>Directory of Basketball Courts</h3>
        <p>
          This dataset is available in JSON format, and is converted to geojson
          for this project. There are 20 invalid entries out of 573 (3.49%) in
          this dataset for not having location data. It was last updated in
          2018.
        </p>
        <h2>Citations</h2>
        <p>
          <i>
            Mattern, S. (2021). A City Is Not a Computer: Other Urban
            Intelligences. <br /> Klinenberg, E. (2018). Palaces for the people:
            How social infrastructure can help fight inequality, polarization,
            and the decline of civic life. <br /> Psyllidis, A., Gao, S., Hu,
            Y., Kim, E. K., McKenzie, G., Purves, R., Yuan, M. & Andris, C.
            (2022). Points of Interest (POI): A Commentary on the State of the
            Art, Challenges, and Prospects for the Future. Computational Urban
            Science
          </i>
        </p>
      </section>
    </main>
  );
}
