let count = 0;
let buttons = document.querySelectorAll(".counter");
const counter = document.querySelector("#shower");
counter.innerHTML = count;
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (this.classList.contains("add")) {
      count++;
    } else if (this.classList.contains("lower")) {
      count--;
    }
    counter.innerHTML = count;
    if (count > 0) {
      counter.style.color = "red";
    } else if (count < 0) {
      counter.style.color = "blue";
    } else {
      counter.style.color = "black";
    }
  });
});
