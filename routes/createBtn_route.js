const express = require('express');
const router = express.Router();
const { getButtons } = require('../controllers/createBtn.controller');

router.post('/createBtn', getButtons );

module.exports = router;