const jwt = require('jsonwebtoken');
const authVerifyMiddle = async(req,res,next)=>{
const token = req.header("Authorization")
if(!token){
    res.status(401).json({msg:"token is not provider"})
}
const jwtToken = token.replace()
console.log(token);
next();
}
module.exports= authVerifyMiddle;