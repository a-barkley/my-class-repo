var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var info = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  // TODO: Create user object from submission
  localStorage.setItem("infoStringify", JSON.stringify(info));
  localStorage.setItem("infoLog", info);
  // TODO: Set new submission to local s
  
});
