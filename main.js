const menuEmail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".productDetail");

const productDetail2 = document.querySelector(".productDetail-2");
const imgProduct = document.querySelector(".imgProduct");

const contenedorDeTarjetas = document.querySelector(".cards-container");

const productDetailClose = document.querySelector(".product-detail-close");
productDetailClose.addEventListener("click", closeProductDetail);

menuEmail.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click",menuDelIcono );
menuCarrito.addEventListener("click", menuProductDetail);

function toggleMenu(){
    const productDetailClose = productDetail.classList.contains("inactive");
    
    if(!productDetailClose){
        productDetail.classList.add("inactive")
    }
    desktopmenu.classList.toggle("inactive");
}
function menuDelIcono(){
    const productDetailClose = productDetail.classList.contains("inactive");
    const ProductDeatail2Close = productDetail2.classList.contains("inactive");

    if(!productDetailClose){
        productDetail.classList.add("inactive");
    }
    if(!ProductDeatail2Close){
        productDetail2.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}
function menuProductDetail(){
    const mobileMenuClose = mobileMenu.classList.contains("inactive");
    const desktopmenuClese = desktopmenu.classList.contains("inactive");
    const ProductDeatail2Close = productDetail2.classList.contains("inactive");


    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    if(!desktopmenuClese){
        desktopmenu.classList.add("inactive");
    }
    if(!ProductDeatail2Close){
        productDetail2.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

const listaDeProductos = [];

listaDeProductos.push({
    nombre: "bike",
    precio: 500000,
    imagen: "./imagenes/bike.png"
})
listaDeProductos.push({
    nombre: "TV",
    precio: 1200000,
    imagen: "./imagenes/TV.png"
})
listaDeProductos.push({
    nombre: "juego de sala",
    precio: 1500000,
    imagen: "./imagenes/juego de sala.png"
})
listaDeProductos.push({
    nombre: "computador",
    precio: 2000000,
    imagen: "./imagenes/computador.png"
})


function renderizarProductos(listaDeProductos){

  for (producto of listaDeProductos){
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("product-card");

        const productoImg = document.createElement("img");
        productoImg.setAttribute("src", producto.imagen);
        productoImg.classList.add("product-info");
        productoImg.addEventListener("click", openPreoductDetail2)

        const informacionProducto = document.createElement("div");
        informacionProducto.classList.add("product-info");

            const divDeinfo = document.createElement("div");
            divDeinfo.classList.add("divInfo")
            
                const precioDelProducto = document.createElement("p");
                precioDelProducto.innerHTML = "$ " + producto.precio;
                const nombreDelProducto = document.createElement("p");
                nombreDelProducto.innerHTML = producto.nombre;

            const etiquetaFigure = document.createElement("figure");

                const imgFigure = document.createElement("img");
                imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");

    const imgagenProducto = document.createElement("img");
    imgagenProducto.setAttribute("src", producto.imagen);

    contenedorDeTarjetas.appendChild(tarjetaProducto);

    tarjetaProducto.appendChild(productoImg);
    tarjetaProducto.appendChild(informacionProducto);
    
    informacionProducto.appendChild(divDeinfo);
    informacionProducto.appendChild(etiquetaFigure);

    divDeinfo.appendChild(precioDelProducto);
    divDeinfo.appendChild(nombreDelProducto);

    etiquetaFigure.appendChild(imgFigure);

    productDetail2.appendChild(imgagenProducto);
  }
}
  
renderizarProductos(listaDeProductos)

function openPreoductDetail2(){
    productDetail2.classList.remove("inactive");
    const productDetailClose = productDetail.classList.contains("inactive");
    const mobileMenuClose = mobileMenu.classList.contains("inactive");

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    if(!productDetailClose){
        productDetail.classList.add("inactive");
    }
}
function closeProductDetail(){    
    productDetail2.classList.add("inactive");
}
