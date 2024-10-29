const { json } = require("express");
const db = require("../db/index");

module.exports = {
    //USUÁRIO ADOTA UM ANIMAL
    async animaisAdotar(request, response) {
        try {
            //VERIFICA OS DADOS
            const { ani, dono, newDono } = request.body;
            if (ani, dono, newDono) {
                //FAZ A ADOÇÃO
                const sql = "CALL stp_AnimaisAdotar( ?, ?, ? );";
                const res = await db.query( sql, [ ani, dono, newDono ]);
                //RETORNA SUSCESO
                return response.status(200).json({
                    confirma: true,
                    message: "Animal adotado com susceso",
                    data: {
                        res: res
                    }
                })
            } else {
                // RETORNA DADO VAZIO
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    //COLOCA O ANIMAL PARA ADOÇÃO
    async animaisDoacao(request, response) {
        try {
            //VERIFICA O ID DO ANIMAL
            const { ani } = request.body;
            if (ani) {
                //COLOCA ELE PARA ADOÇÃO
                const sqlAnimais = "UPDATE animais SET ani_status = 1 WHERE ani_id = ? ";
                const res = await db.query(sqlAnimais, [ani])
                //RETORNA SUSCESO
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Colocado na Adocao",
                    data: res
                })
            //RETORNA DADO INVALIDO
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    //SELECIONA OS ANIMAIS PARA ADOÇÃO
    async animaisAdocao(request, response) {
        try {
            //SELECIONA OS ANIMAIS
            const sqlAdocao = "SELECT usa.usu_id,usu.usu_nome,usu.usu_telefone,usu.usu_email, ani.ani_id, ani_nome, DATE_FORMAT(ani_nasc, '%d-%m-%Y') AS ani_nasc, ani_especie, ani_sexo, ani_raca FROM animais ani INNER JOIN usuariosAnimais usa ON usa.ani_id = ani.ani_id INNER JOIN usuarios usu ON usu.usu_id = usa.usu_id WHERE ani.ani_status = 1 AND usa.usa_status = 0;";
            const res = await db.query(sqlAdocao);
            //ENVIA ELES PARA O FRONT
            return response.status(200).json({
                confirma: true,
                message: "Animais para Adocao",
                data: res[0]
            })
        //RETORNA O ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    //EDITA OS DADOS DO ANIMAL
    async editarAnimais(request, response) {
        try {
            //VERIFICA OS DADOS
            const { ani, nome, nasc, especie, sexo, raca } = request.body;
            if (ani && nome && nasc && especie && raca) {
                //EDITA OS VALOR
                const sqlEditar = "UPDATE animais SET  ani_nome = ? , ani_nasc = ? , ani_especie = ? , ani_sexo= ? , ani_raca = ? WHERE ani_id = ? ";
                const res = await db.query(sqlEditar, [nome, nasc, especie, Number(sexo), raca, ani])
                //RETORNA SUSCESO
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Editado com susceso",
                    data: res
                })
            //RETORNA DADO INVALIDO
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    //SELECIONA OS ANIMAIS DO USUÁRIOS
    async seusAnimais(request, response) {
        try {
            //VERIFICA OS DADOS
            const { dono } = request.params;
            if (dono) {
                //SELECIONA OS ANIMAIS
                const sqlAnimais = "SELECT usa.ani_id,usu.usu_nome,usu.usu_telefone,usu.usu_email,ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca , ani_status FROM usuariosAnimais usa INNER JOIN animais ani ON ani.ani_id = usa.ani_id INNER JOIN usuarios usu ON usu.usu_id = usa.usu_id WHERE usa.usu_id = ? AND usa_status = 0 AND (ani_status = 1 OR ani_status = 0)";
                const res = await db.query(sqlAnimais, [dono]);
                return response.status(200).json({
                    confirma: true,
                    message: "Seus Animais",
                    data: res[0]
                })
            //RETORNA DADO INVALIDO
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    //CADASTRA OS ANIMAIS
    async cadastrarAnimal(request, response) {
        try {
            //VERIFICA OS DADOS
            const { dono, nome, nasc, especie, sexo, raca } = request.body;
            if (dono && nome && nasc && especie && raca) {
                //CADASTRA OS ANIMAIS
                const sqlCadastrarAnimais = "CALL stp_CadastrarAnimal( ?, ?, ?, ?, ?, ?)";
                const res = await db.query(sqlCadastrarAnimais, [ dono, nome, nasc, especie, sexo,raca]);
                //RETORNA SUSCESO
                return response.status(200).json({
                    confirma: true,
                    message: "Animal cadastrado com susceso",
                    data: {
                        resposta:res
                    }
                })
            //RETORNA DADO INVALIDO
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    // Deletar Animal
    // atualizar o status do animal para 2 o que "remove" ele do sistema
    async deletarAnimais(request, response) {
        try {
            //VERIFICA OS DADOS
            const { ani } = request.body;
            if (ani) {
                //DELETA O ANIMAL
                const sqlEditar = "UPDATE animais SET  ani_status = 2 WHERE ani_id = ? ";
                const res = await db.query(sqlEditar, [ani])
                //RETORNA SUSCESO
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Deletado com susceso",
                    data: res
                })
            } else {
                //RETORNA DADO INVALIDO
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        //RETORNA ERRO
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },
}