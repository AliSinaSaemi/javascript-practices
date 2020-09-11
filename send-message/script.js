const button = document.querySelector("button");
const input = document.querySelector("input");
const result = document.querySelector("p");

button.disabled = true;

input.addEventListener("keyup", function () {
  if (input.value.length > 3) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

button.addEventListener("click", function () {
  if (input.value.length < 3) {
    result.innerHTML = "Please fill the input";
  } else {
    result.innerHTML = input.value;
  }
  console.log(this);
});
