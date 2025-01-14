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

function sendEmail(name, email, phone, message) {
    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    fetch('http://localhost:3000/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Email enviado com sucesso!');
        } else {
            alert('Erro ao enviar o email. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o email. Tente novamente.');
    });
}