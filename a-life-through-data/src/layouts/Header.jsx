import LanguageButton from '../components/LanguageButton';

import './Header.scss';
import clock from '../assets/clock-outline.svg'
import downArrow from '../assets/down-arrow.svg'
import { useState, useEffect } from 'react';

function Header({ headerTitle, headerSubTitle, headerDetails, headerReadingTime, headerBackground, language, handleLanguageChange, languageToChange }) {

  const [actualLanguage, setActualLanguage] = useState(language);

  useEffect(() => {
    setActualLanguage(language);
  });

  return (
    <div className="hero-container" style={{ backgroundImage: 'url(' + headerBackground + ')' }}>
      <nav className='navbar'>
        <LanguageButton handleLanguageChange={handleLanguageChange} languageToChange={languageToChange} />
      </nav>
      <header className='header'>
        <div className='header-title'>
          <h1>{headerTitle}</h1>
          <h2>{headerSubTitle}</h2>
        </div>
        <div className='header-details'>
          <h4>{headerDetails}</h4>
          <div className='reading-time'>
            <img src={clock} alt="Olvasási idő" className='clock-img' />
            <h4>{headerReadingTime}{actualLanguage === "EN" ? " minutes" : " perc"}</h4>
          </div>
          <div>
            <img src={downArrow} alt="down-arrow" className='down-arrow-img' />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
