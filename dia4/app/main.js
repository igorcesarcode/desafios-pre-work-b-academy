import './style.css'
import './cars.js'

const url ='http://localhost:3333/cars'

let cars =[];
  fetch(url)
  .then(result => result.json())
  .then((result) => console.log(result))

console.log(cars)

function setCars(){

  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: 'imagem2.png',
      brandModel: 'lamborgini',
      year: 2021,
      plate: 'abc-1234',
      color: 'red',
    })

  })
  .then(() =>{
    fetch(url)
    .then(result => result.json())
    .then((result) => console.log(result))

  })


}
