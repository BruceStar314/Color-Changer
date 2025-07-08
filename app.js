let colorPicker = document.getElementById("colorPicker");
let applyColor = document.getElementById("applyColor");
let container = document.getElementById("container");

let index = 0;
let count = 0;
container.style.backgroundColor = "#fff";

applyColor.addEventListener("click", () => {
  container.style.backgroundColor = colorPicker.value;
  count++;
});

if (applyColor.value === "#000000") {
  applyColor.style.color = colorPicker.value;
  count++;
}

if (colorPicker.value === "#000000") {
  applyColor.style.color = "#fff";
} else {
  applyColor.style.color = "initial";
}
