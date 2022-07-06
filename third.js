fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata);
    let data1 = "";
    completedata.map((values) => {
      data1 = ``;
    });
  })
  .catch((err) => {
    console.log(err);
  });
