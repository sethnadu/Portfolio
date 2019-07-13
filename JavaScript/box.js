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