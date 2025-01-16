const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.redirect('/telaprincipal');
  });

app.post('/enviar-email', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    console.log(nome, email, telefone, mensagem);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testador192@gmail.com', // Seu email
            pass: 'xbrwezragejouuws' // Sua senha
        }
    });

    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: 'info@conceitosolar.com.br', // Email de destino
        subject: 'Novo Contato do Formulário',
        text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
            res.json({ success: false });
        } else {
            console.log('Email enviado:', info.response);
            res.send({ success: true, message: 'Email enviado com sucesso!' });
        }
    });
});

app.listen(8080, () => {
    console.log('Servidor rodando: %chttp://localhost:8080', 'color: blue; text-decoration: underline;');
});