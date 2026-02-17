// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log('(DEBUG) Número secreto:', numeroSecreto);

let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

if (isNaN(intento)) {
  alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
} else if (intento < 1 || intento > 100) {
  alert('⚠️ El número debe estar entre 1 y 100.');
} else if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
}

let diferencia = Math.abs(intento - numeroSecreto);
let cercania = 0

if (diferencia <= 5) {
    cercania = 'Hirviendo';
}
else if (diferencia <= 15){
    cercania = 'caliente';
}
else if (diferencia <= 30){
    cercania = 'tibio';
}
else {
    cercania = 'frio';
}
console.log(cercania);

let intento2 = 0;

if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
  intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
  } else if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
  } else {
    let pista = intento2 > numeroSecreto ? '📈 Muy alto. Intenta un número más bajo.' : '📉 Muy bajo. Intenta un número más alto.';
    alert(pista);
  }
}

diferencia = Math.abs(intento2 - numeroSecreto);
cercania = 0

if (diferencia <= 5) {
    cercania = 'Hirviendo';
}
else if (diferencia <= 15){
    cercania = 'caliente';
}
else if (diferencia <= 30){
    cercania = 'tibio';
}
else {
    cercania = 'frio';
}
console.log(cercania);

if (!isNaN(intento2) && intento2 >= 1 && intento2 <= 100 && intento2 !== numeroSecreto) {
  let intento3 = prompt('Intenta de nuevo (1-100):');
  intento3 = Number(intento3);

  if (isNaN(intento3) || intento3 < 1 || intento3 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
  } else if (intento3 === numeroSecreto) {
    alert('🎉 ¡Correcto en el tercer intento! El número era ' + numeroSecreto);
  } else {
    let pista = intento3 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
  }
}