import './LanguageButton.scss';

function LanguageButton({handleLanguageChange, languageToChange}) {
   return(
    <p onClick={handleLanguageChange}>{languageToChange}</p>
   )
}

export default LanguageButton