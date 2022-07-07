//GET REQUEST

fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata);
    let data1 = "";

    completedata.map((values) => {
      data1 = `<option id="list" value="0">${values.name}</option>
    `;
    });

    document.getElementById("list").innerHTML = data1;
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
