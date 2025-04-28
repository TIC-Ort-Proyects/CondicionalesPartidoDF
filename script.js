// ------------------------------
// CONSIGNA BÁSICA
// ------------------------------

// Hacer un programa que permita a los usuarios comprar entradas 
// para el próximo partido de Defensores De Belgrano.

// 1. Preguntar al usuario el tipo de entrada que desea comprar:
//    - Entrada 1 - $25.000
//    - Entrada 2 - $45.000
//    - Entrada 3 - $65.000

// 2. Preguntar al usuario cuántas entradas quiere comprar.

// 3. Preguntar si tiene un código de descuento.
//    - Si ingresa un código válido, aplicar un 10% de descuento al total.

// 4. Validar todos los datos ingresados:
//    - Tipo de entrada (debe ser 1, 2 o 3).
//    - Cantidad de entradas (debe ser un número positivo y razonable).
//    - Código de descuento (si corresponde).

// 5. Calcular el total a pagar.

// 6. Mostrar un resumen de la compra usando:
//    - alert()
//    - console.log()

// 7. Si algún dato es inválido, mostrar un mensaje de error.


// ------------------------------
// CONSIGNA MANIJA 1
// ------------------------------

// Ampliar el programa para calcular el resultado esperado 
// de que Defensores De Belgrano haga X goles en el próximo partido,
// basado en su historial contra el rival que enfrente.

// 1. Preguntar al usuario el nombre del rival.

// 2. Buscar en un array de objetos los partidos anteriores 
//    jugados contra ese rival. Cada objeto contiene:
//    - Nombre del rival
//    - Goles de Defensores De Belgrano
//    - Goles del rival
//    - Resultado del partido (ganado, empatado o perdido)

// 3. Filtrar los partidos que se jugaron contra el rival ingresado.

// 4. Si no se encuentran partidos contra ese rival, 
//    mostrar un mensaje de error.

// 5. Si hay partidos:
//    - Sumar los goles hechos por Defensores De Belgrano.
//    - Sumar los goles hechos por el rival.
//    - Dividir cada suma por la cantidad de partidos jugados.
//    - Agregar aleatoriedad al resultado:
//      - Si el número aleatorio es menor a 0.5, sumar entre 0 y 2 goles a Defensores De Belgrano.
//      - Sino, sumar entre 0 y 2 goles al rival.
//    - Multiplicar el promedio de goles por 100 para obtener
//      la probabilidad de hacer goles.

// 6. Mostrar la probabilidad de hacer X goles en el próximo partido.
//    - Mostrarlo por alert() y por console.log().
//    - El mensaje debe incluir:
//      - Nombre del rival
//      - El resultado de goles de Defensores De Belgrano y del rival.
//      - La probabilidad de que se hagan esos goles de Defensores De Belgrano y del rival.
//      - Resultado esperado (ganado, empatado o perdido).

// ------------------------------
// CONSIGNA MANIJA 2
// ------------------------------

// Agregar al sistema de resultado de partido un intervalo para determinar el empate.
// Para esto al momento de agregar aleatoriedad al resultado,
// si el número aleatorio es menor a 0.45, sumar entre 0 y 2 goles a Defensores De Belgrano.
// Si el número aleatorio es mayor a 0.55, sumar entre 0 y 2 goles al rival.
// Si el número aleatorio está entre 0.45 y 0.55 (Nuestro intervalo), promediar los goles de Defensores De Belgrano y del rival.


// INICIO CONSIGNA BASICA

// 1. Definición de variables
let nombreEntrada = null;  // Almacena el nombre de la entrada seleccionada
let precioPorEntrada = null;  // Almacena el precio de la entrada seleccionada
let cantidadEntradas = null;  // Almacena la cantidad de entradas seleccionadas
let descuento = null;  // Almacena el descuento aplicado
let codigoDescuento = "DESCUENTO10";  // Código de descuento fijo
let total = null;  // Almacena el total de la compra
let mensajeFinal = null;  // Mensaje final con el resumen de la compra

// 2. Inputs y validaciones
// Preguntar el tipo de entrada que desea el usuario
let tipoDeEntrada = parseInt(prompt(
    "¿Escribí el número de entrada que deseas?\n\n1. Entrada 1 - $25.000\n2. Entrada 2 - $45.000\n3. Entrada 3 - $65.000"
));

