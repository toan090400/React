var express = require('express');
var router = express.Router();

const authController = require('./../controllers/authController');
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;