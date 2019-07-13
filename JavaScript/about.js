// Icon color change mobile on mouseover
const iconList = document.querySelectorAll(".icon")
const fas = document.querySelector(".fas");
const aboutIcons = document.querySelectorAll(".aboutIcons");
const iconContent = document.querySelectorAll(".iconContent")
const aboutSectionDiv = document.querySelector(".aboutSection");

aboutIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
    
    })
    iconList.forEach(i => {
        i.addEventListener("mouseover", () => {
           i.style.color = "rgba(78, 76, 76)"; 
        })
        
    })
    

    icon.addEventListener("mouseleave", () => {
        iconList.forEach(i => {
            i.addEventListener("mouseleave", () => {
               i.style.color = "indianred"; 
            })
    })

});

})