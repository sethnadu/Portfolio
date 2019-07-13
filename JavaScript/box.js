const boxes = document.querySelectorAll(".box");
const boxContent = document.querySelectorAll(".boxContent")

Array.from(boxes).forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.background.opacity = "0";
    }) 

    box.addEventListener("mouseleave", () => {

        box.style.background.opacity = "1";
    }) 
})

Array.from(boxContent).forEach(content => {
    content.addEventListener("mouseover", () => {
        content.style.opacity = "1"; 
    })

    content.addEventListener("mouseleave", () => {
        content.style.opacity = "0"; 
     })
    
 })



