"use strict";
const form = document.querySelector("#personal-info-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const phone = document.querySelector("#phone");
const input = document.querySelector(".input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  //Username
  if (userName.value.trim() == " ") {
    input.classList.add("error");
  }
  //Email
  //date
  //phone number
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  parent.classList.add("error");
}
