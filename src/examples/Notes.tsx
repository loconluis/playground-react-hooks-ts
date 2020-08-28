import React from "react";

interface INote {
  title: string;
  body: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = React.useState<INote[]>([]);
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  const handleChangeTitle = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setTitle(e.target.value);

  const handleChangeBody = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setBody(e.target.value);

  const addNote = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = (_note: INote) => {
    setNotes(notes.filter((note) => note.title !== _note.title));
  };
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note, index) => (
        <div key={index} style={{ display: "flex" }}>
          <p>{note.title}</p>
          <p>
            <small>{note.body}</small>
          </p>
          <button onClick={() => removeNote(note)}>X</button>
        </div>
      ))}
      <p>Add note</p>
      <form
        onSubmit={addNote}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Title</label>
        <input type="text" value={title} onChange={handleChangeTitle} />
        <label>Body</label>
        <textarea
          value={body}
          onChange={handleChangeBody}
          name="body"
          id="body"
          cols={30}
          rows={10}
        ></textarea>
        <button>Add note</button>
      </form>
    </div>
  );
};

export default Notes;
