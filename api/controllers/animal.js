const { json } = require("express");
const db = require("../db/index");

module.exports = {
    async animais(request, response) {

        try {
            
            const sqlListar = "SELECT ani_nome , ani_nasc , ani_especie FROM animais";
            const resListar = await db.query(sqlListar);

            return response.status(200).json({
                confirma: true,
                message: "Deu bom",
                data: resListar[0]
            })
        } catch (error) {
            return response.status(500).json({
                confirma: false,
                message: error
            })
        }

    },

    async editarAnimais(request, response) {
        try {
            const { ani, nome, nasc, especie, sexo, raca } = request.body;
            if ( ani && nome && nasc && especie  && raca) {
                
            } else {
                return response.status(501).json({
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

    async seusAnimais(request , response) {
        try {
            const { dono } = request.params;
            if (dono) {
                
                const sqlAnimais = "SELECT usa.ani_id, ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca FROM usuariosanimais usa INNER JOIN animais ani ON ani.ani_id = usa.ani_id WHERE usu_id = ? AND usa_status = 0";
                const res = await db.query(sqlAnimais, [dono]);

                return response.status(200).json({
                    confirma: true,
                    message: "Seus Animais",
                    data: res[0]
                })
            } else {
                return response.status(501).json({
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
            if (dono && nome && nasc && especie  && raca) {
                const sqlCadastrarAnimais = "INSERT INTO animais( ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca) VALUES(?, ?, ?, ?, ?);"
                const resAnimal = await db.query(sqlCadastrarAnimais, [ nome, nasc, especie, sexo, raca]);
                const ani = resAnimal[0].insertId;
                const sqlCadastrarUsuariosAnimais = "INSERT INTO usuariosAnimais( usu_id, ani_id, usa_data) VALUES( ?, ?, CURRENT_TIMESTAMP );"; 
                const resUsuariosAnimais = await db.query(sqlCadastrarUsuariosAnimais, [dono, ani]);

                return response.status(200).json({
                    confirma: true,
                    message: "Animal cadastrado com susceso",
                    data: {
                        animal:resAnimal,
                        usuarioAnimal: resUsuariosAnimais
                    }
                })
            } else {
                return response.status(501).json({
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