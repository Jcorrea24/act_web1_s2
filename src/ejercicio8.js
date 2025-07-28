let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioFinal;

if (edad < 18) {
    precioFinal = tarifaBase * 0.8; // 20% de descuento
} else if (edad >= 65) {
    precioFinal = tarifaBase * 0.6; // 40% de descuento
} else {
    precioFinal = tarifaBase;
}

console.log(precioFinal.toFixed(2));