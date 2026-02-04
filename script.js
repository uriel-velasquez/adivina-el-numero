let botonProbar = document.getElementById("probar");
let botonReiniciar = document.getElementById("reiniciar");
let resultado = document.getElementById("resultado");
let intentosTexto = document.getElementById("intentos");
let input = document.getElementById("intento");
let dificultad = document.getElementById("dificultad");

let numeroSecreto;
let intentos;

function iniciarJuego() {
  let max = Number(dificultad.value);
  numeroSecreto = Math.floor(Math.random() * max) + 1;
  intentos = 0;

  resultado.innerText = "";
  intentosTexto.innerText = "Intentos: 0";
  input.value = "";
}

iniciarJuego();

botonProbar.addEventListener("click", function () {botonProbar.addEventListener("click", function () {

  // 1️⃣ Validar que escribió algo
  if (input.value === "") {
    resultado.innerText = "⚠️ Escribí un número primero";
    return;
  }

  let numeroUsuario = Number(input.value);
  let max = Number(dificultad.value);

  // 2️⃣ Validar rango
  if (numeroUsuario < 1 || numeroUsuario > max) {
    resultado.innerText = "⚠️ El número debe estar entre 1 y " + max;
    return;
  }

  intentos++;

  // 3️⃣ Lógica del juego
  if (numeroUsuario === numeroSecreto) {
    resultado.innerText = "🎉 ¡Ganaste! El número era " + numeroSecreto;
    botonProbar.disabled = true;
  } else if (numeroUsuario < numeroSecreto) {
    resultado.innerText = "📈 Más alto";
  } else {
    resultado.innerText = "📉 Más bajo";
  }

  intentosTexto.innerText = "Intentos: " + intentos;
});

  let numeroUsuario = Number(input.value);
  intentos++;

  if (numeroUsuario === numeroSecreto) {
    resultado.innerText = "🎉 ¡Ganaste! El número era " + numeroSecreto;
    botonProbar.disabled = true;
  } else if (numeroUsuario < numeroSecreto) {
    resultado.innerText = "📈 Más alto";
  } else {
    resultado.innerText = "📉 Más bajo";
  }

  intentosTexto.innerText = "Intentos: " + intentos;
});

botonReiniciar.addEventListener("click", function () {
  botonProbar.disabled = false;
  iniciarJuego();
});


