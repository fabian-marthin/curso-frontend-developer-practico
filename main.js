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

const listaDeProductos = [];

listaDeProductos.push({
    nombre: "bike",
    precio: 500000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaDeProductos.push({
    nombre: "TV",
    precio: 1200000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaDeProductos.push({
    nombre: "juego de sala",
    precio: 1500000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaDeProductos.push({
    nombre: "computador",
    precio: 2000000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

/*<section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
  </section>*/

  for (product of listaDeProductos){
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("product-card");

    const img = document.createElement("img");
    img.
  }
  