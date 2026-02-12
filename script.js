// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuántos años tienes?');

// --- Salida al usuario ---
alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.');

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);
console.log('Tipo de edad:', typeof edadUsuario);



let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años y naciste en el año ${anioNacimiento}.`;
console.log(saludo2);