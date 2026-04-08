// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto dependiendo de la dificultad (normal 1-10 / dificil 1-100)
// El jugador intenta adivinarlo
// El jugador tiene la opcion de poder reiniciar el juego las veces que quiera


// Asignacion de dificultad
let dificultad = 0;
let a=0;
while(dificultad != 1 && dificultad != 2){
  if(a>0){
    console.log("Inserta un numero correcto para la dificultad");
  }
  dificultad = prompt("Elige dificultad: Normal(Pon 1) / Dificil(Pon 2)");
  dificultad = Number(dificultad);
  a++;
}

// Juego en dificultad Normal
if(dificultad == 1){
  console.log('=== Adivina el Número ===');

  const numeroSecreto = Math.floor(Math.random() * 10) + 1;

  console.log('(DEBUG) Número secreto:', numeroSecreto);

  let i = 1;
  let intento = 0;

  // Bucle para los intentos, cuando se adivine o se pase de los 3 intentos se terminara el bucle
  while(intento != numeroSecreto && i< 4){
    intento = prompt(`Intento ${i} Adivina el número (1-10):`);
    intento = Number(intento);

    console.log(`Intento ${i}:`);
    if (isNaN(intento)) {
      console.log('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 10.');
    } else if (intento < 1 || intento > 10) {
      console.log('⚠️ El número debe estar entre 1 y 10.');
    } else if (intento === numeroSecreto) {
      console.log('🎉 ¡Correcto! El número era ' + numeroSecreto);
    } else if (intento > numeroSecreto) {
      console.log('📈 Muy alto. Intenta un número más bajo.');
    } else {
      console.log('📉 Muy bajo. Intenta un número más alto.');
    }
    // Aumento del numero de intentos
    if(intento != numeroSecreto){
      i++;
    }
  }
  if(i==4){
    console.log("Perdiste, no hallaste el numero correcto 😭");
  }
  console.log("=== Juego Terminado ===");
}

// Juego en Dificultad Dificil
if(dificultad ==  2){
  console.log('=== Adivina el Número ===');

  const numeroSecreto = Math.floor(Math.random() * 100) + 1;

  console.log('(DEBUG) Número secreto:', numeroSecreto);

  let i = 1;
  let intento = 0;

  // Bucle para los intentos, cuando se adivine o se pase de los 3 intentos se terminara el bucle
  while(intento != numeroSecreto && i< 4){
    intento = prompt(`Intento ${i} Adivina el número (1-100):`);
    intento = Number(intento);

    console.log(`Intento ${i}:`);
    if (isNaN(intento)) {
      console.log('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
    } else if (intento < 1 || intento > 100) {
      console.log('⚠️ El número debe estar entre 1 y 100.');
    } else if (intento === numeroSecreto) {
      console.log('🎉 ¡Correcto! El número era ' + numeroSecreto);
    } else if (intento > numeroSecreto) {
      console.log('📈 Muy alto. Intenta un número más bajo.');
    } else {
      console.log('📉 Muy bajo. Intenta un número más alto.');
    }
    // Aumento del numero de intentos
    if(intento != numeroSecreto){
    i++;
    }
  }
  if(i==4){
    console.log("Perdiste, no hallaste el numero correcto 😭");
  }
  console.log("=== Juego Terminado ===");
}

// Reinicio del juego al presionar el boton "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', () => {
  // Reinicio de valores
  dificultad = 0;
  a=0;
  while(dificultad != 1 && dificultad != 2){
    if(a>0){
      console.log("Inserta un numero correcto para la dificultad");
    }
    dificultad = prompt("Elige dificultad: Normal(Pon 1) / Dificil(Pon 2)");
    dificultad = Number(dificultad);
    a++;
  }

  // Juego en dificultad Normal
  if(dificultad == 1){
    console.log('=== Adivina el Número ===');

    const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    console.log('(DEBUG) Número secreto:', numeroSecreto);

    let i = 1;
    let intento = 0;

    // Bucle para los intentos, cuando se adivine o se pase de los 3 intentos se terminara el bucle
    while(intento != numeroSecreto && i< 4){
      intento = prompt(`Intento ${i} Adivina el número (1-10):`);
      intento = Number(intento);

      console.log(`Intento ${i}:`);
      if (isNaN(intento)) {
        console.log('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 10.');
      } else if (intento < 1 || intento > 10) {
        console.log('⚠️ El número debe estar entre 1 y 10.');
      } else if (intento === numeroSecreto) {
        console.log('🎉 ¡Correcto! El número era ' + numeroSecreto);
      } else if (intento > numeroSecreto) {
        console.log('📈 Muy alto. Intenta un número más bajo.');
      } else {
        console.log('📉 Muy bajo. Intenta un número más alto.');
      }
      // Aumento del numero de intentos
      if(intento != numeroSecreto){
      i++;
      }
    }
    if(i==4){
      console.log("Perdiste, no hallaste el numero correcto 😭");
    }
    console.log("=== Juego Terminado ===");
  }

  // Juego en Dificultad Dificil
  if(dificultad ==  2){
    console.log('=== Adivina el Número ===');

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    console.log('(DEBUG) Número secreto:', numeroSecreto);

    let i = 1;
    let intento = 0;

    // Bucle para los intentos, cuando se adivine o se pase de los 3 intentos se terminara el bucle
    while(intento != numeroSecreto && i< 4){
      intento = prompt(`Intento ${i} Adivina el número (1-100):`);
      intento = Number(intento);

      console.log(`Intento ${i}:`);
      if (isNaN(intento)) {
        console.log('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
      } else if (intento < 1 || intento > 100) {
        console.log('⚠️ El número debe estar entre 1 y 100.');
      } else if (intento === numeroSecreto) {
        console.log('🎉 ¡Correcto! El número era ' + numeroSecreto);
      } else if (intento > numeroSecreto) {
        console.log('📈 Muy alto. Intenta un número más bajo.');
      } else {
        console.log('📉 Muy bajo. Intenta un número más alto.');
      }
      // Aumento del numero de intentos
      if(intento != numeroSecreto){
      i++;
      }
    }
    if(i==4){
      console.log("Perdiste, no hallaste el numero correcto 😭");
    }
    console.log("=== Juego Terminado ===");
  }
})