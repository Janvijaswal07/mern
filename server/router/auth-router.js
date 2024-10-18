const express= require('express');
const router =express.Router();
const authControllers = require('../controllers/auth-controllers')
const validate= require('../middleware/auth-middleware');
const {signupSchema,loginSchema}= require('../validator/auth-validator')
const authVerifyMiddle = require('../middleware/authVerifyMiddle')
router.route('/').get(authControllers.home);
router.route('/register').post(validate(signupSchema),authControllers.register);
router.route('/login').post(validate(loginSchema),authControllers.login);
router.route('/logout').get(authControllers.logout);
router.route('/logout').get(authControllers.logout);
router.route('/users').get(authVerifyMiddle, authControllers.users);

module.exports= router;
