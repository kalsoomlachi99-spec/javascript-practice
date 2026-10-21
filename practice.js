// Get Element by id
console.dir(document.getElementById("mainImg"));

// Get Element by Class Name
console.dir(document.getElementsByClassName("images"));

// Get Element by tag name
console.dir(document.getElementsByTagName("h1"));

// Querry Seletor

console.dir(document.querySelector("div a")); // first a inside div
console.dir(document.querySelectorAll("div a")); // all a inside div

// Setting content in objects
let heading = document.querySelector("h1");
heading.innerHTML = `<u> ${heading.innerText}</U>`;
