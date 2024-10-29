const express = require('express');
const animal = require('../controllers/animal');
const router = express.Router();
const usuarios = require('../controllers/usuarios');


//USUARIO
//LOGIN
router.post("/login", usuarios.login);
//CADASTRO
router.post("/cadastrarUsuario", usuarios.cadastrarUsuario);

//ANIMAL
//CADASTRO
router.post("/cadastrarAnimal" , animal.cadastrarAnimal);
//LISTAGEM SEUS ANIMAIS
router.get("/seusAnimais/:dono", animal.seusAnimais);
//EDITAR
router.put("/editarAnimais", animal.editarAnimais);
//LISTAGEM ANIMAIS ADOÇÃO
router.get("/animaisAdocao", animal.animaisAdocao);
//COLOCAR ANIMAL PARA ADOÇÃO
router.patch("/animaisDoacao", animal.animaisDoacao);
//ADOTAR UM ANIMAL
router.patch("/animaisAdotar", animal.animaisAdotar);
//DELETAR ANIMAL
router.patch("/deletarAnimal", animal.deletarAnimais);


module.exports = router;

