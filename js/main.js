const navMenuButtons = document.querySelectorAll(".toggle-nav");
const colorButtons = document.querySelectorAll(".toggle-color");
const nav = document.querySelector(".navbar");
const bgVideo = document.querySelector(".bg-video");

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
  const isDarkMode = document.body.classList.contains("dark-mode");
  bgVideo.src = isDarkMode
    ? "https://res.cloudinary.com/djzahz5ym/video/upload/v1744785109/rifg8lbqgrr77ue1owuv.mp4"
    : "https://res.cloudinary.com/djzahz5ym/video/upload/v1744785133/ikmhigmp8pkqho6nimdk.mp4";
}

colorButtons.forEach((button) => {
  button.addEventListener("click", toggleColorMode);
});
