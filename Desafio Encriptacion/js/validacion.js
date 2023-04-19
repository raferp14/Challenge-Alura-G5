var textarea = document.querySelector('textarea[name="cajaEncriptar');
textarea.addEventListener('input', function() {
    var value = this.value;
    var newValue = value.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(char) {
        return char.toLowerCase();
    });
    newValue = newValue.replace(/[^a-z0-9\s]/g, '');
    if (value !== newValue) {
        this.value = newValue;
    }
});



let clicked = false;
document.querySelector('textarea[name="cajaEncriptar"]').addEventListener('click', function() {
  if (!clicked) {
    this.value = '';
    clicked = true;
  }
});