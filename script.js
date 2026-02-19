// const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const radioInputs = document.querySelectorAll(".input-radio");
const message = document.getElementById("message");
const checkbox = document.getElementById("consent");

// function showError(error) {
//   error.removeAttribute("hidden");
//   error.ariaHidden = "false";
//   error.setAttribute("aria-live", "polite");
// }

function isValidFirstName(value) {
  const regex = /^[a-zA-Z]+$/;

  return value !== "" && regex.test(value);
}

function updateTextInput(input, error, valid) {
  if (!valid) {
    input.classList.add("error-border");
    error.removeAttribute("hidden");
  } else {
    input.classList.remove("error-border");
    error.setAttribute("hidden", "");
  }
}

function handleFirstName() {
  const firstName = document.getElementById("firstName");
  const error = document.getElementById("error-first-name");
  // const regex = /^[a-zA-Z]+$/;
  
  // if (firstName.value === "" || !regex.test(firstName.value)) {
  //   showError(error);
  //   firstName.classList.add("error-border");
  //   console.log("firstName false");
  //   return false
  // } else {
  //   console.log("firstName true");
  //   return true;
  // }

  const valid = isValidFirstName(firstName.value);

  updateTextInput(firstName, error, valid);

  return valid;
}

function handleLastName() {
  const error = document.querySelector(".error-last-name");
  const regex = /^[a-zA-Z ]+$/;

  if (lastName.value === "" || !regex.test(lastName.value)) {
    showError(error);
    lastName.classList.add("error-border");
    console.log("lastName false")
    return false;
  } else {
    console.log("lastName true");
    return true;
  }
}

function handleEmail() {
  const error = document.querySelector(".error-email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (email.value === "" || !regex.test(email.value)) {
    showError(error);
    email.classList.add("error-border");
    console.log("email false");
    return false;
  } else {
    console.log("email true");
    return true;
  }
}

function handleQuery() {
  const error = document.querySelector(".error-query");
  const radioInputsArray = [...radioInputs];

   if(!radioInputsArray.some(input => input.checked)) {
    showError(error);
    console.log("query false");
    return false;
   } else {
    console.log("query true");
    return true;
   }
}

function handleMessage() {
  const error = document.querySelector(".error-text-message");

  if (message.value === "") {
    showError(error);
    message.classList.add("error-border");
    console.log("message false");
    return false;
  } else {
    console.log("message true");
    return true;
  }
}

function handleConsent() {
  const error = document.querySelector(".error-consent");

  if (!checkbox.checked) {
    showError(error);
    console.log("consent false");
    return false;
  } else {
    console.log("consent true");
    return true;
  }
}

function handleSubmit() {
  handleFirstName();
  // handleLastName();
  // handleEmail();
  // handleQuery();
  // handleMessage();
  // handleConsent();

  // const validators = [handleFirstName, handleLastName, handleEmail, handleQuery, handleMessage, handleConsent];

  // const results = validators.map(validator => validator());

  // const result = results.every(Boolean);
  // console.log(result);
  // if (result) {
  //   form.submit();
  // }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});