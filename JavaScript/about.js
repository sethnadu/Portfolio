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


    iconList.forEach(i => {
        i.addEventListener("mouseover", () => {
           i.style.color = "rgba(78, 76, 76)"; 
        })
        
    })
    

        iconList.forEach(i => {
            i.addEventListener("mouseleave", () => {
               i.style.color = "indianred"; 
            })
    })

