let navImage = document.querySelector(".navImg");
let navImage2 = document.querySelector(".navImg2");
let navMobile = document.querySelector(".navMobileSection");
let navAbout = document.querySelector(".about");
let display = document.querySelector(".display");
let navItemMobile = document.querySelectorAll(".display a");
let nava = document.querySelectorAll(".nav a");
let a = document.querySelector("a");
let img = document.querySelectorAll(".navMobile img");

let navItemMobileArray = Array.from(navItemMobile);


navMobile.addEventListener("click", () => {
navImage.classList.toggle("hide");
navImage2.classList.toggle("hide");

});

navImage.addEventListener("click", () => {
    display.classList.add("expand")
    
})

navImage2.addEventListener("click", () => {
    display.classList.remove("expand")
    
})



