import '../src/style.css'
const link = document.querySelector('[data-js="link"]')
const app = document.querySelector('[data-js="app"]')
const dados = ` <h1>B. Academy</h1> <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

app.innerHTML = dados;

link.addEventListener('click', (e)=>{
  e.preventDefault();
  //Por padrão o style.visibility vem vazio.
  app.style.visibility = (app.style.visibility === '' ? "hidden" : "");
});
