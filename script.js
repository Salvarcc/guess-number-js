// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);

if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else {
  alert('❌ Incorrecto. El número era ' + numeroSecreto);
}