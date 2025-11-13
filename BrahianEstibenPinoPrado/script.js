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

// Ejercicio 12: Control de Versiones (Simple)

let commits = ["v1.0", "v1.1"];
commits.push("v1.2");
commits.pop();
commits.push("v1.2-corregido");
console.log(commits);

// Ejercicio 13: Receta de Cocina

let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];
receta.unshift("Paso 1: Pre-calentar horno");
receta.push("Paso 4: Servir");
console.log(receta);

// Ejercicio 14: Invertir y Reemplazar

let palabras = ["uno", "dos", "cuatro"];
palabras.reverse();
palabras.splice(0, 1, "tres");
console.log(palabras);

// Ejercicio 15: Equipo de Proyecto

let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];
equipo.splice(1, 1);
equipo.push("Pedro (Dev)", "Luisa (Dev)");
console.log(equipo);

// Ejercicio 16: Puestos de Estacionamiento

let parking = ["CarroA", "Libre", "Libre", "CarroB"];
parking.splice(0, 1);
parking.splice(0, 2, "MotoA", "MotoB");
console.log(parking);