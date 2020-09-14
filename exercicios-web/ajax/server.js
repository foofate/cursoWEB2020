const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// middlewares (aplicado pra qualquer requisiçao que chegar ao servidor)
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/teste', (req, res) => res.send('Ok')); // (localhost:port/teste)
app.listen(8080, () => console.log('Executando na porta 8080...'));