const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../frontend/index.html'));
});

app.post('/enviar-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'loickdelayen@gmail.com', // Seu email
            pass: 'JBchlulo12*' // Sua senha
        }
    });

    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: 'info@conceitosolar.com.br', // Email de destino
        subject: 'Novo Contato do Formulário',
        text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            res.json({ success: false });
        } else {
            console.log('Email enviado:', info.response);
            res.json({ success: true });
        }
    });
});

app.listen(8080, () => {
    console.log('Servidor rodando: %chttp://localhost:8080', 'color: blue; text-decoration: underline;');
});