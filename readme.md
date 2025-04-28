# Condicionales: Sistema de Compra de Entradas

Esta actividad consiste en un sistema para que los usuarios puedan comprar entradas para el próximo partido de **Defensores de Belgrano**

## Consigna Básica

### Descripción

El programa debe permitir a los usuarios comprar entradas para el próximo partido de **Defensores de Belgrano** y aplicar un descuento si es que poseen un código válido. El sistema deberá calcular el total de la compra.

### Requerimientos

1. **Seleccionar tipo de entrada**:

    | Tipo de entrada | Precio  |
    | --------------- | ------- |
    | Entrada 1       | $25.000 |
    | Entrada 2       | $45.000 |
    | Entrada 3       | $65.000 |

2. **Solicitar la cantidad de entradas**: El usuario debe especificar cuántas entradas desea comprar.

3. **Código de descuento**: El programa debe permitir al usuario ingresar un código de descuento. Si el código ingresado es válido (en este caso, **"ELJUEGO"**), se aplicará un descuento del 10%.

4. **Calcular el total**: El programa debe calcular el total de la compra, teniendo en cuenta el descuento (si aplica).

5. **Mostrar el total de la compra**: El programa debe mostrar el total de la compra de las entradas.

---

## Consigna Manija 1

### Descripción

Ampliar el sistema para que calcule la probabilidad de que **Defensores de Belgrano** haga X goles en el próximo partido, basándose en su historial contra un rival específico.

### Requerimientos

1. **Solicitar el total de goles de DF y del rival, y el total de partidos jugados**: El sistema debe pedir al usuario que ingrese el total de goles que hizo Defensores de Belgrano y el rival, y el total de partidos jugados para sacar promedios. El total de goles y partiddos es el siguiente:

| Rival              | Total Goles Defensores | Total Goles Rival | Total Partidos |
|--------------------|-----------------------:|------------------:|---------------:|
| Atlanta            |                     14 |                11 |             10 |
| All Boys           |                     13 |                12 |             10 |
| Chacarita Juniors  |                     15 |                13 |             10 |
| Flandria           |                     15 |                10 |             10 |
| Platense           |                     15 |                13 |             10 |
| Barracas Central   |                     15 |                11 |             10 |

2. **Cálculo de probabilidades**:
    - Dividir el total de goles de cada equipo entre la cantidad total de partidos jugados contra ese rival para sacar el promedio.
    - Agregar aleatoriedad al resultado:
      - Investiga [Math.random()](https://www.w3schools.com/js/js_random.asp)
      - Si el número aleatorio es menor a 0.5, sumar entre 0 y 2 goles a **Defensores de Belgrano**.
      - Si el número aleatorio es mayor a 0.5, sumar entre 0 y 2 goles al rival.
    - Calcular las probabilidades de hacer X goles basándose en los promedios calculados.

6. **Mostrar resultados**: Mostrar los siguientes resultados:
    - Goles esperados de **Defensores de Belgrano** y del rival.
    - % De probabilidad de esos goles de **Defensores de Belgrano** y del rival.
    - Resultado esperado (ganado, empatado o perdido).

---

## Consigna Manija 2

### Descripción

Ampliar el sistema de cálculo de probabilidades para incluir un intervalo de empate. En lugar de simplemente añadir aleatoriedad, cuando el número aleatorio esté en el intervalo **[0.45, 0.55]**.

### Requerimientos

1. **Agregar intervalo para empate**:
    - Si el número aleatorio es menor a **0.45**, sumar entre 0 y 2 goles a **Defensores de Belgrano**.
    - Si el número aleatorio es mayor a **0.55**, sumar entre 0 y 2 goles al rival.
    - Si el número aleatorio está entre **0.45 y 0.55** (inclusive), promediar los goles de **Defensores de Belgrano** y del rival.
