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
    console.log("firstName false");
  } else {
    console.log("firstName true");
  }
}

function handleLastName() {
  const lastName = document.getElementById("lastName");
  const error = document.querySelector(".error-last-name");
  const regex = /^[a-zA-Z ]+$/;

  if (lastName.value === "" || !regex.test(lastName.value)) {
    error.removeAttribute("hidden");
    lastName.classList.add("error-border");
    console.log("lastName false")
  } else {
    console.log("lastName true");
  }
}

function handleEmail() {
  const email = document.getElementById("email");
  const error = document.querySelector(".error-email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (email.value === "" || !regex.test(email.value)) {
    error.removeAttribute("hidden");
    email.classList.add("error-border");
    console.log("email false");
  } else {
    console.log("email true");
  }
}

function handleQuery() {
  const radioInputs = document.querySelectorAll(".input-radio");
  const error = document.querySelector(".error-query");
  const radioInputsArray = [...radioInputs];

   if(!radioInputsArray.some(input => input.checked)) {
    error.removeAttribute("hidden");
    console.log("query false");
   } else {
    console.log("query true");
   }
}

function handleSubmit() {
  handleFirstName();
  handleLastName();
  handleEmail();
  handleQuery();
}

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  handleSubmit();
});