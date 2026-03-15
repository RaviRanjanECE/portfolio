/* ================= MOBILE NAVBAR ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('.nav-links a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});

navLinks.classList.remove("active");

});

});


/* ================= DARK MODE ================= */

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

});


/* ================= TYPING EFFECT ================= */

const text = [
"Embedded Developer",
"IoT Engineer",
"Electronics Engineer",
"Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing-text").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1500);

}
else{

setTimeout(type,100);

}

}

type();


/* ================= SCROLL REVEAL ================= */

function reveal(){

const reveals = document.querySelectorAll("section");

for(let i = 0; i < reveals.length; i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].style.opacity = "1";
reveals[i].style.transform = "translateY(0px)";

}

}

}

window.addEventListener("scroll", reveal);


/* ================= GITHUB PROJECT FETCH ================= */

const githubContainer = document.getElementById("github-projects");

if(githubContainer){

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")

.then(response => response.json())

.then(data => {

data.slice(0,6).forEach(repo => {

const div = document.createElement("div");

div.classList.add("project-card");

div.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>
`;

githubContainer.appendChild(div);

});

});

}