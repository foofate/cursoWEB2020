const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// middlewares (aplicado pra qualquer requisiçao que chegar ao servidor)
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.');
        }

        res.end('Concluído com sucesso.');
    })
});

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

// app.get('/teste', (req, res) => res.send('Ok')); // (localhost:port/teste)
app.listen(8080, () => console.log('Executando na porta 8080...'));