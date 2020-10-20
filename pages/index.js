import React from 'react'
import ReactDOM from 'react-dom'
import NoteCard from '../components/card/note-card'
import OptionCard from '../components/card/option-card'

function HomePage() {
    return(
        <div>
    <OptionCard></OptionCard>
    <NoteCard></NoteCard>
    </div>
    )
}
  
export default HomePage