// DOM Elements
const ratingsElement = document.querySelectorAll(".rating");
const submitButtonElement = document.getElementById("submit-btn");

// Global Variables
let value = null;

// Event Listners
ratingsElement.forEach((rating) => {
    rating.addEventListener("click", () => {
        ratingHandler(rating);
    });
});

submitButtonElement.addEventListener("click", () => {
    console.log(value);
});

// Functions
// Clears previously selected rating
function clearPreviousRating(currentRating) {
    ratingsElement.forEach((rating) => {
        if (rating.innerText !== currentRating) {
            rating.style.backgroundColor = "#272e38";
            rating.style.color = "#6e7480";
        }
    });
}

// Handles the rate buttons
function ratingHandler(rating) {
    value = rating.innerText;
    rating.style.backgroundColor = "#fa7614";
    rating.style.color = "#fff";

    // Clear previous rating, if selected
    clearPreviousRating(value);
}
