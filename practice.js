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

// Manipulating Attributes
let img = document.querySelector("img");
console.dir(img);

//Manipulating Style (with style attribute)
let links = document.querySelectorAll(".box a");
for (link of links) {
  link.style.color = "purple";
}

// Class list
console.dir(img.classList.add("img"));
console.dir(img.classList.toggle("abc")); // if exist then remove if not exist then add
console.dir(img.classList.contains("img"));
console.dir(img.classList.remove("abc"));

// Navigation
let h4 = document.querySelector("h4");
console.dir(h4.parentElement);
console.dir(h4.children);
console.dir(box.children);
