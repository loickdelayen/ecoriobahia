document.querySelector('.button').addEventListener('click', function () {
    alert('Orçamento solicitado!');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    alert(`Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`);
});