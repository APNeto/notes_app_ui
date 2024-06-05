import { useState } from "react";
import "./App.css"
import NoteGrid from "./components/NoteList/NoteList";

import { Note as NoteType, NoteList } from "./types/NoteType"
import Note from "./components/Note/Note";

const App = () => {
  const [noteList, setNoteList] = useState<NoteList>([
    // {
    //   id: 1,
    //   title: "Some title",
    //   content: "Just some content",
    // },
    // {
    //   id: 2,
    //   title: "There some more title",
    //   content: "There are some more content",
    // }
  ])

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const addedNote: NoteType = {
      id: noteList.length + 1,
      title: title,
      content: content
    }
    setNoteList([addedNote, ...noteList])
    setTitle("")
    setContent("")
  }

  const handleDeleteClick = (id: number) => {
    setNoteList(noteList => noteList.filter((note) => note.id !== id));
  }

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" required value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add note</button>
      </form>
      <NoteGrid>
        {
          noteList.map((note) => {
            return <Note key={note.id} title={note.title} content={note.content} onDeleteClick={() => handleDeleteClick(note.id)}  />
          })
        }
      </NoteGrid>
    </div>
  )
}

export default App;