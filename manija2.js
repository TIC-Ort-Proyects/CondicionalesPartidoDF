document.addEventListener("DOMContentLoaded", function() {
    let btnManija2 = document.getElementById("manija2");
    btnManija2.addEventListener("click", function() {
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
    });
});