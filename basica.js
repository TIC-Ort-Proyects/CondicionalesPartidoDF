document.addEventListener("DOMContentLoaded", function() {
    let btnBasica = document.getElementById("basica");
    btnBasica.addEventListener("click", function() {

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
    });
});