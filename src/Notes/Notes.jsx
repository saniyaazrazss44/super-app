import React, { useEffect, useState } from 'react'
import './Notes.css'

const Notes = () => {

    const [content, setContent] = useState('')

    useEffect(() => {
        const storedContent = localStorage.getItem('notesContent')
        if (storedContent) {
            setContent(storedContent)
        }
    }, [])

    const handleInputChange = (event) => {
        const newContent = event.target.value;
        setContent(newContent)
        localStorage.setItem('notesContent', newContent)
    }

    return (
        <div className='div_notes'>
            <h1>All notes</h1>
            <div className='notes-main'>
                <div className='notes'>
                    <div className="text-box">
                        <textarea value={content} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes