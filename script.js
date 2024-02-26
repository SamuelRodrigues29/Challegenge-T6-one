const textoInput = document.getElementById('input-texto');

const outInput = document.getElementById("output");


  function criptografar(){
    let texto = textoInput.value;

    let cripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById("output").innerHTML = `<textarea readonly id="input-texto">${cripto} 
  </textarea><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}

 function descriptografar(){
    let texto = textoInput.value;

    let descripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    document.getElementById("output").innerHTML = `<textarea readonly id="input-texto">${cripto} 
  </textarea><button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}

function copiar() {
    var textoCop = document.getElementById("input-texto");
    textoCop.select();
    document.execCommand('copy');
}