// Validar el tipo de entrada seleccionado
if (tipoDeEntrada === 1) {
    nombreEntrada = "Entrada 1";
    precioPorEntrada = 25000;
} else if (tipoDeEntrada === 2) {
    nombreEntrada = "Entrada 2";
    precioPorEntrada = 45000;
} else if (tipoDeEntrada === 3) {
    nombreEntrada = "Entrada 3";
    precioPorEntrada = 65000;
} else {
    alert("Entrada no válida. Por favor, elige una opción correcta.");
}

// Continuar solo si se seleccionó una entrada válida
if (nombreEntrada !== null) {
    // Preguntar la cantidad de entradas que desea comprar
    cantidadEntradas = parseInt(prompt("¿Cuántas entradas deseas comprar?"));

    // Validar que la cantidad de entradas esté en el rango permitido
    if (cantidadEntradas > 0 && cantidadEntradas <= 100) {
        total = precioPorEntrada * cantidadEntradas;  // Calcular el total sin descuento
        descuento = 0;  // Inicializar descuento como 0

        // Preguntar si el usuario tiene un código de descuento
        let codigoIngresado = prompt("¿Tienes un código de descuento? (Escríbelo aquí)");

        // Validar si el código de descuento ingresado es el correcto
        if (codigoIngresado === codigoDescuento) {
            // Si el código es válido, aplicar un descuento del 10%
            let descuentoExtra = total * 0.10;
            descuento = descuento + descuentoExtra;  // Sumar el descuento al total
            total = total - descuentoExtra;  // Reducir el total
        } else if (codigoIngresado !== "") {
            alert("Código de descuento inválido.");  // Si el código no es válido
        }

        // Verificar que el total no sea negativo (por si el descuento lo reduce demasiado)
        if (total < 0) {
            total = 0;  // Establecer el total a 0 en caso de ser negativo
        }

    } else {
        alert("Cantidad no válida. Por favor, ingresa un número positivo menor o igual a 100.");  // Validar la cantidad de entradas
    }
}

// 3. Mensaje final
// Mostrar el resumen de la compra solo si la entrada y la cantidad son válidas
if (nombreEntrada !== null && cantidadEntradas > 0 && cantidadEntradas <= 100) {
    // Construir el mensaje final dependiendo si hay descuento o no
    if (descuento > 0) {
        mensajeFinal = "Resumen de la compra:\n\n" +
            "Entrada: " + nombreEntrada + "\n" +
            "Cantidad: " + cantidadEntradas + "\n" +
            "Precio por entrada: $" + precioPorEntrada.toFixed(2) + "\n" +
            "Descuento aplicado: $" + descuento.toFixed(2) + "\n" +
            "Total a pagar: $" + total.toFixed(2);
    } else {
        mensajeFinal = "Resumen de la compra:\n\n" +
            "Entrada: " + nombreEntrada + "\n" +
            "Cantidad: " + cantidadEntradas + "\n" +
            "Precio por entrada: $" + precioPorEntrada.toFixed(2) + "\n" +
            "Total a pagar: $" + total.toFixed(2);
    }

    // Mostrar el mensaje final tanto en la consola como en una alerta al usuario
    console.log(mensajeFinal);
    alert(mensajeFinal);
}

// FIN CONSIGNA BASICA


// INICIO CONSIGNA MANIJA

// Array con partidos históricos de Defensores de Belgrano
let historialPartidos = [
    {
        rival: "Atlanta",
        partidos: [
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 0, golesRival: 1, resultado: "Perdido" },
            { golesDefensores: 3, golesRival: 2, resultado: "Ganado" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 1, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 3, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 0, golesRival: 0, resultado: "Empatado" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" }
        ]
    },
    {
        rival: "All Boys",
        partidos: [
            { golesDefensores: 0, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 2, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 3, resultado: "Perdido" },
            { golesDefensores: 0, golesRival: 0, resultado: "Empatado" },
            { golesDefensores: 3, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 0, resultado: "Ganado" }
        ]
    },
    {
        rival: "Chacarita Juniors",
        partidos: [
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 1, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 0, golesRival: 0, resultado: "Empatado" },
            { golesDefensores: 3, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 0, golesRival: 1, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 3, golesRival: 2, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 3, resultado: "Perdido" }
        ]
    },
    {
        rival: "Flandria",
        partidos: [
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 0, golesRival: 1, resultado: "Perdido" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 3, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 0, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 3, golesRival: 1, resultado: "Ganado" }
        ]
    },
    {
        rival: "Platense",
        partidos: [
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 0, golesRival: 1, resultado: "Perdido" },
            { golesDefensores: 3, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 1, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 0, golesRival: 3, resultado: "Perdido" },
            { golesDefensores: 3, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" }
        ]
    },
    {
        rival: "Barracas Central",
        partidos: [
            { golesDefensores: 2, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 3, resultado: "Perdido" },
            { golesDefensores: 0, golesRival: 1, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 2, resultado: "Empatado" },
            { golesDefensores: 1, golesRival: 1, resultado: "Empatado" },
            { golesDefensores: 3, golesRival: 0, resultado: "Ganado" },
            { golesDefensores: 1, golesRival: 2, resultado: "Perdido" },
            { golesDefensores: 2, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 3, golesRival: 1, resultado: "Ganado" },
            { golesDefensores: 0, golesRival: 0, resultado: "Empatado" }
        ]
    }
];

