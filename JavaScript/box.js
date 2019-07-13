const boxes = document.querySelectorAll(".box");
const boxContent = document.querySelector(".boxContent")

Array.from(boxes).forEach(box => {
    box.addEventListener("mouseover", () => {
        boxContent.style.display = "flex";
    }) 

    box.addEventListener("mouseleave", () => {
        boxContent.style.display = "none";
    }) 
})
// Icon color change mobile on mouseover
const icon = document.querySelectorAll("i")
const fas = document.querySelector(".fas");
const aboutIcons = document.querySelectorAll(".aboutIcons");
const iconContent = document.querySelectorAll(".iconContent")
const aboutSectionDiv = document.querySelector(".aboutSection");

aboutIcons.forEach(word => {

word.addEventListener("mouseover", () => {
    icon.forEach(item => {
        item.style.color = "rgba(78, 76, 76)"
    })
    iconContent.forEach(item => {
        item.style.color = "rgba(78, 76, 76)"
    })
   
})

word.addEventListener("mouseleave", () => {
    icon.forEach(item => {
        item.style.color = "indianred"
    })
    iconContent.forEach(item => {
        item.style.color = "black"
    })
}) 

})



