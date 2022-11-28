const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
menuEmail.addEventListener("click", toggleMenu);

function toggleMenu(){
    desktopmenu.classList.toggle("inactive");
}