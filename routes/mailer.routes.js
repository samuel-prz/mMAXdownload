const express = require('express');
const router = express.Router();
const { mailer } = require('../controllers/mailer.controller');

router.post('/mailer', mailer );

module.exports = router;