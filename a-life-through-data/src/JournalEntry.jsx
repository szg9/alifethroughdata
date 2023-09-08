import './JournalEntry.scss';
import { useState, useEffect } from 'react';

function JournalEntry({ text, language }) {

    const [actualLanguage, setActualLanguage] = useState(language);

    useEffect(() => {
        setActualLanguage(language);
    })

    return (
        <section className="journal-entry">
            <div className='journal-watermark'>
                <p>{actualLanguage === "EN" ? "EXCERPT FROM MY DIARY" : "RÉSZLET A NAPLÓMBÓL"}</p>
            </div>
            <p className='journal-text'>{text}</p>
        </section>
    )
}

export default JournalEntry