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
    ? "/assets/videos/winter-forest-hd_2048_1080_24fps.mp4"
    : "/assets/videos/forest-hd_2048_1080_24fps.mp4";
}

colorButtons.forEach((button) => {
  button.addEventListener("click", toggleColorMode);
});
