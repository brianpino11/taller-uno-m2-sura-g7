//Ejercicio 1: Lista del Súpermercado

let compras = ["Manzanas"];
compras.push("Leche", "Pan");
compras.unshift("Huevos");
compras.splice(1, 1);
console.log(compras);

// Ejercicio 2: Pila de Tareas Pendientes (LIFO)

let tareas = ["Revisar emails"];
tareas.unshift("Llamar al cliente");
tareas.unshift("Preparar reporte");
tareas.shift();
tareas.shift();
console.log(tareas);

// Ejercicio 3: Pila de Historial (LIFO)

let historial = ["google.com", "youtube.com", "facebook.com"];
historial.pop();
historial.pop();
console.log(historial);

// Ejercicio 4: Cola de Impresión (FIFO)

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];
colaImpresion.shift();
colaImpresion.push("doc4.txt");
colaImpresion.shift();
console.log(colaImpresion);

// Ejercicio 5: Fila del Banco (Splice)

let fila = ["Ana", "Luis", "Carlos", "Maria"];
fila.splice(1, 1);
fila.splice(1, 0, "Jorge");
console.log(fila);

// Ejercicio 6: Mazo de Cartas

let mazo = ["As", "Rey", "Reina", "Jota"];
mazo.reverse();
mazo.shift();
console.log(mazo);

// Ejercicio 7: Gestión de Asientos de Cine

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];
asientos.fill("Reservado", 1, 4);
console.log(asientos);

// Ejercicio 8: Reemplazar Elemento

let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];
productos.splice(2, 1, "Mouse Nuevo");
console.log(productos);

// Ejercicio 9: Orden Alfabético (Sort)

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];
estudiantes.sort();
console.log(estudiantes);

// Ejercicio 10: Vaciar un Arreglo (Fill)

let puntuaciones = [100, 85, 92, 78];
puntuaciones.fill(0);
console.log(puntuaciones);

// Ejercicio 11: Carrito de Compras (Combinado)

let carrito = [];
carrito.push("Camisa", "Pantalón");
carrito.unshift("Zapatos");
carrito.splice(1, 1);
console.log(carrito);