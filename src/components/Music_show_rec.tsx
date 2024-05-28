import Prism from "prismjs";
// import "prismjs/components/prism-python";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";

export default function Music_show_rec() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <main className="flex">
      <section className="article">
        <h1>Music Event Recommendation</h1>
        <h2>Generate related artists and recommend upcoming music events</h2>
        <h2>Overview</h2>
        <p>
          This project utilizes the Spotify and Ticketmaster APIs to recommend
          music events based on a user's favorite artist. It generates a list of
          top 5 artists with similar musical styles and provides information
          about their upcoming events.
        </p>
        <div className="grid-column-4">
          <div>
            <h3>Oauth 2.0</h3>
            <p>
              The Oauth 2.0 provides a way to grant limited access to
              applications (clients) without exposing passwords or other
              credentials. Spotify API uses OAuth 2.0 for user control and
              security.{" "}
            </p>
          </div>
          <div>
            <h3>RESTful API</h3>
            <p>
              Using Spotify API search endpoint, the API will search for the
              artist and return the id. Then, the artist_related_artist request
              would generate a list of 20 related artists.{" "}
            </p>
          </div>
          <div>
            <h3>Similarity Scores</h3>
            <p>
              Utilizing graph data structure, the similarity scores are
              calculated based on the <b>Jaccard similarity index</b> of each
              artist. That index is the similarities of the sample sets of two
              artists' genres.
            </p>
          </div>
          <div>
            <h3>Cache</h3>
            <p>
              Access token is cashed in Flask session for an hour to reduce the
              number of API request. Likewise, once the program build the graph,
              it will be cached in a pickle file to reduce unnecessary
              computational resources.
            </p>
          </div>
        </div>
        <h2>Demo</h2>
        <h2>GitHub Repository</h2>
        <a
          href="https://github.com/renashen314/recommend_music_events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub Repo
        </a>
        <h2>Data Structure</h2>
        <p>
          Using Spotify API search endpoint, the API will search for the artist
          to get the id. Then, using the artist related artist request to
          generate a list of 20 artists. From the response JSON, return list a
          tuple [(artist1, [genre1, genre2,…]), (artist2, [genre1, genre2,…])]
          To calculate the most related top 5 artists based on their genres, I
          used the graph data structure. The nodes are the artists, and they are
          connected by an edge if they share the same genre. I calculated their
          similarity based on how many overlapping genres they have. Then, I
          ranked them based on similarity scores and returned the first five
          artists.
        </p>
        <pre className="line-numbers">
          <code className="language-js">{`# build graph based on data
def build_graph(data):
  graph = nx.Graph()
  artists_data = [(artist, genres[0]) for artist_dict in data for artist, genres in artist_dict.items()]

  for artist, genres in artists_data:
      graph.add_node(artist, genres=genres)
  for artist1, genres1 in artists_data:
      for artist2, genres2 in artists_data:
          if artist1 != artist2:
              shared_genres = set(genres1) & set(genres2)
              weight = len(shared_genres)
              if weight > 0:
                  graph.add_edge(artist1, artist2, weight=weight)
  return graph`}</code>
        </pre>
        <h2>Caculate Similarity Scores</h2>

        <pre className="line-numbers">
          <code className="language-js">{`def find_top_5_similar_artists(graph):
  similarities = {}
  for pair in itertools.combinations(graph.nodes, 2):
      artist1, artist2 = pair
      genres1 = set(graph.nodes[artist1]['genres'])
      genres2 = set(graph.nodes[artist2]['genres'])
      jaccard_similarity = len(genres1.intersection(genres2)) / len(genres1.union(genres2))
      similarities[pair] = jaccard_similarity

  # Find the pair with the highest Jaccard similarity
  sorted_dict = dict(sorted(similarities.items(), key=lambda item: item[1], reverse=True))

  keys = list(sorted_dict.keys())
  unique_artists = []
  for a1, a2 in keys:
      if a1 not in unique_artists:
          unique_artists.append(a1)
      if a2 not in unique_artists:
          unique_artists.append(a2)
  return unique_artists[:5]`}</code>
        </pre>
        <h2>Cache Session Keys</h2>
        <pre className="line-numbers">
          <code className="language-js">{`from flask import Flask, render_template, request, session, url_for, redirect, flash

app.config['SESSION_COOKIE_SECURE'] = True

@app.route("/", methods=['GET', 'POST'])
def index():
    if not session.get("access_token"):
        return redirect(url_for("login"))
    token = main.get_token()
    if token != session["access_token"]:
        session["access_token"] = token
...`}</code>
        </pre>
        <h2>How to use</h2>
        <p>
          To use this project, you will need to have a Spotify and Ticketmaster
          account. You can sign up for a Spotify account at{" "}
          <a href="https://www.spotify.com/us/premium/">
            https://www.spotify.com/us/premium/
          </a>{" "}
          and a Ticketmaster account at{" "}
          <a href="https://www.ticketmaster.com/signup">
            https://www.ticketmaster.com/signup
          </a>
          .
        </p>
        <h2>How to interact with the program:</h2>
        <p>
          It's very intuitive! The user interacts with this program using a web
          page. The user will be prompted to enter their favorite artist's name.
          The program will then generate 5 most similar artists. The user will
          have the option to get a list of events from these artists. If they
          click on an event, they will be taken to the event details page.
        </p>
      </section>
    </main>
  );
}
