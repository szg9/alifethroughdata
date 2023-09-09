import { useState } from 'react';
import React from "react";

import articles from './data/articles2.json';

import './App.scss';
import Header from './layouts/Header';
import Section from './layouts/Section';
import Gallery from './components/Gallery';
import FramedArea from './layouts/FramedArea';
import Map from './components/Map';
import JournalEntry from './layouts/JournalEntry';
import Image from './components/Image';
import Footer from './layouts/Footer';

function App2() {

    const [language, setLanguage] = useState({
        languageToChange: "EN",
        actualLanguage: "HU"

    })

    function handleLanguageChange(e) {
        setLanguage({
            languageToChange: language.actualLanguage,
            actualLanguage: e.target.textContent

        });
    }

    const KeysToComponentMap = {
        header: Header,
        section: Section,
        gallery: Gallery,
        framedArea: FramedArea,
        map: Map,
        journalEntry: JournalEntry,
        image: Image
    };

    function renderer(config) {
        if (typeof KeysToComponentMap[config.component] !== "undefined") {
            return React.createElement(
                KeysToComponentMap[config.component],
                {
                    language: language.actualLanguage,
                    languageToChange: language.languageToChange,
                    handleLanguageChange: handleLanguageChange,
                    headerTitle: config.headerTitle,
                    headerSubTitle: config.headerSubTitle,
                    headerDetails: config.headerDetails,
                    headerReadingTime: config.headerReadingTime,
                    sectionTitle: config.sectionTitle,
                    sectionSubTitle: config.sectionSubTitle,
                    sectionText: config.sectionText,
                    id: config.id,
                    framedTitle: config.framedTitle,
                    framedText: config.framedText,
                    journalDate: config.journalDate,
                    journalText: config.journalText,
                    src: config.src
                }
            );
        }
    }

    return (
        <div className='app-container'>
            {articles["W-0001"][language.actualLanguage].map(config => renderer(config))}
        </div>
    )
}

export default App2