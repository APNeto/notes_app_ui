import Note from '../../components/Note/Note'
import { PropsWithChildren } from 'react'

import { NoteList } from "../../types/NoteType"

type Props = {
    children?: React.ReactNode
};

function NoteGrid({ children }: Props) {
    return (
        <div className="notes-grid">
            {children}
        </div>
    )
}

export default NoteGrid