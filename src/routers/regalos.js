const express = require('express');
const router = express.Router();
const { crearRegalo, listarRegalos } = require('../controllers/regalosController');

router.post('/', crearRegalo);
router.get('/', listarRegalos);

module.exports = router;
