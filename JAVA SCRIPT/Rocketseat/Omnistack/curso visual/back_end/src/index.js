const express = require('express'); //importam o modulo Express
const app = express(); // cria uma aplicação Express.
const routes = require('./routes'); // importa o arquivo routes

app.use(express.json());// usa o modulo express lendo json
app.use(routes); // usa a importação do arquivo routes.js
app.listen(3333); // entra na porta 3333


