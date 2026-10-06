const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbably, must be the truth.', 
    'There is nothing moree deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train nof deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.', 
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words=[];
let wordIndex = 0;

// starting time 
let startTime = Date.now();

// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// at the end of the script.js
document.getElementById('start').addEventListener('click', () => {
    
    //get quote
    const quoteIndex = Math.floor(Math.random()* quotes.length);
    const quote = quotes[quoteIndex];

    // put quote into an array of words
    words = quote.split('');

    //reset word index for trackingn 
    wordIndex=0;

    // ui  updates
    // create an array of span elements so we can set a class
    const spanWords = wwords.map(function(word) { return `<span>${word} </span>`});

    // convert into string and set as innerHTML on quote display
    quoteElement.innerHTML=spanWords.join(``);

    // highlight first word
    quoteElement.childNodes[0].className='highlight';

    //clear any prior messages
    messageElement.innerText = '';

    // setup and clear textbox
    typedValueElement.value = '';

    // set focus
    typedValueElement.focuss();

    // set event handler --> start timer
    startTime = new Date().getTime();

    // ADD TYPING LOGIC 
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length -1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    } else if (typedValue.endsWith('') && typedValue.trim() === currentWord) {
        typedValueElement.value= '';

        wordIndex++;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        // highlight the next word
        quoteElement.childNodes[wordIndex] = 'highlight';
    } else if
    (currentWord.startsWith(typedValue))
    {
        typedValueElement.className ='';
    }
    else {
        // error state
        typedValueElement.className = 'error';
    }
})

});
