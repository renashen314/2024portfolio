export default function Uptap() {
  return (
    <main className="flex">
      <section className="article">
        <h1>Uptap</h1>
        <h2>Sharing and storing contacts has never been easier.</h2>
        <p>
          Uptap is a mobile application that allows users to customize and share
          their contact cards via QR code. The application is built using React
          Native and Firebase, providing a simple and user-friendly interface.
        </p>
        <div className="button-wrapper">
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
                href="https://github.com/supraditya/UpTap"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="/UPTAP-image.png" alt="demo screens of the Uptap app" />
        </div>

        <div className="grid-col-2">
          <div>
            <h2>Key features:</h2>
            <p>
              Our app provides the following functionalities: User sign up and
              login authentication QR code scanning to automatically add contact
              cards Customization of contact cards (what information to display
              along with what background color and avatar) CRUD for multiple
              contacts card as well as self cards based on preference
              (professional business card vs personal social media card)
            </p>
            <h2>Target audience:</h2>
            <p>
              Everyday smartphone users who are moderately familiar with their
              smartphones’ capabilities (like QR code identification or ‘tap to
              pay’ functionalities){" "}
            </p>
            <h2>Value proposition:</h2>{" "}
            <p>
              Similar to the feature released for iPhones 15 and up, our app
              will let two individuals tap their phones to share contact
              information independent of their platform{" "}
            </p>
            <h2>Inspiration:</h2>
            <p>MobilO, NameDrop</p>
          </div>
          <div>
            <img src="/uptap-inspo.png" alt="example of MobilO and NameDrop" />
          </div>
        </div>
      </section>
    </main>
  );
}
