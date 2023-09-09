import './JournalEntry.scss';
import { useState, useEffect } from 'react';

function JournalEntry({ journalText, journalDate, language }) {

    const [actualLanguage, setActualLanguage] = useState(language);

    useEffect(() => {
        setActualLanguage(language);
    })

    return (
        <section className="journal-entry">
            <div className='journal-watermark'>
                <p>{actualLanguage === "EN" ? "EXCERPT FROM MY DIARY" : "RÉSZLET A NAPLÓMBÓL"}</p>
            </div>
            <p className='journal-date'>{journalDate}</p>
            <p className='journal-text'>{journalText}</p>
        </section>
    )
}

export default JournalEntry