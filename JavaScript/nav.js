let navImage = document.querySelector(".navImg");
let navImage2 = document.querySelector(".navImg2");
let navMobile = document.querySelector(".navMobileSection");
let navAbout = document.querySelector(".about");
let display = document.querySelector(".display");
let navItemMobile = document.querySelectorAll(".display a");
let nava = document.querySelectorAll(".nav a");
let a = document.querySelectorAll(".navMobile a");
let img = document.querySelectorAll(".navMobile img");
const navBar = document.querySelector(".nav");
const aboutSection = document.querySelector(".aboutSection")
const topSection = document.querySelector(".top");
const projectSection = document.querySelector("#projects")
const arrow = document.querySelector(".arrow")
const arrowSmall = document.querySelector(".arrowSmall")

let navItemMobileArray = Array.from(navItemMobile);


navMobile.addEventListener("click", () => {
navImage.classList.toggle("hide");
navImage2.classList.toggle("hide");

});

navImage.addEventListener("click", () => {
    display.classList.add("expand")
    a.forEach(a => {
        a.style.opacity = "1";
    })
    
})

navImage2.addEventListener("click", () => {
    display.classList.remove("expand")
    a.forEach(a => {
        a.style.opacity = "0";
    })
    
})

aboutSection.addEventListener("wheel", () => {
    navBar.style.position = "fixed";
    navBar.style.top = "0";
})

aboutSection.addEventListener("wheel", () => {
    navBar.style.position = "fixed";
    navBar.style.top = "0";
})

topSection.addEventListener("wheel", () => {
    navBar.style.position = "relative";
    
})


projectSection.addEventListener("scroll", () => {
    navBar.style.position = "fixed";
    navBar.style.top = "0";
})


// arrow nav fixed

arrow.addEventListener("click", () => {
    navBar.style.position = "fixed";
    navBar.style.top = "0";
})

nava.forEach(nav => {
    nav.addEventListener("click", () => {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
    })
})

