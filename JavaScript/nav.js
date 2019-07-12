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
navItemMobileArray.forEach(item => {
    item.classList.toggle('hide');
});

});

// nava.forEach(item => {
//     item.addEventListener('click', () => {
//        item.classList.toggle("clicked")
       
// });
// });



