import React from 'react'
type Prop = {
    // id: number;
    title: string;
    content: string;
    onNoteClick: () => void;
    onDeleteClick: () => void;
}

function Note({ title, content, onNoteClick, onDeleteClick} : Prop) {
    return (
        <div className="note-item" onClick={onNoteClick}>
            <div className="note-header">
                <button onClick={onDeleteClick}>x</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Note
