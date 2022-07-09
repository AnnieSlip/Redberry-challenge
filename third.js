//GET REQUEST

const form = document.querySelector(".chess-experience-form");
const knowledgeLevel = document.querySelector("#level");
const radioBtn = document.querySelector("#radio");
const character = document.querySelector("#character");
const modal = document.querySelector(".modal-window");
const num = document.querySelector("#second-num");

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

//Form Validation
function validation() {
  if (
    knowledgeLevel.value.trim() == "" ||
    radioBtn.value.trim() == "" ||
    character.value.trim() == ""
  ) {
    modal.classList.remove("hidden");
  } else {
    location.href = "final.html";
  }
}

//SENDING DATA TO AN API

form.addEventListener("submit", (e) => {
  let [name, email, phone, date] = values;
  const level = knowledgeLevel.value;
  const id = character.value;
  const participated = radioBtn.value;

  //FETCH METHOD

  fetch("https://chess-tournament-api.devtest.ge/api/register", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      date_of_birth: date,
      experience_level: level,
      already_participated: participated,
      character_id: id,
    }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  if (
    knowledgeLevel.value.trim() !== "" &&
    radioBtn.value.trim() !== "" &&
    character.value.trim() !== ""
  ) {
    form.submit();
  } else {
    e.preventDefault();
  }
});
