var criptar = document.querySelector("#btn-criptografar");
criptar.addEventListener("click", function(event){
  event.preventDefault();
  var textoDeEntrada = document.querySelector("#input-texto").value;
  // Validar a String do campo INPUT.....

  var textoValido = encriptarTexto(textoDeEntrada);

  // Retorno do texto á página.......
  var exibeTextoNaPagina = document.querySelector("#out-texto");
  exibeTextoNaPagina.textContent = textoValido;
});

function isValido(texto) {
  if (!texto.length >= 1 ){
    console.log("Campo não pode está vázio!");
  }
  if( !texto == /[A-Z]g/) {
    console.log("Digite palavras minúscula!");
  }
  return texto;
}

function encriptarTexto(texto){
    var encriptado = texto.replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    return encriptado;

}
