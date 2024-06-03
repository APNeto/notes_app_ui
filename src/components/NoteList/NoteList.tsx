import Note from '../../components/Note/Note'

import {Note as NoteType, NoteList} from "../../types/NoteType"

type Props = {
    notelist: NoteList;
};

function NoteGrid({notelist}: Props) {
    return (
        <div className="notes-grid">
            {notelist.map((note: NoteType) => {
                return <Note key={note.id} title={note.title} content={note.content} />
            })
            }
        </div>
    )
}

export default NoteGrid