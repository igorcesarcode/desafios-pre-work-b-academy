//Exercício 1

const textoDigitado = document.querySelector('[data-js="textname"]')
const naoDas =['Da', 'Das', 'De', 'Do', 'Dos']
String.prototype.normalizar = function() {
  //Deixa Todo Mundo minusculo
  let temp = this.toLowerCase();
  //Deixa as Primeiras letras em maiusculo.
  temp = temp.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
  //Deixas os "de", "da", "do" ou "dos" em minusculos
  //Não Conseguir achar o regex pra isso.
  return temp

}
textoDigitado.addEventListener('input', (e)=>{
  e.target.value = e.target.value.normalizar()
})


//Exercício 2
const corSelecionada = document.querySelector('[data-js="coresSelecionada"]')
const app = document.querySelector('[data-js="cordiv"]')
console.log(corSelecionada.selectedOptions)

corSelecionada.addEventListener('change', (e) => {
  let dados = [];
  [...e.target.selectedOptions].map(el =>
  dados = [...dados ,(`<div class="quadrado" style="background-color: ${el.value};">${el.value} </div>`)])
  app.innerHTML = dados.toString().replace(/,/g, "")
})
