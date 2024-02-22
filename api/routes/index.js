const express = require('express');
const animal = require('../controllers/animal');
const router = express.Router();
const usuarios = require('../controllers/usuarios');


//OK
router.post("/login", usuarios.login);
router.post("/cadastrarUsuario", usuarios.cadastrarUsuario);
router.post("/cadastrarAnimal" , animal.cadastrarAnimal);
router.get("/seusAnimais/:dono", animal.seusAnimais);

//vendo
router.post("/editarAnima", animal.editarAnimais);


//Revisar
router.get("/listarAnimais" , animal.animais);


module.exports = router;

