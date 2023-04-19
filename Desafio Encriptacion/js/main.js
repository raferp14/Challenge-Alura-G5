document.querySelector('button[name="botonEncriptar"]').addEventListener('click', function() {
  var texto = document.querySelector('textarea[name="cajaEncriptar"]').value;
  texto = texto.replace(/[aeiou]/g, function(match) {
    switch (match) {
      case 'a':
        return 'ai';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
    }
  });
  var textareaDestino = document.querySelector('textarea[name="cajaEncriptado"]');
  textareaDestino.value = texto;
  textareaDestino.style.backgroundImage = 'none';
});




document.querySelector('button[name="botonDesencriptar"]').addEventListener('click', function() {
  var texto = document.querySelector('textarea[name="cajaEncriptar"]').value;
  var textareaDestino = document.querySelector('textarea[name="cajaEncriptado"]');
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  textareaDestino.value = texto;
  textareaDestino.style.backgroundImage = 'none';
});





var textareaDestino = document.querySelector('textarea[name="cajaEncriptado"]');
var copyButton = document.querySelector('button[name="botonCopiar"]');

copyButton.addEventListener('click', function() {
    var text = textareaDestino.value;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
});

function limpiarTextarea1() {
  document.querySelector('textarea[name="cajaEncriptar"]').value = '';
}
function limpiarTextarea2() {
  document.querySelector('textarea[name="cajaEncriptado"]').value = '';
}