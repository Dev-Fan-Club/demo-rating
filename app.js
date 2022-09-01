const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")

const submitButton = document.getElementById("submit")




submitButton.addEventListener("click", () => {
  
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})