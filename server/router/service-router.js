const express = require('express');
const { service } = require('../controllers/service-controllers');
const router = express.Router();
router.route('/service').get(service);
module.exports=router;