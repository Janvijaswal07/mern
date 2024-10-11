const express=require('express');
const router=express.Router();
const contactControllers = require('../controllers/contact-controllers');

router.route('/contact').post(contactControllers.contact);

module.exports= router;