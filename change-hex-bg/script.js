var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
