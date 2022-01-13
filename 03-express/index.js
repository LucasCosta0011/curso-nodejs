const express = require("express");

//Constante - Não deixa sobrescrever a variável/projeto
const app = express();

//Rotas são os caminhos para a aplicação
app.get("/", function(req, res){

  res.sendFile(__dirname + "/html/index.html");

});

app.get("/sobre", function(req, res){

  res.sendFile(__dirname + "/html/sobre.html");

});

app.get("/blog", function(req, res){

  res.send("blog");

});

//Criando parâmetros
app.get("/ola/:funcao/:nome/:idade", function(req, res){

  res.send("<h1>ola, " + req.params.nome + " , sua funcao e " + req.params.funcao + ", sua idade " + req.params.idade + "</h1>");

});

//Escutando o server, ultimo código.
app.listen(8081, function(){

  //callback - função executada sempre que um evento acontece.
  console.log("running server");

});
