const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

async function cargarProductosDesdeJson() {
    try {
        const response = await fetch('./json/productos.json');
        const productos = await response.json();
        cargarProductos(productos);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

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

        actualizarBotonesAgregar(productosElegidos);
    }
}

function actualizarBotonesAgregar(productos) {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => agregarAlCarrito(e, productos));
    });
}

function agregarAlCarrito(e, productos) {
    const idBoton = e.currentTarget.id;
    
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (!productosEnCarrito) {
        productosEnCarrito = [];
    }

    const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idBoton);
    
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++; 
    } else {
        productoAgregado.cantidad = 1; 
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    if (numerito) {
        numerito.innerText = nuevoNumerito;
    } else {
        console.error("El elemento #numerito no se encontró en el DOM.");
    }
}

actualizarNumerito();

cargarProductosDesdeJson();