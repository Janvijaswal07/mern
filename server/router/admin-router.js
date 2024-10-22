const express=require('express');
const router= express.Router();
const authVerifyMiddle = require('../middleware/authVerifyMiddle')
const adminRouter = require('../controllers/adin-controllers')
router.route('/user').get(authVerifyMiddle,adminRouter.getAllUers);
router.route('/contact').get(authVerifyMiddle,adminRouter.getContactData);
module.exports=router;