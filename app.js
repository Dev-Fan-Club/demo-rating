const mainContainer = document.querySelector(".rating")
const thanksContainer = document.querySelector(".thanks")

const submitButton = document.getElementById("submit")




submitButton.addEventListener("click", () => {
  
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})