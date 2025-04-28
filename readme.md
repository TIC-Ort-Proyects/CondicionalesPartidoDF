# Condicionales: Sistema de Compra de Entradas

Esta actividad consiste en un sistema para que los usuarios puedan comprar entradas para el próximo partido de **Defensores de Belgrano**

## Consigna Básica

### Descripción

El programa debe permitir a los usuarios comprar entradas para el próximo partido de **Defensores de Belgrano** y aplicar un descuento si es que poseen un código válido. El sistema deberá validar los datos ingresados por el usuario y calcular el total de la compra.

### Requerimientos

1. **Seleccionar tipo de entrada**:
    - **Entrada 1**: $25.000
    - **Entrada 2**: $45.000
    - **Entrada 3**: $65.000

2. **Solicitar la cantidad de entradas**: El usuario debe especificar cuántas entradas desea comprar.

3. **Código de descuento**: El programa debe permitir al usuario ingresar un código de descuento. Si el código ingresado es válido (en este caso, **"DESCUENTO10"**), se aplicará un descuento del 10%.

4. **Validaciones**:
    - Verificar que el tipo de entrada esté dentro de las opciones válidas (1, 2, o 3).
    - Validar que la cantidad de entradas sea un número positivo y razonable (máximo 100).
    - Validar que el código de descuento, si se ingresa, sea correcto.

5. **Calcular el total**: El programa debe calcular el total de la compra, teniendo en cuenta el descuento (si aplica).

6. **Mostrar resumen de la compra**: El programa debe mostrar un resumen con los siguientes detalles:
    - Tipo de entrada
    - Cantidad de entradas
    - Precio por entrada
    - Descuento aplicado (si corresponde)
    - Total a pagar

7. **Manejo de errores**: Si los datos ingresados son inválidos en algún momento, el programa debe mostrar un mensaje de error correspondiente.

---

## Consigna Manija 1

### Descripción

Ampliar el sistema para que calcule la probabilidad de que **Defensores de Belgrano** haga X goles en el próximo partido, basándose en su historial contra un rival específico.

### Requerimientos

1. **Solicitar nombre del rival**: El sistema debe pedir al usuario el nombre del rival al que se enfrentará **Defensores de Belgrano**.

2. **Buscar historial de partidos**: El sistema debe buscar en un arreglo de objetos los partidos previos jugados contra ese rival. Cada objeto debe contener:
    - Nombre del rival
    - Goles de **Defensores de Belgrano**
    - Goles del rival
    - Resultado del partido (ganado, empatado o perdido)

3. **Filtrar los partidos previos contra el rival**: Si el rival ingresado tiene partidos previos registrados, el sistema debe calcular el promedio de goles de **Defensores de Belgrano** y el rival.

4. **Validaciones**: Si no se encuentran partidos contra el rival ingresado, mostrar un mensaje de error.

5. **Cálculo de probabilidades**:
    - Sumar los goles de **Defensores de Belgrano** y del rival.
    - Dividir cada suma entre la cantidad total de partidos jugados contra ese rival.
    - Agregar aleatoriedad al resultado:
      - Si el número aleatorio es menor a 0.5, sumar entre 0 y 2 goles a **Defensores de Belgrano**.
      - Si el número aleatorio es mayor a 0.5, sumar entre 0 y 2 goles al rival.
    - Calcular las probabilidades de hacer goles basándose en los promedios calculados.

6. **Mostrar resultados**: Mostrar los siguientes resultados:
    - Probabilidad de goles de **Defensores de Belgrano** y del rival.
    - Promedio de goles de **Defensores de Belgrano** y del rival.
    - Resultado esperado (ganado, empatado o perdido).

---

## Consigna Manija 2

### Descripción

Ampliar el sistema de cálculo de probabilidades para incluir un intervalo de empate. En lugar de simplemente añadir aleatoriedad, cuando el número aleatorio esté en el intervalo **[0.45, 0.55]**, se debe promediar los goles de **Defensores de Belgrano** y del rival.

### Requerimientos

1. **Agregar intervalo para empate**:
    - Si el número aleatorio es menor a **0.45**, sumar entre 0 y 2 goles a **Defensores de Belgrano**.
    - Si el número aleatorio es mayor a **0.55**, sumar entre 0 y 2 goles al rival.
    - Si el número aleatorio está entre **0.45 y 0.55** (inclusive), promediar los goles de **Defensores de Belgrano** y del rival.

2. **Actualizar cálculos**: Ajustar la probabilidad de goles basándose en el nuevo cálculo de goles promediados si el número aleatorio se encuentra en el intervalo de empate.

3. **Mostrar resultados**: El mensaje final debe incluir:
    - Nombre del rival.
    - Promedio de goles de **Defensores de Belgrano** y del rival.
    - Probabilidad de hacer goles.
    - Resultado esperado (ganado, empatado o perdido).