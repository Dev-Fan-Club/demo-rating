const mainContainer = document.querySelector(".rating")
const thanksContainer = document.querySelector(".thanks")
const ratedValueElement = document.querySelector(".rates");
const submitButton = document.getElementById("submit")

let rate = 0;

function getRating(){
  rate = document.getElementById('btn').innerText;
}

submitButton.addEventListener("click", () => {
  
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
  ratedValueElement.innerText = `You selected ${rate} out of 5`;
})

