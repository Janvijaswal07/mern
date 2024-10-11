const express= require('express');
const router =express.Router();
const authControllers = require('../controllers/auth-controllers')
const validate= require('../middleware/auth-middleware');
const signupSchema= require('../validator/auth-validator')

router.route('/').get(authControllers.home);
router.route('/register').post(validate(signupSchema),authControllers.register);
router.route('/login').post(authControllers.login);
router.route('/logout').get(authControllers.logout);

module.exports= router;
