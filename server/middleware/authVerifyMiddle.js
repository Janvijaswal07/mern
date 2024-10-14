const jwt = require('jsonwebtoken');
const user = require('../models/user-model')
const authVerifyMiddle = async(req,res,next)=>{
const token = req.header("Authorization")
if(!token){
    res.status(401).json({msg:"token is not provider"})
}
const jwtToken = token.replace("Bearer","").trim();

try {
    const isVarify= jwt.verify(jwtToken,"secret");
    
    const userData = await user.findOne({email:isVarify.email}).select({password:0});
    req.user=userData;
    req.token=token;
    req.id= userData._id;
    console.log(userData);
    next();
} catch (error) {
    res.status(401).json({msg:"token is invalid"})
}

}
module.exports= authVerifyMiddle; 