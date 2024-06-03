type Prop = {
    title: string,
    content: string
}

function Note({title, content} : Prop) {
    return (
        <div className="note-item">
            <div className="note-header">
                <button>x</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Note
