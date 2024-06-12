export default function Publication() {
  return (
    <main className="flex">
      <section className="article">
        <h1>Publication Websites</h1>
        <p>Websites pushlished during my time at The Michigan Daily</p>
        <div>
          <a
            href="https://specials.michigandaily.com/2024/summer-crush/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              2024 Summer Crush <span>&#10132;</span>
            </h2>
          </a>
          <p>
            From our favorite music and sweet treats to nostalgic memories of
            our hometowns and car rides with our friends, Statement writers are
            excited to finally share it all! The Statement is proud to bring you
            everything we're crushing on this summer!{" "}
          </p>
          <img src="/summer-crush-snap.png" alt="snap shot of website" />
          <br />
        </div>
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <h2>
              Ann Arbor Summer Festival(Coming Soon!) <span>&#10132;</span>
            </h2>
          </a>
          <p>
            From our favorite music and sweet treats to nostalgic memories of
            our hometowns and car rides with our friends, Statement writers are
            excited to finally share it all! The Statement is proud to bring you
            everything we're crushing on this summer!{" "}
          </p>
          <img src="/aa-events-snap.png" alt="snap shot of website" />
          <br />
        </div>
        <div>
          <a
            href="https://specials.michigandaily.com/2024/a-day-in-the-life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              A Day in the Life of a UMich Student <span>&#10132;</span>
            </h2>
          </a>
          <p>
            The University of Michigan has over 50,000 graduate and
            undergraduate students at 19 different colleges and schools.
            Considering the size of the University, most students are not able
            to interact with peers who may have very different academic
            experiences than their own. The Michigan Daily Campus Life beat
            spent some time with a few U-M students to share with readers how
            daily life at the University can vary.
          </p>
          <img src="/day-in-life-snap.png" alt="snap shot of website" />
          <br />
        </div>
      </section>
    </main>
  );
}
