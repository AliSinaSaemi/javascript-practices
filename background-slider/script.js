let slider = document.querySelector(".background");
let buttons = document.querySelectorAll(".btn");
let counter = 1;

const images = [
  "img/img-1.jpg",
  "img/img-2.jpg",
  "img/img-3.jpg",
  "img/img-4.jpg",
];

slider.style.backgroundImage = `url(img/img-${counter}.jpg)`;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("right")) {
      counter++;
      if (counter == images.length + 1) {
        counter = 1;
      }
    } else if (button.classList.contains("left")) {
      counter--;
      if (counter == 0) {
        counter = images.length;
      }
    }
    slider.style.backgroundImage = `url(img/img-${counter}.jpg)`;
  });
});
