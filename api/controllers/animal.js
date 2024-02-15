const { json } = require("express");
const db = require("../db/index");

module.exports = {
    async animais(request, response) {

        try {
            
            const sqlListar = "SELECT ani_nome , ani_nasc , ani_especie FROM animal";
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
    async cadastrarAnimal(request, response) {
        try {
            const { dono, nome, nasc, especie } = request.body;

            if (dono && nome && nasc && especie) {
                const sqlCadastrar = "INSERT INTO animal(usu_id, ani_nome, ani_nasc, ani_especie) VALUES(?, ?, ?, ?);"
                const resAnimal = await db.query(sqlCadastrar, [dono, nome, nasc, especie]);

                return response.status(200).json({
                    confirma: true,
                    message: "Animal cadastrado com susceso",
                    data: resAnimal
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