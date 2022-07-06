fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata);
    let data1 = "";

    completedata.map((values) => {
      console.log(values);
      data1 = `
      <option class="grandmaster" value="0">${values.name} <img src=${values.image} alt="img" class="grandmasters-img"></option>`;
    });
    document.querySelector(".grandmaster").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
