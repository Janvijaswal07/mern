const express=require('express');
const router= express.Router();
const authVerifyMiddle = require('../middleware/authVerifyMiddle')
const adminRouter = require('../controllers/adin-controllers')
const adminMiddleware = require('../middleware/admin-middleware')
router.route('/user').get(authVerifyMiddle,adminMiddleware,adminRouter.getAllUers);
router.route('/contact').get(adminRouter.getContactData);
module.exports=router;