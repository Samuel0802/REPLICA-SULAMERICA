//VALIDAÇÃO DE NOME
var nomeProduto = document.querySelector('input[name=nome]');
nomeProduto.onkeyup = function () {
  var patterns = /[^a-z-ã-ç-A-Z- -]/g;
  var caretPos = this.selectionStart;

  this.value = nomeProduto.value.replace(patterns, '');
  this.setSelectionRange(caretPos, caretPos);
}

//VALIDAÇÃO DE TELEFONE

var valorProduto = document.querySelector('input[name=telefone]');
valorProduto.onkeyup = function () {
  var patterns = /[^0-9-,(-)]/g;
  var caretPos = this.selectionStart;

  this.value = valorProduto.value.replace(patterns, '');
  this.setSelectionRange(caretPos, caretPos);
}



//MASCARA DE CELULAR
const input = document.querySelector('#celPhone');

input.addEventListener('keypress', () => {
  let inputlength = input.value.length

  if(inputlength === 0){
    input.value += '('
  }
  else if(inputlength === 3){
   input.value += ')'
  }
  else if(inputlength == 9){
    input.value += '-'
  }
})