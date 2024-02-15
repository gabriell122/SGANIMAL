const { json } = require("express");
const db = require("../db/index");

module.exports = {


    async login(request, response) {
        try {
            const { email, pass } = request.body;
            if (email && pass) {
                const sqlEntrar = "SELECT usu_id, usu_nome, usu_email, usu_senha FROM usuario WHERE usu_email = ? AND usu_senha = ?;"
                const resEntrar = await db.query(sqlEntrar, [email, pass])
                if (resEntrar[0][0]) {
                    return response.status(200).json({
                        confirma: true,
                        message: "login/bemsuscedido",
                        data: resEntrar[0][0]
                    })
                } else {
                    return response.status(201).json({
                        confirma: false,
                        message: "login/dadosincorretos",
                        data: "Email ou Senha Incorretos"
                    })
                }
            } else {
                return response.status(202).json({
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

    async cadastrar(request, response) {
        try {
            const { email, pass, nome } = request.body;
            if (email && pass && nome) {
                sqlEmail = "SELECT EXISTS(SELECT 1 FROM usuario WHERE usu_email = ?) AS email;";
                const resEmail = await db.query(sqlEmail, [email]);
                if (!resEmail[0][0].email) {
                    sqlCadastrar = "INSERT INTO usuario(usu_email, usu_senha, usu_nome) VALUES(?, ?, ?)";
                    const resCadastrar = await db.query(sqlCadastrar, [email, pass, nome]);
                    return response.status(200).json({
                        confirma: true,
                        message: "Usuario Cadastrado com Susceso",
                        data: resCadastrar
                    })

                } else {
                    return response.status(201).json({
                        confirma: false,
                        message: "Email já Cadastrado",
                    })
                }
            } else {
                return response.status(502).json({
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
    async cadastrarusuariopadrao(request, response) {
        try {

            const { user, action } = request.body
            //Verificar Email
            if (action == "cadastrousuariopadrao") {
                const sqlEmail = "SELECT EXISTS(SELECT 1 FROM usuario WHERE usu_email = ?) AS email;";
                const resEmail = await db.query(sqlEmail, user.email);

                if (resEmail[0][0].email === 0) {
                    const valuesCadastroUsuario = [user.nome, user.nasc, user.telefone, user.email, user.password]
                    console.log(valuesCadastroUsuario);
                    const sqlCadastroUsuario = "INSERT INTO usuario (usu_nome, usu_nasc, usu_telefone, usu_email, usu_senha) VALUES(?, ?, ?, ?, ?);"

                    const resCadastroUsuario = await db.query(sqlCadastroUsuario, valuesCadastroUsuario);
                    return response.status(200).json({
                        confirma: true,
                        message: "cadastrousuario/bemsuscedido",
                        data: resCadastroUsuario
                    })
                } else {
                    return response.status(201).json({
                        confirma: false,
                        message: "cadastrousuario/errorEmail",
                        data: "Email Já Cadastrado",
                    })
                }
            } else {
                return response.status(299).json({
                    confirma: false,
                    message: "cadastrousuario/errorBadRequest",
                    data: "bad request",
                })
            }

        } catch (e) {
            if (e.errno == 1062) {
                return response.status(500).json(
                    {
                        confirma: false,
                        message: "cadastro/usuariocomum/entradaduplicada",
                        error: e.code
                    }
                )
            }
            return response.status(500).json(
                {
                    confirma: false,
                    message: "cadastrousuario/erro",
                    error: e
                }
            )
        }




    },
    async loginusuario(request, response) {
        try {
            const { action, user } = request.body
            //trata requisições externas
            if (action == "loginusuario") {

                const sqlEntrar = "SELECT usu_id, usu_nome, usu_telefone, usu_email, usu_senha, usu_nasc, usu_sexo, end_id, usu_status FROM usuario WHERE usu_email = ? AND usu_senha = ?;"
                const resEntrar = await db.query(sqlEntrar, [user.email, user.password])
                if (resEntrar[0][0]) {
                    return response.status(200).json({
                        confirma: true,
                        message: "login/bemsuscedido",
                        data: resEntrar[0][0],
                    })
                } else {
                    return response.status(200).json({
                        confirma: false,
                        message: "login/dadosincorretos",
                        data: "Email ou Senha Incorretos",
                    })
                }

            } else {
                return response.status(299).json(
                    {
                        confirma: false,
                        message: "bad request",
                        error: action
                    }
                )
            }
        } catch (error) {
            return response.status(500).json(
                {
                    confirma: false,
                    error: error
                }
            )
        }

    }


};