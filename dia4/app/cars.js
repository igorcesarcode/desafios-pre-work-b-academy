const urlEl = document.querySelector('[data-js="ulrCar"]')
const marcaEl = document.querySelector('[data-js="marca"]')
const anoEl = document.querySelector('[data-js="ano"]')
const placaEl = document.querySelector('[data-js="placa"]')
const corEl = document.querySelector('[data-js="corcarro"]')
const formCarEl = document.querySelector('[data-js="formCar"]')
const cartableEl = document.querySelector('[data-js="tableCar"]')
const primiraLinhaTabelaEl = document.querySelector('[data-js="primeiraLinha"]')
import { carros } from './main'





formCarEl.addEventListener("submit", function(event){
  event.preventDefault()
  setCarsPost(urlEl.value, marcaEl.value, anoEl.value, placaEl.value, corEl.value)
  setFormCarros()
  formCarEl.reset()
  urlEl.focus()
});

function setFormCarros(){

  let index = cartableEl.rows.length - 1

  let novaLinha = (`
  <tr>
  <td><img  src="${carros[index].image}"></td>
  <td>${carros[index].brandModel}</td>
  <td>${carros[index].year}</td>
  <td>${carros[index].plate}</td>
  <td style="background-color:${carros[index].color};">${carros[index].color}</td>
  </tr>`)
  primiraLinhaTabelaEl.insertAdjacentHTML('afterend', novaLinha);

}

function popularLinhas(){
  console.log(carros)
  let totalDeCarros = carros.length
  let totalDeLinhasDeCarros = cartableEl.rows.length-1

  if(totalDeLinhasDeCarros<totalDeCarros){
    setFormCarros()
    popularLinhas()
  }else{
    console.log('Linhas Populadas')
  }
}
String.prototype.normalizar = function() {
  let temp = this.toUpperCase()
  temp = temp.replace(/\w{3}\-\d{5}/)
  console.log(temp)
  return temp
}
placaEl.addEventListener('input', (e)=>{

  e.target.value = e.target.value.normalizar()
  console.log(e.target.value.normalizar())
})


//popularLinhas()

