// alert("hola mundo");
const nav = document.querySelector('.barra_1');

window.addEventListener('scroll', function () {
  nav.classList.toggle('active', window.scrollY > -10)
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function encriptar() {
  var texto = document.getElementById("mensaje").value;
  if (texto.length == 0) {
    alert("No se ha ingresado texto");
    return;
  }
  var remplaza;
  var re_incrementa = "";
  for (i = 0; i < texto.length; i++) {
    remplaza = String.fromCharCode(texto.charCodeAt(i) + 7);
    re_incrementa = re_incrementa + remplaza;
  }
  document.getElementById("resultado").value = re_incrementa;
}


function desencriptar() {
  var texto = document.getElementById("resultado").value;
  if (texto.length == 0) {
    alert("Porfavor primero encripte un texto");
    return;
  }
  var remplaza;
  var re_incrementa = "";
  for (i = 0; i < texto.length; i++) {
    remplaza = String.fromCharCode(texto.charCodeAt(i) - 7);
    re_incrementa = re_incrementa + remplaza;
    
  }
  document.getElementById("original").value = re_incrementa;
}