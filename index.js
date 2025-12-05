const btn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
