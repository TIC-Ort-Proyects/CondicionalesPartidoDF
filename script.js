// INICIO CONSIGNA BASICA

// Preguntar el tipo de entrada que desea el usuario
let tipoDeEntrada = prompt(
    "¿Escribí el número de entrada que deseas?\n\n1. Entrada 1 - $25.000\n2. Entrada 2 - $45.000\n3. Entrada 3 - $65.000"
);

// Validar el tipo de entrada seleccionado
if (tipoDeEntrada === 1) {
    let nombreEntrada = "Entrada 1";
    let precioPorEntrada = 25000;
} else if (tipoDeEntrada === 2) {
    let nombreEntrada = "Entrada 2";
    let precioPorEntrada = 45000;
} else if (tipoDeEntrada === 3) {
    let nombreEntrada = "Entrada 3";
    let precioPorEntrada = 65000;
} else {
    alert("Entrada no válida. Por favor, elige una opción correcta.");
}

// Preguntar la cantidad de entradas que desea comprar
let cantidadEntradas = prompt("¿Cuántas entradas deseas comprar?");

let total = precioPorEntrada * cantidadEntradas;  // Calcular el total sin descuento
let descuento = 0;  // Inicializar descuento como 0

// Preguntar si el usuario tiene un código de descuento
let codigoIngresado = prompt("¿Tienes un código de descuento? (Escríbelo aquí)");

// Validar si el código de descuento ingresado es el correcto
if (codigoIngresado === "ELJUEGO") {
    // Si el código es válido, aplicar un descuento del 10%
    let descuentoExtra = total * 0.10;
    descuento = descuento + descuentoExtra;  // Sumar el descuento al total
    total = total - descuentoExtra;  // Reducir el total
} else {
    alert("Código de descuento inválido.");  // Si el código no es válido
}

// Mostrar el total de la compra
console.log("Total: " + total);
alert("Total: " + total);

// FIN CONSIGNA BASICA

// INICIO CONSIGNA MANIJA

// Filtrar los partidos jugados contra el rival
let partidos = prompt("Ingrese el total de partidos jugados entre DF vs el rival");
let totalGolesDefensores = prompt("Ingrese el total de goles de Defensores de Belgrano");
let totalGolesRival = prompt("Ingrese el total de goles del rival");

// Calcular los promedios de goles de Defensores y del rival
let promedioGolesDefensores = totalGolesDefensores / partidos.length;
let promedioGolesRival = totalGolesRival / partidos.length;

// Agregar aleatoriedad al resultado (puedes ajustar este comportamiento si lo deseas)
let aleatorio = Math.random();

// La aleatoriedad afecta la predicción de goles de los equipos
if (aleatorio < 0.45) {
    promedioGolesDefensores = Math.floor(Math.random() * 3); // Agregar entre 0 y 2 goles a Defensores
} else if (aleatorio > 0.55) {
    promedioGolesRival += Math.floor(Math.random() * 3); // Agregar entre 0 y 2 goles al rival
} else {
    // Si el número aleatorio está en el rango [0.45, 0.55], promediamos los goles
    let promedioGoles = (promedioGolesDefensores + promedioGolesRival) / 2; // Promediar los goles
    promedioGolesDefensores = promedioGoles;  // Igualamos los goles de Defensores a la media
    promedioGolesRival = promedioGoles;  // Igualamos los goles del rival a la media
}

// Calcular la probabilidad de que cada equipo haga goles
let probabilidadGolesDefensores = promedioGolesDefensores / (promedioGolesDefensores + promedioGolesRival) * 100;
let probabilidadGolesRival = promedioGolesRival / (promedioGolesDefensores + promedioGolesRival) * 100;

// Determinar el resultado esperado basado en las probabilidades
let resultadoEsperado = "Empatado";  // Suponemos que el resultado es empate por defecto
if (probabilidadGolesDefensores > probabilidadGolesRival) {
    resultadoEsperado = "Ganado";  // Si la probabilidad de Defensores es mayor, se espera una victoria
} else if (probabilidadGolesDefensores < probabilidadGolesRival) {
    resultadoEsperado = "Perdido";  // Si la probabilidad de Defensores es menor, se espera una derrota
}

// Mostrar los resultados finales con los promedios de goles y las probabilidades
let mensajeProbabilidad = "Resultado esperado Defensores De Belgrano VS " + rivalEncontrado.rival + ":\n\n" +
    "Goles de Defensores: " + Math.round(promedioGolesDefensores) + " " + probabilidadGolesDefensores.toFixed(2) + "%\n" +
    "Goles del rival: " + Math.round(promedioGolesRival) + " " + probabilidadGolesRival.toFixed(2) + "%\n" +
    "Resultado esperado: " + resultadoEsperado;

    console.log(mensajeProbabilidad);  // Mostramos el mensaje en la consola para depuración    
    alert(mensajeProbabilidad);  // Mostramos el mensaje al usuario

// FIN CONSIGNA MANIJA