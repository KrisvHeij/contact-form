const textInputs = document.querySelectorAll(".input");
const radioInputs = document.querySelectorAll(".input-radio");
const checkInpout = document.querySelector(".input-checkbox");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < textInputs.length; i++) {
    console.log(textInputs[i].value);
  }

  for (let i = 0; i < radioInputs.length; i++) {
    console.log(radioInputs[i].value);
  }
  
  console.log(`${checkInpout.checked ? "check" : "not checked"}`);
})