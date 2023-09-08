import { useState, useEffect } from "react";
import './Footer.scss';

function Footer({ language }) {

    const [actualLanguage, setActualLanguage] = useState(language);

    useEffect(() => {
        setActualLanguage(language);
    })

    return (
        <footer className="footer">
            <p>{actualLanguage === "EN" ? "Footer is coming soon. And navbar too And home page too." : "Lesz majd footer is. Meg navbar is. Meg főoldal is. Valamikor."}</p>
        </footer>
    )
}

export default Footer