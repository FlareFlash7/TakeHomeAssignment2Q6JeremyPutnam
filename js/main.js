//list of quotes 
const quotes = [
    "A rose by any other name would smell as sweet. — William Shakespeare",
    "All that glitters is not gold. — 	William Shakespeare",
    "All the world’s a stage, and all the men and women merely players. — 	William Shakespeare",
    "Elementary, my dear Watson. — 	Sherlock Holmes",
    "Genius is one percent inspiration and ninety-nine percent perspiration. — Thomas Edison",
    "I'll be back. — Terminator",
    "I've got a feeling we're not in Kansas anymore. — Dorothy",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
    "May the Force be with you. — Star Wars ",
    "Not all those who wander are lost. — J. R. R. Tolkein"
];

// Get HTML elements
const btn = document.getElementById("quoteBtn");
const display = document.getElementById("quoteDisplay");

//code for when the button is pressed
btn.addEventListener("click", function () {
    // Picks a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the quote on the webpage
    display.textContent = quotes[randomIndex];
});
