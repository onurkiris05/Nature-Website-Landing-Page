const navMenuButtons = document.querySelectorAll(".toggle-nav");
const colorButtons = document.querySelectorAll(".toggle-color");
const nav = document.querySelector(".navbar");

// Toggle Nav
function toggleNav() {
  navMenuButtons.forEach((button) => {
    button.classList.toggle("active");
  });
  nav.classList.toggle("active");
}

navMenuButtons.forEach((button) => {
  button.addEventListener("click", toggleNav);
});

// Toggle Color Mode
function toggleColorMode() {
  colorButtons.forEach((button) => {
    button.classList.toggle("active");
  });
  document.body.classList.toggle("dark-mode");
}

colorButtons.forEach((button) => {
  button.addEventListener("click", toggleColorMode);
});
