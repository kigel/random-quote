const btn = document.querySelector('.quote-btn')
const block = document.querySelector('.quote-block')

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    block.textContent = data.content;
}

btn.addEventListener('click', randomQuote);

randomQuote();