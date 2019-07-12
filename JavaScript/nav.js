let navImage = document.querySelector(".navImg");
let navMobile = document.querySelector(".navMobile");
let navAbout = document.querySelector(".about");
let display = document.querySelector(".display");
let navItemMobile = document.querySelectorAll(".display a");
let nava = document.querySelectorAll(".nav a");
let a = document.querySelector("a");
let img = document.querySelectorAll(".navMobile img");

let navItemMobileArray = Array.from(navItemMobile);


navImage.addEventListener("click", () => {
display.classList.toggle("expand");
// TweenLite.from(".display", 1, { ease: Power0.easeNone, y: -180 });

});

// navImage2.addEventListener("click", () => {
//     display.classList.toggle("expand");
//     TweenLite.from(".display", 1, { ease: Power0.easeNone, y: -180 });
    
//     });




