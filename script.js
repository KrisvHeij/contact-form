const textInputs = document.querySelectorAll(".input");
const radioInputs = document.querySelectorAll(".input-radio");
const checkInpout = document.querySelector(".input-checkbox");
const submitBtn = document.querySelector("button");

function handleFirstName() {
  const firstName = document.getElementById("firstName");
  if (firstName.value === "") {
    
  }
}




function handleSubmit() {
  handleFirstName();
}

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  handleSubmit();
})