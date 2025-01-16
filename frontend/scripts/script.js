const form = document.querySelector('#contactForm');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const form = document.querySelector('#contactForm');
  form.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const dados = {
    nome: document.querySelector('#nome').value,
    email: document.querySelector('#email').value,
    telefone: document.querySelector('#telefone').value,
    mensagem: document.querySelector('#mensagem').value
  };
  fetch('/enviar-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
});