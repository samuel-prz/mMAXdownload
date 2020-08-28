const express = require('express');
const router = express.Router();
const { claveTemp } = require('../controllers/key.controller');

router.post('/key', claveTemp );

module.exports = router;