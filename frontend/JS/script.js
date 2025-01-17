document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  const button = document.querySelector('.button');
  const button1 = document.querySelector('.button1');

  button.addEventListener('click', () => {
    const form = document.querySelector('#contactForm');
    form.scrollIntoView({ behavior: 'smooth' });
  });

  button1.addEventListener('click', () => {
    const form = document.querySelector('#contactForm');
    form.scrollIntoView({ behavior: 'smooth' });
  });

// Enviar formulário de contato
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  fetch('/enviar-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, telefone, mensagem })
  })
  .then((response) => response.json())
  .then((data) => {
      if (data.success) {
          alert(data.message);
      } else {
          alert(data.message);
      }
  })
  .catch((error) => console.error('Erro ao enviar formulário:', error));
});
});