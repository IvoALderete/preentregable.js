const productos = [
    {
        id: "monitor1",
        titulo: "monitor1",
        imagen: "./styles/img/Predator_X32_01.jpg",
        categoria: {
            nombre: "monitores",
            id: "monitores"
        },
        precio: 500
    },


    {
        id: "monitor2",
        titulo: "monitor2",
        imagen: "./styles/img/Asus.jpg",
        categoria: {
            nombre: "monitores",
            id: "monitores"
        },
        precio: 500
    },


    {
        id: "gabinete1",
        titulo: "gabinete1",
        imagen: "./styles/img/gabineteazul.jpeg",
        categoria: {
            nombre: "gabinetes",
            id: "gabinetes"
        },
        precio: 500
    },


    {
        id: "gabinete2",
        titulo: "gabinete2",
        imagen: "./styles/img/pcjs.webp",
        categoria: {
            nombre: "gabinetes",
            id: "gabinetes"
        },
        precio: 500
    }
]


document.addEventListener('DOMContentLoaded', () => {
    // Coloca todo tu código aquí
});


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;


    contenedorProductos.append(div);
    })
}
cargarProductos(productos);

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


const productosEnCarrito  = [];

function agregarAlCarrito (e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
}
console.log(productosEnCarrito)