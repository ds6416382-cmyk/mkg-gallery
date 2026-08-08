document.addEventListener("DOMContentLoaded", function () {
    console.log("MKG Coaching Classes Website Loaded Successfully!");

    const btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });

        btn.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
function toggleMenu() {
  var menu = document.getElementById("menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function autoSlider() {

slides.forEach((slide, index) => {

slide.style.display = index === currentSlide ? "block" : "none";

});

currentSlide++;

if (currentSlide >= slides.length) {

currentSlide = 0;

}

}

autoSlider();

setInterval(autoSlider, 3000);