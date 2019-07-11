let navImage = document.querySelector(".navImg")
let navImage2 = document.querySelector(".navImg2");
let display = document.querySelector(".display");
let navItem = document.querySelectorAll(".display a");
let img = document.querySelectorAll(".navMobile img");

// img.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("change");
//     })
// })


navImage.addEventListener("click", () => {
display.classList.toggle("opacity");
navImage2.classList.toggle('hide');
navImage.classList.toggle('hide');
navImage.classList.toggle("change");

})

navImage2.addEventListener("click", () => {
    display.classList.toggle("opacity");
    navImage.classList.toggle('hide');
    navImage2.classList.toggle('hide');
    navImage2.classList.toggle("change");
})

