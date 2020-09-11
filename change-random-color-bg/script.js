var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var colors = ["red", "blue", "pink", "purple", "yellow", "gray", "white"];
  var color = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector("body").style.backgroundColor = color;
});
