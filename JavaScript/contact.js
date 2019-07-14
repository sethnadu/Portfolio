const submitButton = document.querySelector(".submit");

submitButton.addEventlistener("click", () => {
    TweenLite.to(".paperairplane", .5, { ease: Expo.easeOut, x: 70 });
})