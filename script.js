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
  console.log('Resultado: ¡GANÓ!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
  console.log('Resultado: muy alto');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
  console.log('Resultado: muy bajo');
}

if (intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento!');
  } else if (intento2 > numeroSecreto) {
    alert('📈 Muy alto. El número era ' + numeroSecreto);
  } else {
    alert('📉 Muy bajo. El número era ' + numeroSecreto);
  }
}