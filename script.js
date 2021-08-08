let page = 1;
let totalPages;

let search = function (isNewSearch) {
  isNewSearch ? (page = 1) : null;
  let name = document.getElementById("name").value;
  let status = document.getElementById("status").value;
  let gender = document.getElementById("gender").value;
  let characterUrl = `https://rickandmortyapi.com/api/character/?name=
${name}&status=${status}&gender=${gender}&page=${page}`;

  fetch(characterUrl)
    // fetch request gets a list of all the characters
    .then(function (response) {
      //gets response ready
      return response.json();
    })
    .then(function (data) {
      //‘response’ is ready and is available as ‘data’.
      console.log(data);
      loadContent(data);
      //add a new field to data called currentPage
      data.currentPage = page;
      window.localStorage.setItem("info", JSON.stringify(data));
    });
};

let previousPage = function () {
  if (page > 1) {
    page--;
    search(false);
  }
};

let nextPage = function () {
  if (page < totalPages) {
    page++;
    search(false);
  }
};

let loadContent = function (data) {
  document.getElementById("info").innerHTML = "";
  for (let i = 0; i < data.results.length; i++) {
    document.getElementById("info").innerHTML += `
      <div class="container col-md-6">
      <div class="row">
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

  if (data.info.pages > 1) {
    totalPages = data.info.pages;
    document.getElementById("pagingSection").innerHTML = `    
    <button type="button" class="btn btn-primary" onclick="previousPage()">Previous</button>
    <span>Page ${page} of ${totalPages}</span>
    <button type="button" class="btn btn-primary" onclick="nextPage()">Next</button>`;
  }
};

if (window.localStorage.getItem("info")) {
  let data = JSON.parse(window.localStorage.getItem("info"));
  //setting page to what you store in your localstorage.
  page = data.currentPage;
  loadContent(data);
}
