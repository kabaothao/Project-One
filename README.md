# Project-One

> Outline a brief description of your project.
> Live demo [_here_](https://kabaothao.github.io/Project-One/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- To retreive Rick and Morty data for characters, genders, and status.

- What is the purpose of your project?
  To access to third-party APIs and functionality.
- Why did you undertake it?
  To incorporate third-party APIs and local storage.

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- HTML5
- CSS
- Javascript
- Visual Studio

## Features

- Bootstraps
- Font Awesome
- Google Fonts

## Screenshots

# ![Example screenshot](https://github.com/kabaothao/Project-One/blob/main/Assets/imagedesktop.PNG)

# ![Example screenshot](https://github.com/kabaothao/Project-One/blob/main/Assets/picone.PNG)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

- The URL of the deployed application.
- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Usage

How does one go about using it?

- To search a character name, gender, and status. 

For example:

let search = function (isNewSearch) {
isNewSearch ? (page = 1) : null;
let name = document.getElementById("name").value;
let status = document.getElementById("status").value;
let gender = document.getElementById("gender").value;
let characterUrl = `https://rickandmortyapi.com/api/character/?name= ${name}&status=${status}&gender=${gender}&page=${page}`;

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

## Acknowledgements

Give credit here.

- This project was inspired by Trilogy Education.
- Many thanks to Trilogy Education.

## Contact

Created by [@kabaothao](https://github.com/kabaothao) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
