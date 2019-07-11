let navImage = document.querySelector(".navImg")
// let navImage2 = document.querySelector(".navImg2");
let navMobile = document.querySelector(".navMobile");
let display = document.querySelector(".display");
let navItem = document.querySelectorAll(".display a");
let img = document.querySelectorAll(".navMobile img");

let navItemArray = Array.from(navItem);


navImage.addEventListener("click", () => {
display.classList.toggle("expand");
navItemArray.forEach(item => {
    item.classList.toggle('hide');
})

// navImage.classList.toggle("change");

})

// navImage2.addEventListener("click", () => {
//     display.classList.toggle("hide");
//     navImage.classList.toggle('hide');
//     navImage2.classList.toggle('hide');
//     // navImage2.classList.toggle("change");
// })

