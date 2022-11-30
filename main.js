const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const orden = document.querySelector(".productDetail");

const contenedorDeTarjetas = document.querySelector(".cards-container");

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

  for (producto of listaDeProductos){
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("product-card");

        const productoImg = document.createElement("img");
        productoImg.setAttribute("src", producto.imagen);
        productoImg.classList.add("product-info");

        const informacionProducto = document.createElement("div");
        informacionProducto.classList.add("product-info");

            const divDeinfo = createElement("div");
            divDeinfo.classList.add("divInfo")
            
                const precioDelProducto = document.createElement("p");
                precioDelProducto.innerHTML = "$ " + producto.precio;
                const nombreDelProducto = document.createElement("p");
                nombreDelProducto.innerHTML = nombre.precio;

            const etiquetaFigure = document.createElement("figure");

                const imgFigure = document.createElement("img");
                imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");

    contenedorDeTarjetas.appendChild(tarjetaProducto);

    tarjetaProducto.appendChild(productoImg);
    tarjetaProducto.appendChild(informacionProducto);
    
    informacionProducto.appendChild(divDeinfo);
    informacionProducto.appendChild(etiquetaFigure);

    divDeinfo.appendChild(precioDelProducto, nombreDelProducto);

    etiquetaFigure.appendChild(imgFigure);
  }
  