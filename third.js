//GET REQUEST

const form = document.querySelector(".chess-experience-form");
const knowledgeLevel = document.querySelector("#level");
const radioBtn = document.querySelector("#radio");
const character = document.querySelector("#character");
const modal = document.querySelector(".modal-window");

fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata);
    let data1;

    let data = ` <option value="">Choose your character*</option>
    <option id="option1" value="${completedata[0].id}">${completedata[0].name}</option>
    <option value="${completedata[1].id}">${completedata[1].name}</option>
    <option value="${completedata[2].id}">${completedata[2].name}</option>
    <option value="${completedata[3].id}">${completedata[3].name}</option>
    `;

    document.getElementById("option1").innerHTML = data;
  });

//POST REQUEST

//1. Select elements from first page
const params = new URLSearchParams(window.location.search);

console.log(params);

let values = [];
let keys = [];
params.forEach((value, key) => {
  keys.push(key);
  values.push(value);
});

console.log(keys);
console.log(values);

console.log(localStorage);

//SENDING DATA TO AN API

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = new FormData(form);
  console.log([...payload]);

  fetch("http://localhost:4444/api/register", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

function validation() {
  //VALIDATION
  if (
    knowledgeLevel.value == "" ||
    radioBtn.value == "" ||
    character.value == " "
  ) {
    console.log("error");
    modal.classList.remove("hidden");
  } else {
    window.open("final.html");
  }
}
