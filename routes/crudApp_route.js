const express = require('express');
const router = express.Router();
const controllers = require('../controllers/crudApp.controller');

router.post('/createApp', controllers.createApp );
router.post('/editApp', controllers.editApp );
router.post('/deleteApp', controllers.deleteApp );

module.exports = router;