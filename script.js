let btnEncriptar = document.querySelector(".btnEncriptar");
let btnDesencriptar = document.querySelector(".btnDesencriptar");
let btnCopiar = document.querySelector(".btnCopiar");

function encriptar() {
  let texto = document.querySelector(".texto").value;

  let textoCifrado = texto
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi,"ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

  if (texto != "" && !/[A-Z]/g.test(texto) && !/[á-ú]/g.test(texto) && texto.trim().length) {
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".mensajeSinEncriptar").style.display = "none";
    document.querySelector(".containerEncriptado").style.display = "flex";
    document.querySelector(".textoResultado").value = textoCifrado;
    console.log(texto.length);

    let mediaQuery = window.matchMedia('(max-width: 48rem)');
    if (mediaQuery.matches) {
      let altura = texto.length < 70 ? 30 : (texto.length / 3);
      document.querySelector(".seccion2").style.height = `${altura}vh`
    }
    document.querySelector(".texto").value = "";
  } else {
    alert("Debes ingresar un texto en minúsculas sin acentos.");
  }
}

function desencriptar() {
  let texto = document.querySelector(".texto").value;

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto != "" && !/[A-Z]/g.test(texto) && !/[á-ú]/g.test(texto) && texto.trim().length) {
    document.querySelector(".munieco").style.display = "none";
    document.querySelector(".mensajeSinEncriptar").style.display = "none";
    document.querySelector(".containerEncriptado").style.display = "flex";
    document.querySelector(".textoResultado").value = textoCifrado;
    console.log(texto.length);

    let mediaQuery = window.matchMedia('(max-width: 48rem)');
    if (mediaQuery.matches) {
      let altura = texto.length < 70 ? 30 : (texto.length / 3);
      document.querySelector(".seccion2").style.height = `${altura}vh`
    }
    document.querySelector(".texto").value = "";
  } else {
    alert("Debes ingresar un texto en minúsculas sin acentos.");
  }
}

function copiar(){
  let resultado = document.querySelector(".textoResultado");
  resultado.setSelectionRange(0, 99999); /* Para dispositivos móviles. */
  navigator.clipboard.writeText(resultado.value);
  alert("¡Texto copiado!")
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);