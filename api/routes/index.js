const express = require('express');
const animal = require('../controllers/animal');
const router = express.Router();
const usuarios = require('../controllers/usuarios');


//OK
router.post("/login", usuarios.login);
router.post("/cadastrarUsuario", usuarios.cadastrarUsuario);
router.post("/cadastrarAnimal" , animal.cadastrarAnimal);
router.get("/seusAnimais/:dono", animal.seusAnimais);
router.put("/editarAnimais", animal.editarAnimais);
router.get("/animaisAdocao", animal.animaisAdocao);
router.patch("/animaisDoacao", animal.animaisDoacao);
router.patch("/animaisAdotar", animal.animaisAdotar);





//vendo



//Revisar


module.exports = router;

