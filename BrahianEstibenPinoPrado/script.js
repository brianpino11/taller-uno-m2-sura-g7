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

