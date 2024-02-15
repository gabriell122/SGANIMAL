const mysql = require('mysql2/promise'); 
const bd_porta = '3306'; // porta padrao

//info banco
const bd_usuario = 'root';
const bd_senha = '';
const bd_servidor = 'localhost';
const bd_banco = 'sganimal';



//configuracao da conexao
const config = {
    host: bd_servidor, 
    port: bd_porta, //Default: 3306
    user: bd_usuario, 
    password: bd_senha, 
    database: bd_banco, 
    waitForConnections : true, 
    connectionLimit : 100, //Default: 10 - deixar 100 ou 1000
    queueLimit : 0, 
}

let connection;

try {
    //gera a conexao com base nas config e atribui a conexao
    connection = mysql.createPool(config);

    console.log('Chamou conexão MySql!'); 
    
} catch (error) { 
    console.log(error); 
} 

//exporta conexao
module.exports = connection;
