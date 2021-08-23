import './style.css'
import './cars.js'

const url ='http://localhost:3334/cars'
let cars = [
  {
    "image": "imagem1.png",
    "brandModel": "modelo1",
    "year": "2022",
    "plate":"abc-2112",
    "color":"black"
  }
]

  async function getCars(){
  const response = await fetch(url);
  const data = await response.json();
  addCars(data)
}

function addCars(object) {
 cars = [...cars, ...object]
}

function setCarsPost(url,marca,ano,placa,cor){

  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: url,
      brandModel: marca,
      year: ano,
      plate: placa,
      color: cor,
    })

  })
  .then(() =>{
    fetch(url)
    .then(result => result.json())
    .then((result) => console.log(result))

  })


}


export const carros = cars;

