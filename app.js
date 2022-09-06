const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")

const submitButton = document.getElementById("submit-rating")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")



submitButton.addEventListener("click", () => {
  
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
  
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

