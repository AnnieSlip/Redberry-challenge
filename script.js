"use strict";

//SELECTING OF ELEMENTS
const form = document.querySelector("#personal-info-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const phone = document.querySelector("#phone");
const input = document.querySelector(".input-group");
const modal = document.querySelector(".first");
const modalSecond = document.querySelector(".second");
const number1 = document.querySelector(".num-1");
const modalBtn1 = document.getElementById("first-btn");
const modalBtn2 = document.getElementById("second-btn");

//---VALIDATION OF PERSONAL INFORMATION---
form.addEventListener("submit", (event) => {
  //USERNAME
  if (userName.value.trim() === "" || userName.value.trim().length < 3) {
    setError(userName);
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
    setSuccess(userName);
  }

  //EMAIL
  if (isEmailValid(email.value)) {
    setSuccess(email);
    modalSecond.classList.add("hidden");
  } else {
    setError(email);
    modalSecond.classList.remove("hidden");
  }

  //phone
  if (phone.value.trim().length === 9 && isPhoneValid(phone.value)) {
    setSuccess(phone);
  } else {
    setError(phone);
  }

  //date
  if (date.value.trim() === "") {
    setError(date);
  } else {
    setSuccess(date);
  }

  if (isFormValid() == true) {
    form.submit();
    window.localStorage.clear();
    number1.classList.add("checked");
    number1.textContent = check;
  } else {
    event.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".input-group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function setError(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const string = email;
  const substring = "@redberry.ge";

  if (string.includes(substring)) {
    return true;
  } else {
    return false;
  }
}

function isPhoneValid(phone) {
  return /^[0-9]+$/.test(phone);
}

//---END OF VALIDATION OF PERSONAL INFORMATION---

//Prevent Refreshing
console.log(localStorage);

email.addEventListener("keyup", display);
userName.addEventListener("keyup", display);
phone.addEventListener("keyup", display);
date.addEventListener("keyup", display);

function display() {
  localStorage.setItem("name", userName.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("date", date.value);
  localStorage.setItem("email", email.value);
}

userName.value = localStorage.getItem("name");
phone.value = localStorage.getItem("phone");
date.value = localStorage.getItem("date");
email.value = localStorage.getItem("email");

const btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  localStorage.clear();
});

modalBtn1.addEventListener("click", function () {
  modal.classList.add("hidden");
});

modalBtn2.addEventListener("click", function () {
  modalSecond.classList.add("hidden");
});
