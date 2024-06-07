export default function Work() {
  return (
    <main className="flex">
      <section className="article">
        <h1>Markdown Notebook</h1>
        <h2>
          An note-taking application with markdown support. Built with React,
          TypeScript and bootstrap.
        </h2>
        <h2>CRUD operations</h2>
        <p>
          This app allows you to create, read, update and delete notes and tags.
        </p>
        <img src="/create-note.gif" alt="a gif of creating a note" />
        <h2>Markdown support</h2>
        <p>The body of the note supports markdown syntax.</p>{" "}
        <img src="/edit-note.gif" alt="a gif of editing the note in markdown" />
        <h2>Tag editing in modal</h2>
        <p>You can edit tags in the modal</p>
        <img
          src="/delete-and-edit-tag.gif"
          alt="a gif of deleting and editing a tag"
        />
        <h2>Search for a note, or filter by tags</h2>
        <img src="/search-note.gif" alt="a gif of creating a note" />
      </section>
    </main>
  );
}
