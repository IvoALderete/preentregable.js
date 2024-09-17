const productosArray = [
    {
        id: "monitor1",
        titulo: "monitor1",
        imagen: "./styles/img/Predator_X32_01.jpg",
        categoria: { nombre: "monitores", id: "monitores" },
        precio: 500
    },
    {
        id: "monitor2",
        titulo: "monitor2",
        imagen: "./styles/img/Asus.jpg",
        categoria: { nombre: "monitores", id: "monitores" },
        precio: 500
    },
    {
        id: "gabinete1",
        titulo: "gabinete1",
        imagen: "./styles/img/gabineteazul.jpeg",
        categoria: { nombre: "gabinetes", id: "gabinetes" },
        precio: 500
    },
    {
        id: "gabinete2",
        titulo: "gabinete2",
        imagen: "./styles/img/pcjs.webp",
        categoria: { nombre: "gabinetes", id: "gabinetes" },
        precio: 500
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    if (contenedorProductos) {
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
        });

        actualizarBotonesAgregar();
    } 
}

window.onload = function() {
    cargarProductos(productosArray);
};

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find((producto) => producto.id === idBoton);

    if (!productosEnCarrito) {
        productosEnCarrito = [];
    }

    if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const numerito = document.querySelector("#numerito");
    if (numerito) {
        numerito.innerText = nuevoNumerito;
    } else {
        console.error("El elemento #numerito no se encontró en el DOM.");
    }
}