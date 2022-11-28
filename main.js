const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");

menuEmail.addEventListener("click", toggleMenu);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
}