// 0. Mostrar las posibilidades de rivales disponibles en el historial de partidos
let rivales = historialPartidos.map(rival => rival.rival).join("\n");
alert("Rivales disponibles:\n" + rivales);

// 1. Preguntar el nombre del rival al usuario
let nombreRival = prompt("Ingresa el nombre de un rival?");

// 1.1. Validación de entrada
if (!nombreRival) {
    alert("No ingresaste un nombre de rival.");  // Si no ingresa nada
} else if (!isNaN(nombreRival)) {
    alert("El nombre del rival no puede ser un número.");  // Si se ingresa un número
} else if (nombreRival === "") {
    alert("El nombre del rival no puede estar vacío.");  // Si se ingresa una cadena vacía
}
else if (nombreRival === null) {
    alert("El nombre del rival no puede ser nulo.");  // Si se presiona cancelar
} else {
    // 2. Eliminar espacios en blanco al principio y al final del nombre del rival
    nombreRival = nombreRival.trim();
    // Convertir el nombre a minúsculas para facilitar la búsqueda sin importar mayúsculas/minúsculas
    nombreRival = nombreRival.toLowerCase();
    
    // 3. Buscar el rival en el historial de partidos
    let rivalEncontrado = historialPartidos.find(rival => rival.rival.toLowerCase() === nombreRival);
    
    // 4. Validar si se encontró el rival en el historial
    if (!rivalEncontrado) {
        alert("No se encontraron partidos contra " + nombreRival + ".");
    } else {
        // 5. Filtrar los partidos jugados contra el rival
        let partidos = rivalEncontrado.partidos;
        let totalGolesDefensores = 0;
        let totalGolesRival = 0;
    
        // 6. Sumar los goles de Defensores de Belgrano y del rival en todos los partidos
        for (let partido of partidos) {
            totalGolesDefensores += partido.golesDefensores;  // Sumar goles de Defensores de Belgrano
            totalGolesRival += partido.golesRival;  // Sumar goles del rival
        }
    
        // 7. Calcular los promedios de goles de Defensores y del rival
        let promedioGolesDefensores = totalGolesDefensores / partidos.length;
        let promedioGolesRival = totalGolesRival / partidos.length;
    
        // 8. Agregar aleatoriedad al resultado (puedes ajustar este comportamiento si lo deseas)
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
    
        // 9. Calcular la probabilidad de que cada equipo haga goles
        let probabilidadGolesDefensores = promedioGolesDefensores / (promedioGolesDefensores + promedioGolesRival) * 100;
        let probabilidadGolesRival = promedioGolesRival / (promedioGolesDefensores + promedioGolesRival) * 100;
    
        // 10. Determinar el resultado esperado basado en las probabilidades
        let resultadoEsperado = "Empatado";  // Suponemos que el resultado es empate por defecto
        if (probabilidadGolesDefensores > probabilidadGolesRival) {
            resultadoEsperado = "Ganado";  // Si la probabilidad de Defensores es mayor, se espera una victoria
        } else if (probabilidadGolesDefensores < probabilidadGolesRival) {
            resultadoEsperado = "Perdido";  // Si la probabilidad de Defensores es menor, se espera una derrota
        }
    
        // 11. Mostrar los resultados finales con los promedios de goles y las probabilidades
        let mensajeProbabilidad = "Resultado esperado Defensores De Belgrano VS " + rivalEncontrado.rival + ":\n\n" +
            "Goles de Defensores: " + Math.round(promedioGolesDefensores) + " " + probabilidadGolesDefensores.toFixed(2) + "%\n" +
            "Goles del rival: " + Math.round(promedioGolesRival) + " " + probabilidadGolesRival.toFixed(2) + "%\n" +
            "Resultado esperado: " + resultadoEsperado;
    
        console.log(mensajeProbabilidad);  // Mostramos el mensaje en la consola para depuración
        alert(mensajeProbabilidad);  // Mostramos el mensaje al usuario
    }
}

// FIN CONSIGNA MANIJA