// dark mode

const html = document.querySelector("html");
const btn = document.querySelector("#dark_mode_button");

function darkModeToggle() {
  console.log("toggle dark mode");
  html.classList.toggle("dark");
}

btn.addEventListener("click", darkModeToggle);
