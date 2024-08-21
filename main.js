const frutas = [
    { nombre: "manzana", precio: 40 },
    { nombre: "banana", precio: 80 },
    { nombre: "ciruela", precio: 60 }
];

let eleccion =  parseInt(prompt("Elija que fruta desea llevar: \n 1- manzana \n 2- banana \n 3- ciruela \n  4-salir"))
let confirmar = false;

function multiplicarmanzana () {
    let cantidad = parseInt(prompt("ingrese la cantidad que desea llevar"))
    let seleccionarfruta = frutas[eleccion -1 ]
    let total = (seleccionarfruta.precio * cantidad)
    alert("el Precio total de su compra es de " + total + " pesos")
    confirmar =  confirm ("Desea llevar algo mas?");
    if (confirmar) {
        alert ("continue su compra")
    }
    else {
        alert ("Gracias por su compra!, que tenga buen dia.")
    }
    return (total);
}


function multiplicarbanana () {
    let cantidad = parseInt(prompt("ingrese la cantidad que desea llevar"))
    let seleccionarfruta = frutas[eleccion -1 ]
    let total = (seleccionarfruta.precio * cantidad)
    alert("el Precio total de su compra es de " + total + " pesos")
    confirmar =  confirm ("Desea llevar algo mas?");
    if (confirmar) {
        alert ("continue su compra")
    }
    else {
        alert ("Gracias por su compra!, que tenga buen dia.")
    }
    return (total);
}


function multiplicarciruela () {
    let cantidad = parseInt(prompt("ingrese la cantidad que desea llevar"))
    let seleccionarfruta = frutas[eleccion -1 ]
    let total = (seleccionarfruta.precio * cantidad)
    alert("el Precio total de su compra es de " + total + " pesos")
    confirmar =  confirm ("Desea llevar algo mas?");
    if (confirmar) {
        alert ("continue su compra")
    }
    else {
        alert ("Gracias por su compra!, que tenga buen dia.")
    }
    retunr (total);
}


while(eleccion) {
    switch(eleccion)  {
        case 1:
            multiplicarmanzana()
            break
        case 2:
            multiplicarbanana()
            break
        case 3:
            multiplicarciruela()
            break
        default:
            alert("Finalizando programa, gracias!!")
            break
    }

    eleccion = parseInt(prompt("Elija que fruta desea llevar: \n 1- manzana \n 2- banana \n 3- ciruela \n  4-salir"))
}


