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
      console.log(request.body);
      if (email && pass && nome && telefone && nascimento && rua && num && bairo && cidade && estado ) {
        sqlEmail = "SELECT EXISTS(SELECT 1 FROM usuarios WHERE usu_email = ?) AS email;";
        const resEmail = await db.query(sqlEmail, [email]);
        if (!resEmail[0][0].email) {
          const sqlEndereco = "INSERT INTO enderecos( end_rua, end_num, end_bairo, end_cidade, end_estado) VALUES ( ?, ?, ?, ?, ? )";
          const resCadastrarEndereco = await db.query(sqlEndereco , [ rua, num, bairo, cidade, estado]);
          const end = resCadastrarEndereco[0].insertId;

          const sqlCadastrar = "INSERT INTO usuarios( usu_nome, usu_email, usu_senha, usu_telefone, usu_nascimento, end_id) VALUES ( ?, ?, ?, ?, ?, ? )";
          const resCadastrar = await db.query(sqlCadastrar, [nome, email, pass, telefone, nascimento, end ]);
          return response.status(200).json({
            confirma: true,
            message: "Usuario Cadastrado com Susceso",
            data: {
              user: resCadastrar,
              end: resCadastrarEndereco
            }
          })

        } else {
          return response.status(202).json({
            confirma: false,
            message: "Email já Cadastrado",
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