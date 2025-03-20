let numeroPropuesto = Math.floor(Math.random() * 100);
console.log(numeroPropuesto);
let numIntentos = 10;
let numIntentados = 0;

document.addEventListener("DOMContentLoaded", () => {
  let $form = document.getElementById("formulario");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    adivinarNumeroMagico(numeroPropuesto);
  });
});

const adivinarNumeroMagico = (numeroPropuesto) => {
  let numeroIngresado = parseInt(document.getElementById("numero").value);
  if (Number.isInteger(numeroIngresado)) {
    evaluar(numeroPropuesto, numeroIngresado);
  } else {
    mostrarResultado("Numero no valido.");
  }
};

const evaluar = (numeroPropuesto, numeroIngresado) => {
  if (numeroPropuesto === numeroIngresado) {
    alert(`¡Felicidades, adivinaste el numero!`);
    reiniciarJuego();
  } else if (maxAlcanzado()) {
    alert("Haz alcanzado el numero maximo de intentos");
    reiniciarJuego();
  } else if (numeroPropuesto > numeroIngresado) {
    actualizarNumeroDeIntentos();
    mostrarResultado(`El numero es mayor que: ${numeroIngresado}`);
  } else if (numeroPropuesto < numeroIngresado) {
    actualizarNumeroDeIntentos();
    mostrarResultado(`El numero es menor que: ${numeroIngresado}`);
  }
};

const mostrarResultado = (resultado) => {
  const message = document.createElement("p");
  message.innerHTML = resultado;
  document.getElementById("mensajes").appendChild(message);
};

const limpiarResultados = () => {
  document.getElementById("mensajes").innerHTML = "";
};

const reiniciarJuego = () => {
  const reset = confirm("Deseas iniciar un nuevo juego?");
  if (reset) {
    numeroPropuesto = Math.floor(Math.random() * 100);
    numIntentados = 0;
    console.log(numeroPropuesto);
    actualizarNumeroDeIntentos();
    limpiarResultados();
    document.getElementById("numero").disabled = false;
  } else {
    document.getElementById("numero").disabled = true;
  }
};

const actualizarNumeroDeIntentos = () => {
  document.getElementById(
    "numIntentos"
  ).innerText = `Llevas ${numIntentados} de ${numIntentos} intentos.`;
};

const maxAlcanzado = () => {
  if (numIntentados < numIntentos - 1) {
    numIntentados++;
    return false;
  }
  return true;
};
