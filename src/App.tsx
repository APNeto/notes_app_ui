import { useState } from "react";
import "./App.css"
import NoteGrid from "./components/NoteList/NoteList";

import {Note, NoteList} from "./types/NoteType"

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
    const addedNote: Note = {
      id: noteList.length + 1,
      title: title,
      content: content
    }
    setNoteList([addedNote, ...noteList])
  }
  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Title" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder="Content" required value={content} onChange={(e)=>setContent(e.target.value)}/>
        <button type="submit">Add note</button>
      </form>
      <NoteGrid notelist={noteList}/>
    </div>
  )
}

export default App;