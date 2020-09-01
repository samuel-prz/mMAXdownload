const express = require('express');
const router = express.Router();
const controllers = require('../controllers/crudBtn.controller');

router.post('/createBtn', controllers.createButtons );
router.post('/editBtn', controllers.editButtons );
router.post('/deleteBtn', controllers.deleteButtons );

module.exports = router;