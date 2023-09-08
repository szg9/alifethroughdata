import { useState } from 'react';

import articles from './db/articles.json';

import './App.scss';
import Header from './Header';
import Section from './Section';
import Gallery from './Gallery';
import FramedArea from './FramedArea';
import Map from './Map';
import JournalEntry from './JournalEntry';
import Image from './Image';
import Footer from './Footer';

function App() {

    const [language, setLanguage] = useState({
        languageToChange: "EN",
        actualLanguage: "HU"

    })

    function handleLanguageChange(e) {
        setLanguage({
            languageToChange: language.actualLanguage,
            actualLanguage: e.target.textContent

        });
        console.log(language.actualLanguage)
    }

    const title = articles["0001"][language.actualLanguage]["header"]["title"];
    const subTitle = articles["0001"][language.actualLanguage]["header"]["subTitle"];
    const details = articles["0001"][language.actualLanguage]["header"]["details"];
    const readingTime = articles["0001"][language.actualLanguage]["header"]["readingTime"];
    const section1 = {
        sectionTitle: articles["0001"][language.actualLanguage]["section1"]["sectionTitle"],
        sectionSubTitle: articles["0001"][language.actualLanguage]["section1"]["sectionSubTitle"],
        sectionText: articles["0001"][language.actualLanguage]["section1"]["sectionText"]
    };
    const section2 = {
        sectionText: articles["0001"][language.actualLanguage]["section2"]["sectionText"]
    };
    const framedArea1 = {
        framedText: articles["0001"][language.actualLanguage]["framedArea1"]["framedText"]
    };
    const section3 = {
        sectionText: articles["0001"][language.actualLanguage]["section3"]["sectionText"]
    };
    const section4 = {
        sectionText: articles["0001"][language.actualLanguage]["section4"]["sectionText"]
    };
    const section5 = {
        sectionText: articles["0001"][language.actualLanguage]["section5"]["sectionText"]
    };
    const framedArea2 = {
        framedTitle: articles["0001"][language.actualLanguage]["framedArea2"]["framedTitle"],
        framedText: articles["0001"][language.actualLanguage]["framedArea2"]["framedText"]
    };
    const section6 = {
        sectionText: articles["0001"][language.actualLanguage]["section6"]["sectionText"]
    };
    const section7 = {
        sectionText: articles["0001"][language.actualLanguage]["section7"]["sectionText"]
    };
    const journalEntry = articles["0001"][language.actualLanguage]["journalEntry1"]["journalText"];
    const section8 = {
        sectionText: articles["0001"][language.actualLanguage]["section8"]["sectionText"]
    };
    const section9 = {
        sectionText: articles["0001"][language.actualLanguage]["section9"]["sectionText"]
    };
    const galleryId1 = articles["0001"][language.actualLanguage]["flourishEmded1"]["id"];
    const galleryId2 = articles["0001"][language.actualLanguage]["flourishEmded3"]["id"];
    const mapId = articles["0001"][language.actualLanguage]["flourishEmded2"]["id"];

    return (
        <div className='app-container'>
            <Header title={title} subTitle={subTitle} details={details} readingTime={readingTime} language={language.actualLanguage} languageToChange={language.languageToChange} handleLanguageChange={handleLanguageChange} />
            <Section title={section1.sectionTitle} subTitle={section1.sectionSubTitle} text={section1.sectionText} />
            <Section text={section2.sectionText} />
            <Gallery id={galleryId1} />
            <FramedArea text={framedArea1.framedText} />
            <Section text={section3.sectionText} />
            <Map id={mapId} />
            <Section text={section4.sectionText} />
            <Section text={section5.sectionText} />
            <FramedArea title={framedArea2.framedTitle} text={framedArea2.framedText} />
            <Section text={section6.sectionText} />
            <Gallery id={galleryId2} />
            <Section text={section7.sectionText} />
            <JournalEntry text={journalEntry} language={language.actualLanguage} />
            <Section text={section8.sectionText} />
            <Image />
            <Section text={section9.sectionText} />
            <Footer language={language.actualLanguage} />
        </div>
    )
}

export default App