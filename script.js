let search = function () {
  let name = document.getElementById("name").value;
  let status = document.getElementById("status").value;
  let gender = document.getElementById("gender").value;
  let characterUrl = `https://rickandmortyapi.com/api/character/?name=
${name}&status=${status}&gender=${gender}`;

  fetch(characterUrl)
    // fetch request gets a list of all the characters
    .then(function (response) {
      //gets response ready
      return response.json();
    })
    .then(function (data) {
      //‘response’ is ready and is available as ‘data’.
      console.log(data);
      document.getElementById("info").innerHTML = "";
      for (let i = 0; i < data.results.length; i++) {
        document.getElementById("info").innerHTML += `
      <div class="container row">
        <div class="col-5">
          <img class="img-responsive" src="${data.results[i].image}" alt="">
        </div>
        <div class="col-7">
          <div>Name: ${data.results[i].name}</div>
          <div>Status: ${data.results[i].status}</div>
          <div>Gender: ${data.results[i].gender}</div>
        </div>
      </div>`;
      }
    });
};
