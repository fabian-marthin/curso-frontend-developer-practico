const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const orden = document.querySelector(".productDetail");

menuEmail.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click",menuDelIcono );
menuCarrito.addEventListener("click", menuOrden);

function toggleMenu(){
    const ordenClose = orden.classList.contains("inactive");
    
    if(!ordenClose){
        orden.classList.add("inactive")
    }
    desktopmenu.classList.toggle("inactive");
}
function menuDelIcono(){
    const ordenClose = orden.classList.contains("inactive");

    if(!ordenClose){
        orden.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function menuOrden(){
    const mobileMenuClose = mobileMenu.classList.contains("inactive");
    const toggleMenuClese = desktopmenu.classList.contains("inactive");

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    if(!toggleMenuClese){
        desktopmenu.classList.add("inactive");
    }

    orden.classList.toggle("inactive");
}