const express = require('express');
const animal = require('../controllers/animal');
const router = express.Router();
const usuarios = require('../controllers/usuarios');

router.post("/login", usuarios.login);
router.post("/cadastrar", usuarios.cadastrar);
router.get("/listar" , animal.animais);
router.post("/cadastrarAnimal" , animal.cadastrarAnimal);

module.exports = router;

