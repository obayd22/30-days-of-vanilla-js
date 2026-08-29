const RANDOM_QUOTE_API_URL = 'https://dummyjson.com/quotes/random'
const quoteDisplay = document.getElementById('quote-display')
const quoteInput = document.getElementById('quote-input')
const timer = document.getElementById('timer')

quoteInput.addEventListener('input', () => {
    const arrayQuote = quoteDisplay.querySelectorAll('span');
    const arrayValue = quoteInput.value.split("");
    let correct = true;
    arrayQuote.forEach((charSpan, index) => {
        const char = arrayValue[index]
        if (char == null) {
            charSpan.classList.remove("correct")
            charSpan.classList.remove("incorrect")
            correct = false
        } else if (char === charSpan.innerText ){
            charSpan.classList.add("correct")
            charSpan.classList.remove("incorrect")  
        } else {
            charSpan.classList.remove("correct")
            charSpan.classList.add("incorrect")  
            correct = false
        }
    })
    if(correct) renderNewQuote()

})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.quote)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplay.innerHTML = "";
    quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quoteDisplay.appendChild(charSpan)

    });
    quoteInput.value = null
    startTimer()
}

let startTime;

function startTimer() {
    timer.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()