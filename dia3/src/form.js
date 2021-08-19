//Exercício 1

const textoDigitado = document.querySelector('[data-js="textname"]')

String.prototype.normalizar = function() {
  //Deixa Todo Mundo minusculo
  let temp = this.toLowerCase();
  //Deixa as Primeiras letras em maiusculo.
  return temp.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
  //Deixas os "de", "da", "do" ou "dos" em minusculos
  //Não Conseguir achar o regex pra isso.
}

textoDigitado.addEventListener('input', (e)=>{
  e.target.value = e.target.value.normalizar()
  console.log(temp)

})


//Exercício 2
