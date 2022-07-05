"use strict";

const form = document.querySelector("#personal-info-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const phone = document.querySelector("#phone");
const input = document.querySelector(".input-group");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //USERNAME
  if (userName.value.trim() === "" || userName.value.trim().length < 3) {
    setError(userName);
  } else {
    setSuccess(userName);
  }

  //EMAIL
  if (email.value.trim().includes("@redberry.ge")) {
    setSuccess(email);
  } else {
    setError(email);
  }
});

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
