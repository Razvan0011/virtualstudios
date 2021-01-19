const closeBtn = document.querySelectorAll(".close-btn");
const hamburger = document.querySelectorAll(".hamburger");
const smalldevice = document.querySelector(".overlay-menu");

// hamburger[0].addEventListener("click", () => {
//     smalldevice.classList.remove("hide");
// })

(() => {
    hamburger.forEach(elem => {
        elem.addEventListener("click", () => {
            smalldevice.classList.remove("hide");
        });
    })
})();

(() => {
    closeBtn.forEach(elem => {
        elem.addEventListener("click", () => {
            smalldevice.classList.add("hide");
        });
    })
})();