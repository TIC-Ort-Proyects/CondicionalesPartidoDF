document.addEventListener("DOMContentLoaded", function() {
    let btnBasica = document.getElementById("basica");
    btnBasica.addEventListener("click", function() {
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
    });
});