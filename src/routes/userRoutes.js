// src/routes/userRoutes.js

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login/index.html');
});  


module.exports = router;
