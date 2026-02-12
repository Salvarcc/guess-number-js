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

let ciudad = prompt("En que ciudad vives?");
let saludo3 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años y vives en ${ciudad}.`;
console.log(saludo3);

let anio100 = anioNacimiento + 100;
let indicacion = `Cumpliras 100 años en el año ${anio100}.`;
console.log(indicacion);

if (edadUsuario >= 18) {
    console.log("Eres mayor de edad.");
}
else {
    console.log("Eres menor de edad.");
}