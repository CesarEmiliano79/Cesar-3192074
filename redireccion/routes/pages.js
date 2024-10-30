const express = require('express');
const path = require('path');

// Crear un router de Express
const router = express.Router();

// Ruta para la Página 1
router.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'inicio.html'));
});

// Ruta para la Página 2
router.get('/calcu', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/calcu', 'calculadora.html'));
});

// Ruta para la Página 3
router.get('/qrs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/qrs', 'index.html'));
});

// Exportar el router para usarlo en la aplicación principal
module.exports = router;