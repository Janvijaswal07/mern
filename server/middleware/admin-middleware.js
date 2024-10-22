const adminMiddleware= async (req,res,next)=>{
    try {
        const adminRolle=req.user.isAdmin
       if(!adminRolle){
        res.status(403).json({msg:"you are not admin"})
       }
        next();
    } catch (error) {
        console.log(error);
    }
}
module.exports=adminMiddleware;