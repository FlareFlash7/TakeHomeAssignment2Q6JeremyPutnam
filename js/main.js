// ---------------------------------------------------------
// Static list of 10 famous quotes (stored locally in JS)
// ---------------------------------------------------------
const quotes = [
    "The only thing we have to fear is fear itself. — Franklin D. Roosevelt",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Success is not final, failure is not fatal. — Winston Churchill",
    "Be the change that you wish to see in the world. — Mahatma Gandhi",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "Happiness depends upon ourselves. — Aristotle",
    "What you do speaks so loudly that I cannot hear what you say. — Ralph Waldo Emerson",
    "The future belongs to those who prepare for it today. — Malcolm X",
    "It always seems impossible until it’s done. — Nelson Mandela"
];

// Get HTML elements
const btn = document.getElementById("quoteBtn");
const display = document.getElementById("quoteDisplay");

// ---------------------------------------------------------
// Event listener for left-click on the button
// ---------------------------------------------------------
btn.addEventListener("click", function () {
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the quote dynamically on the webpage
    display.textContent = quotes[randomIndex];
});
