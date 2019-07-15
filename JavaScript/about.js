// Icon color change mobile on mouseover
const iconList = document.querySelectorAll(".icon")
const fas = document.querySelector(".fas");
const aboutIcons = document.querySelectorAll(".aboutIcons");
const iconContent = document.querySelectorAll(".iconContent")
const aboutSectionDiv = document.querySelector(".aboutSection");
const name = document.querySelector(".name");
const job = document.querySelector("#content h2");
const locationContent = document.querySelector("#content h3");
const content = document.getElementById("content");

const responsive = document.querySelector(".responsive");
const javascriptIcon = document.querySelector(".javascriptIcon");
const css = document.querySelector(".css");

aboutSectionDiv.addEventListener("scroll", () => {
    aboutIcons.forEach(icon => {
       icon.style.visibility = "visible"; 
       icon.style.opacity = "1";
    })
    // TweenLite.to(".responsive", .5, { ease: Power2.easeOut, x: -600 });
})

aboutSectionDiv.addEventListener("mouseover", () => {
    aboutIcons.forEach(icon => {
       icon.style.visibility = "visible"; 
       icon.style.opacity = "1";
    })
    // TweenLite.to(".responsive", .5, { ease: Power2.easeOut, x: -600 });
})
