const textInputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < 4; i++) {
    console.log(textInputs[i].value);
  }
})