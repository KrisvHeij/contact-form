const textInputs = document.querySelectorAll(".input");
const radioInputs = document.querySelectorAll(".input-radio");
const checkInpout = document.querySelector(".input-checkbox");
const submitBtn = document.querySelector("button");


function handleFirstName() {
  const firstName = document.getElementById("firstName");
  const error = document.querySelector(".error-first-name");
  const regex = /^[a-zA-Z]+$/;
  
  if (firstName.value === "" || !regex.test(firstName.value)) {
    error.removeAttribute("hidden");
    firstName.classList.add("error-border");
    console.log("false");
  } else {
    console.log("true")
  }
}

function handleLastName() {
  
}



function handleSubmit() {
  handleFirstName();
}

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  handleSubmit();
})