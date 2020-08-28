const express = require('express');
const router = express.Router();
const { getButtons } = require('../controllers/buttons.controller');

router.post('/buttons', getButtons );

module.exports = router;