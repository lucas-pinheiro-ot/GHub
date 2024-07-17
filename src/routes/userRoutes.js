const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/room', (req, res) => {
    res.render('room');
});


module.exports = router;
