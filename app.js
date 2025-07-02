let btnNext = document.getElementById("btn-next");
let letters = document.getElementById("letters");

const colors = ["red", "green", "blue", "yellow", "pink", "orange"];
const lettersArr = ["R", "G", "B", "Y", "P", "O"];

let index = 0;
let count = 0;

btnNext.addEventListener("click", () => {
  index++;
  if (index >= colors.length) {
    index = 0;
  }
  document.body.style.backgroundColor = colors[index];
  letters.textContent = lettersArr[index];
  count++;
  console.log("You are on the color: " + colors[index]);
});
