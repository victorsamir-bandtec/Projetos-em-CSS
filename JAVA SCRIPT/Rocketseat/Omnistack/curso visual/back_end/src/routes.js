const express = require('express'); // importa o modulo express
const routes = express.Router(); // manipulador de rotas 

 /** 
 *METODO HTTP:
 *GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 *POST: CRIAR UMA INFORMAÇÃO DO BACK-END
 *PUT: ALTERA UMA INFORMAÇÃO DO BACK-END
 *DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END

*TIPOS DE PARAMETROS: 
*QUERY PARAMS: PARAMETROS NOMEADOS ENVIADOS NA ROTA  APOS O SIMBOLO DE ?   
*ROUTS PARAMS: PATRAMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
*REQUEST BODY: CORPO DA REQUISIÇÃO, USADO PARA CRIAR OU ALTERAR RECURSOS
*/

routes.post ('/users',(req, res) => { // indica o metodo http, declara a rota e os parametros da função
  const body = req.body; // define o parametro do http
  console.log(body); // mostra alteração

  return res.json({ // envia um vetor 
    evento: 'semana de estudo',               //vetor
    aluno: 'Yuri de Jesus Morais Vedovate',   //vetor
    email: 'yuri.vedovate@bandtec.com.br'     //vetor 
  });
});
module.exports = routes; // exporta a const routes
