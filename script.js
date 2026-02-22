// const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

// Show submit message
function showSubmitMessage() {
  const successMessage = document.querySelector(".success-outer");
  successMessage.removeAttribute("hidden");
}

// Remove submit message
function removeSubmitMessage() {
  const successMessage = document.querySelector(".success-outer");
  successMessage.setAttribute("hidden", "");
}

// UI functions
function updateTextInput(input, error, valid) {
  if (!valid) {
    input.classList.add("error-border");
    error.removeAttribute("hidden");
  } else {
    input.classList.remove("error-border");
    error.setAttribute("hidden", "");
  }
}

function updateInput(error, valid) {
  if (!valid) {
    error.removeAttribute("hidden");
  } else {
    error.setAttribute("hidden", "");
  }
}

// Validate functions
function isValidFirstName(value) {
  const regex = /^[a-zA-Z]+$/;
  return value !== "" && regex.test(value);
}

function isValidLastName(value) {
  const regex = /^[a-zA-Z ]+$/;
  return value != "" && regex.test(value);
}

function isValidEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return value != "" && regex.test(value);
}

function isValidQuery(array) {
  return array.some(input => input.checked);
} 

function isValidMessage(value) {
  return value != "";
}

function isValidConsent(input) {
  return input.checked;
}

// Handle & update functions
function handleFirstName() {
  const firstName = document.getElementById("firstName");
  const error = document.getElementById("error-first-name");
  const valid = isValidFirstName(firstName.value);

  updateTextInput(firstName, error, valid);

  return {
    valid: valid,
    input: firstName
  };
}

function handleLastName() {
  const lastName = document.getElementById("lastName");
  const error = document.getElementById("error-last-name");
  const valid = isValidLastName(lastName.value);

  updateTextInput(lastName, error, valid);

  return {
    valid: valid,
    input: lastName
  };
}

function handleEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("error-email");
  const valid = isValidEmail(email.value);

  updateTextInput(email, error, valid);

  return {
    valid: valid,
    input: email
  };
}

function handleQuery() {
  const radioInputs = document.querySelectorAll(".input-radio");
  const error = document.getElementById("error-query");
  const radioInputsArray = [...radioInputs];
  const valid = isValidQuery(radioInputsArray);
  
  updateInput(error, valid);

  return {
    valid: valid,
    input: radioInputsArray
  };
}

function handleMessage() {
  const message = document.getElementById("message");
  const error = document.getElementById("error-text-message");
  const valid = isValidMessage(message.value);

  updateTextInput(message, error, valid);

  return {
    valid: valid,
    input: message
  };
}

function handleConsent() {
  const checkbox = document.getElementById("consent");
  const error = document.getElementById("error-consent");
  const valid = isValidConsent(checkbox);

  updateInput(error, valid);

  return {
    valid: valid,
    input: checkbox
  };
}

function handleSubmit() {
  // handleFirstName();
  // handleLastName();
  // handleEmail();
  // handleQuery();
  // handleMessage();
  // handleConsent();

  const validators = [handleFirstName, handleLastName, handleEmail, handleQuery, handleMessage, handleConsent];

  let firstInvalidInput = null;
  let isValid = true;

  validators.forEach((validator) => {
    const result = validator();

    if (!result.valid && !firstInvalidInput) {
      firstInvalidInput = result.input;
      isValid = false;
    }
  })

  if (!isValid) {
    firstInvalidInput.focus();
  }
  
  if (isValid) {
    form.reset();
    showSubmitMessage();

    setTimeout(() => {
      removeSubmitMessage();
    }, 3000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSubmit();
});