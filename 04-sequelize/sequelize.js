const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '8C3aN75m', {
	host: "localhost",
	dialect: 'mysql'
});

sequelize.authenticate().then(function(){
	console.log("ok"); 
}).catch(function(erro){
	console.log("erro" + erro);
});