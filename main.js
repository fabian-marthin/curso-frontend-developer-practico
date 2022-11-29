const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");
const menuIcon = document.querySelector(".menu");
const mobileMenuInactive = document.querySelector("mobile-menu");

menuEmail.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click", toggleMenuMobile);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
    
}
function toggleMenuMobile(){
    mobileMenuInactive.classList.toggle("inactive");
}