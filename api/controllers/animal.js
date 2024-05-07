const { json } = require("express");
const db = require("../db/index");

module.exports = {

    async animaisAdotar(request, response) {
        try {
            const { ani, dono, newDono } = request.body;
            if (ani, dono, newDono) {

                const sqlLastUA = "UPDATE usuariosanimais SET usa_status = 1 WHERE ani_id = ? AND usu_id = ? ";
                const resUp = await db.query(sqlLastUA, [ani, dono]);
                const sqlNewUA = "INSERT INTO usuariosAnimais( usu_id, ani_id, usa_data) VALUES( ?, ?, CURRENT_TIMESTAMP )";
                const resNewDono = await db.query(sqlNewUA, [newDono, ani]);
                const sqlAni = "UPDATE animais SET ani_status = 0 WHERE ani_id = ? ";
                const resAni = await db.query(sqlAni, [ani])
                return response.status(200).json({
                    confirma: true,
                    message: "Animal adotado com susceso",
                    data: {
                        DonoAntigo: resUp,
                        DonoNovo: resNewDono,
                        Animal: resAni
                    }
                })
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }

        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    async animaisDoacao(request, response) {
        try {
            const { ani } = request.body;
            if (ani) {
                const sqlAnimais = "UPDATE animais SET ani_status = 1 WHERE ani_id = ? ";
                const res = await db.query(sqlAnimais, [ani])
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Colocado na Adocao",
                    data: res
                })
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    async animaisAdocao(request, response) {
        try {
            const sqlAdocao = "SELECT usa.usu_id,usu.usu_nome,usu.usu_telefone,usu.usu_email, ani.ani_id, ani_nome, DATE_FORMAT(ani_nasc, '%d-%m-%Y') AS ani_nasc, ani_especie, ani_sexo, ani_raca FROM animais ani INNER JOIN usuariosanimais usa ON usa.ani_id = ani.ani_id INNER JOIN usuarios usu ON usu.usu_id = usa.usu_id WHERE ani.ani_status = 1 AND usa.usa_status = 0;";
            const res = await db.query(sqlAdocao);
            return response.status(200).json({
                confirma: true,
                message: "Animais para Adocao",
                data: res[0]
            })
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    async editarAnimais(request, response) {
        try {
            const { ani, nome, nasc, especie, sexo, raca } = request.body;
            if (ani && nome && nasc && especie && raca) {
                const sqlEditar = "UPDATE animais SET  ani_nome = ? , ani_nasc = ? , ani_especie = ? , ani_sexo= ? , ani_raca = ? WHERE ani_id = ? ";
                const res = await db.query(sqlEditar, [nome, nasc, especie, sexo, raca, ani])
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Editado com susceso",
                    data: res
                })
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    async seusAnimais(request, response) {
        try {
            const { dono } = request.params;
            if (dono) {

                const sqlAnimais = "SELECT usa.ani_id,usu.usu_nome,usu.usu_telefone,usu.usu_email,ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca , ani_status FROM usuariosanimais usa INNER JOIN animais ani ON ani.ani_id = usa.ani_id INNER JOIN usuarios usu ON usu.usu_id = usa.usu_id WHERE usa.usu_id = ? AND usa_status = 0 AND (ani_status = 1 OR ani_status = 0)";
                const res = await db.query(sqlAnimais, [dono]);
                return response.status(200).json({
                    confirma: true,
                    message: "Seus Animais",
                    data: res[0]
                })

            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    async cadastrarAnimal(request, response) {
        try {
            const { dono, nome, nasc, especie, sexo, raca } = request.body;
            if (dono && nome && nasc && especie && raca) {
                const sqlCadastrarAnimais = "INSERT INTO animais( ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca) VALUES(?, ?, ?, ?, ?);"
                const resAnimal = await db.query(sqlCadastrarAnimais, [nome, nasc, especie, sexo, raca]);
                const ani = resAnimal[0].insertId;
                const sqlCadastrarUsuariosAnimais = "INSERT INTO usuariosAnimais( usu_id, ani_id, usa_data) VALUES( ?, ?, CURRENT_TIMESTAMP );";
                const resUsuariosAnimais = await db.query(sqlCadastrarUsuariosAnimais, [dono, ani]);

                return response.status(200).json({
                    confirma: true,
                    message: "Animal cadastrado com susceso",
                    data: {
                        animal: resAnimal,
                        usuarioAnimal: resUsuariosAnimais
                    }
                })
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }

        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },

    // Deletar Animal
    async deletarAnimais(request, response) {
        try {
            const { ani } = request.body;
            if (ani) {
                const sqlEditar = "UPDATE animais SET  ani_status = 2 WHERE ani_id = ? ";
                const res = await db.query(sqlEditar, [ani])
                return response.status(200).json({
                    confirma: true,
                    message: "Animal Deletado com susceso",
                    data: res
                })
            } else {
                return response.status(201).json({
                    confirma: false,
                    message: "Dado vazio",
                })
            }
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error,
            })
        }
    },
}