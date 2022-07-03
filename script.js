"use strict";

const startBtn = document.querySelector(".button");
const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");

startBtn.addEventListener("click", function () {
  page1.style.opacity = 0;
  page2.classList.remove("hidden");
});
