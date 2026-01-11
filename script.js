const btn = document.getElementById("personalBtn");
const menu = document.getElementById("personalMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});