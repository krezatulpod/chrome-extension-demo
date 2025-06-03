document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log("Extension button clicked.");
    alert("Hello from extensions.");
  });
});
