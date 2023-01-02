/* --------------------   ENCRIPTAR   -------------------- */

function encriptar() {
  var copiar = document.getElementById("copy-button");
  function copiarTexto() {
    navigator.clipboard.writeText(palabra);
  }

  var texto = document.querySelector("textarea").value;
  var palabra = "";

  for (i = 0; i <= texto.length; i++) {
    if (texto.charAt(i) == "a") {
      var palabra = palabra + "ai";
    } else if (texto.charAt(i) == "e") {
      var palabra = palabra + "enter";
    } else if (texto.charAt(i) == "i") {
      var palabra = palabra + "imes";
    } else if (texto.charAt(i) == "o") {
      var palabra = palabra + "ober";
    } else if (texto.charAt(i) == "u") {
      var palabra = palabra + "ufat";
    } else {
      var palabra = palabra + texto.charAt(i);
    }
  }

  console.log(palabra);

  (button.onclick = document.getElementById("contenido-frame").style.display =
    "none"),
    (document.getElementById("after-encript").style.display = "block"),
    (document.getElementById("texto-after-encript").innerHTML = palabra),
    (document.getElementById("copy-button").style.display = "block");

  copiar.onclick = copiarTexto;

  document.querySelector("textarea").value = "";
  document.querySelector("textarea").focus();
}

/* --------------------   DESENCRIPTAR   -------------------- */

function desencriptar() {
  var texto = document.querySelector("textarea").value;
  var palabra = "";

  var posicion = texto.indexOf("ai");

  while (posicion >= 0) {
    texto = texto.slice(0, posicion) + "a" + texto.slice(posicion + 2);
    posicion = texto.indexOf("ai");
  }

  var posicion = texto.indexOf("enter");

  while (posicion >= 0) {
    texto = texto.slice(0, posicion) + "e" + texto.slice(posicion + 5);
    posicion = texto.indexOf("enter");
  }

  var posicion = texto.indexOf("imes");

  while (posicion >= 0) {
    texto = texto.slice(0, posicion) + "i" + texto.slice(posicion + 4);
    posicion = texto.indexOf("imes");
  }

  var posicion = texto.indexOf("ober");

  while (posicion >= 0) {
    texto = texto.slice(0, posicion) + "o" + texto.slice(posicion + 4);
    posicion = texto.indexOf("ober");
  }

  var posicion = texto.indexOf("ufat");

  while (posicion >= 0) {
    texto = texto.slice(0, posicion) + "u" + texto.slice(posicion + 4);
    posicion = texto.indexOf("ufat");
  }

  console.log(texto);

  (button.onclick = document.getElementById("contenido-frame").style.display =
    "none"),
    (document.getElementById("after-encript").style.display = "block"),
    (document.getElementById("texto-after-encript").innerHTML = texto),
    (document.getElementById("copy-button").style.display = "none");

  document.querySelector("textarea").value = "";
  document.querySelector("textarea").focus();
}

var button = document.getElementById("button-encriptar");
button.addEventListener("click", encriptar);

document.querySelector("textarea").focus();
