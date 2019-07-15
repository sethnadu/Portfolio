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
const navIcons = document.querySelector(".navIcons");
const navGithub = document.querySelector(".github");
const navLinkedin = document.querySelector(".linkedin");
const navTwitter = document.querySelector(".twitter");
const fillerDiv = document.querySelector(".filler")

let navItemMobileArray = Array.from(navItemMobile);


navMobile.addEventListener("click", () => {
navImage.classList.toggle("hide");
navImage2.classList.toggle("hide");

});

navImage.addEventListener("click", () => {
    fillerDiv.style.zIndex = "0";
    fillerDiv.style.display = "flex";
    display.classList.add("expand")
    document.querySelector(".logo").style.opacity ="1";
    a.forEach(a => {
        a.style.opacity = "1";
    })
    navIcons.style.opacity = "1";
    TweenLite.to(".logo", .5, { ease: Power2.easeIn, y: 0 });
    
   
    
})

navImage2.addEventListener("click", () => {
    fillerDiv.style.zIndex = "2";
    fillerDiv.style.display = "none";
    display.classList.remove("expand")
    
    a.forEach(a => {
        a.style.opacity = "0";
    })
    navIcons.style.opacity = "0";
    TweenLite.to(".logo", .5, { ease: Power2.easeOut, y: -200 });
    
    
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


//Github hover navmobile change
navGithub.addEventListener("mouseover", () => {
        navGithub.src = "https://img.icons8.com/dusk/50/000000/github.png"
    })

navGithub.addEventListener("mouseleave", () => {
        navGithub.src = "https://img.icons8.com/windows/50/000000/github.png"
    })
//Linkedin hover navmobile change
navLinkedin.addEventListener("mouseover", () => {
        navLinkedin.src = "https://img.icons8.com/dusk/50/000000/linkedin.png"
    })

navLinkedin.addEventListener("mouseleave", () => {
        navLinkedin.src = "https://img.icons8.com/ios-filled/50/000000/linkedin.png"
    })

//Twitter hover navmobile change
navTwitter.addEventListener("mouseover", () => {
    navTwitter.src = "https://img.icons8.com/dusk/50/000000/twitter.png"
})

navTwitter.addEventListener("mouseleave", () => {
    navTwitter.src = "https://img.icons8.com/material-rounded/50/000000/twitter.png"
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

