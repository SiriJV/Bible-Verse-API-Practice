import './style.css'

const bibleAPIURL = "https://bible-api.com/data/web/random/MAT,MRK,LUK,JHN";


async function fetchRandomBibleVerse(): Promise<void> {
    const response = await fetch(bibleAPIURL);
    const data = await response.json();


    const verse = data.random_verse;
    const verseElement = document.getElementById('verse');


    if (verseElement && verse.text && verse.book && verse.chapter && verse.verse) {
        verseElement.textContent = `${verse.text} - ${verse.book} ${verse.chapter}:${verse.verse}`;
    } else if (verseElement) {
        verseElement.textContent = "ngt är feeeel. dumbo!";
    }
}


const buttonElement = document.getElementById('generateVerseButton');
if (buttonElement) {
    buttonElement.addEventListener('click', fetchRandomBibleVerse);
}


fetchRandomBibleVerse();


