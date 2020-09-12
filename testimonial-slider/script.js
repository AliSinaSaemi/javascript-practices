let testimonial_img = document.querySelector("img");
let testimonial_qoute = document.querySelector("p");
let testimonial = document.querySelector(".background");
let buttons = document.querySelectorAll(".btn");
let counter = 0;

const people = [
  {
    img: "img/img-1.jpg",
    qoute:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    background_color: "red",
  },
  {
    img: "img/img-2.jpg",
    qoute:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    background_color: "blue",
  },

  {
    img: "img/img-3.jpg",
    qoute:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    background_color: "yellow",
  },
];

testimonial.style.backgroundColor = people[counter].background_color;
testimonial_img.src = people[counter].img;
testimonial_qoute.innerHTML = people[counter].qoute;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("right")) {
      counter++;
      if (counter == people.length) {
        counter = 1;
      }
    } else if (button.classList.contains("left")) {
      counter--;
      if (counter == 0) {
        counter = people.length;
      }
    }
    testimonial.style.backgroundColor = people[counter].background_color;
    testimonial_img.src = people[counter].img;
    testimonial_qoute.innerHTML = people[counter].qoute;
    console.log(counter);
  });
});
