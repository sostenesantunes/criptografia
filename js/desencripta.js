  var desencripta = document.querySelector("#btn-descriptografar");
  desencripta.addEventListener("click", function(event){
  event.preventDefault();

  var textoDeEntradaEncriptado = document.querySelector("#input-texto").value;
  var textoADesencriptar = desencriptarTexto(textoDeEntradaEncriptado);
  console.log(textoADesencriptar);
  var exibeNaPagina = document.querySelector("#out-texto");
  exibeNaPagina.textContent = textoADesencriptar;

});

function desencriptarTexto(texto){
  var textoDesencriptado = texto.replace(/enter/g,"e")
  .replace(/imes/g,"i")
  .replace(/ai/g,"a")
  .replace(/ober/g,"o")
  .replace(/ufat/g,"u");
  return textoDesencriptado;
}
