// Calcular descuento por volumen//
//Aplica descuento sobre el total:


let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

if (cantidad < 10) {
    precioFinal = precioUnitario * cantidad;
} else if (cantidad < 50) {
    precioFinal = precioUnitario * cantidad * 0.9; // 10% de descuento
} else {
    precioFinal = precioUnitario * cantidad * 0.8; // 20% de descuento
}

console.log(precioFinal.toFixed(2));