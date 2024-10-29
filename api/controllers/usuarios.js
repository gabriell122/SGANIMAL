const { json } = require("express");
const db = require("../db/index");

module.exports = {


  async login(request, response) {
    try {
      const { email, pass } = request.body;
      if (email && pass) {
        const sqlEntrar = "SELECT usu_id, usu_nome, usu_email, usu_senha, usu_telefone, usu_nascimento, end_id FROM usuarios WHERE usu_email = ? AND usu_senha = ?;"
        const resEntrar = await db.query(sqlEntrar, [email, pass])
        if (resEntrar[0][0]) {
          return response.status(200).json({
            confirma: true,
            message: "login/bemsuscedido",
            data: resEntrar[0][0]
          })
        } else {
          return response.status(202).json({
            confirma: false,
            message: "login/dadosincorretos",
            data: "Email ou Senha Incorretos"
          })
        }
      } else {
        return response.status(201).json({
          confirma: false,
          message: "email ou senha nulos"
        })
      }
    } catch (error) {
      return response.status(500).json({
        confirma: false,
        message: error,
      })
    }
  },

  async cadastrarUsuario(request, response) {
    try {
      const { email, pass, nome, telefone, nascimento, rua, num, bairo, cidade, estado} = request.body;
      
      if (email && pass && nome && telefone && nascimento && rua && num && bairo && cidade && estado ) {
        const sql = "CALL stp_CadastrarUsuarios( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @resposta)";
        const res = await db.query(sql, [rua , num, bairo, cidade, estado, nome, email, pass, telefone, nascimento,]);
        const [rows] = await db.query('SELECT @resposta AS resposta;');
        if (rows[0].resposta == "1") {
          return response.status(200).json({
            confirma: true,
            message: "Usuario Cadastrado com Susceso",
            data: {
              res: res ,
              rows:rows
  
            }
          })
        } else {
          return response.status(200).json({
            confirma: false,
            message: "Email Já Cadastrado",
          })
        }
        

      } else {
        return response.status(201).json({
          confirma: false,
          message: "Campo Nulo",
        })
      }

    } catch (error) {
      return response.status(500).json({
        confirma: false,
        message: error,
      })
    }
  },


};