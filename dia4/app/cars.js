//Exercício 3
const urlEl = document.querySelector('[data-js="ulrCar"]')
const marcaEl = document.querySelector('[data-js="marca"]')
const anoEl = document.querySelector('[data-js="ano"]')
const placaEl = document.querySelector('[data-js="placa"]')
const corEl = document.querySelector('[data-js="corcarro"]')
const formCarEl = document.querySelector('[data-js="formCar"]')
const cartableEl = document.querySelector('[data-js="tableCar"]')
const primiraLinhaTabelaEl = document.querySelector('[data-js="primeiraLinha"]')

const carros = {
  urls: [],
  marcas:[],
  anos:[],
  placas:[],
  cors:[],

}

function setCarros(urls,marcas,anos,placas,cors){
  carros.urls = [...carros.urls,urls]
  carros.marcas = [...carros.marcas,marcas]
  carros.anos = [...carros.anos,anos]
  carros.placas = [...carros.placas,placas]
  carros.cors = [...carros.cors,cors]
}


formCarEl.addEventListener("submit", function(event){
  event.preventDefault()
  setCarros(urlEl.value, marcaEl.value, anoEl.value, placaEl.value, corEl.value)
  setFormCarros()
  formCarEl.reset()
  urlEl.focus()
});

function setFormCarros(){

  let index = cartableEl.rows.length - 1

  let novaLinha = (`
  <tr>
  <td><img  src="${carros.urls[index]}"></td>
  <td>${carros.marcas[index]}</td>
  <td>${carros.anos[index]}</td>
  <td>${carros.placas[index]}</td>
  <td style="background-color:${carros.cors[index]};">${carros.cors[index]}</td>
  </tr>`)
  primiraLinhaTabelaEl.insertAdjacentHTML('afterend', novaLinha);

}

function popularLinhas(){
  let totalDeCarros = carros.urls.length
  let totalDeLinhasDeCarros = cartableEl.rows.length-1

  if(totalDeLinhasDeCarros<totalDeCarros){
    setFormCarros()
    popularLinhas()
  }else{
    console.log('Linhas Populadas')
  }
}
popularLinhas()

