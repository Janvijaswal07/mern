const user= require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const home = async(req,res)=>{
    try {
       res.status(200).json({msg:"home page"});
    } catch (error) {
        res.status(400).json({msg:"Backend error"});
    }
}
const register = async(req,res)=>{
    try {
        console.log(req.body);
        let {username,email,phone,password}=req.body;
        const userExist = await user.findOne({email:email});
        if(userExist){
            res.json({msg:"user is already exist"});   
        }
        const hash_password = await bcrypt.hash(password,10);
        const createdUser = await user.create({
            username,
            email,
            password:hash_password,
            phone
        })
        const token= jwt.sign({email:createdUser.email},"secret");
       res.cookie("token",token)
        res.status(200).json({msg:req.body,token:token}); 
    } catch (error) {
        res.json({msg:"Backend error"}); 
    }
}
const login = async(req,res)=>{
    try {
        let {password,email}=req.body;
        const userExist = await user.findOne({email:email});
        if(!userExist){
            res.status(400).json({msg:"email is not exist"});  
        }
        const valide_password= await bcrypt.compare(password,userExist.password);
        if(valide_password){
            const token= jwt.sign({email:userExist.email},"secret");
            res.cookie("token",token)
            res.status(200).json({msg:"you are login successfully",token:token});
        }
        else{
            res.status(400).json({msg:"password is wrong"}); 
        }
    } catch (error) {
        res.status(400).json({msg:"Backend error"}); 
    }
}
const logout = async(req,res)=>{
    try {
        res.cookie("token","");
       res.status(200).json({msg:"you are logout"});
    } catch (error) {
        res.status(400).json({msg:"Backend error"});
    }
}
const users = async(req,res)=>{
try {
    const userData=req.user;
    console.log(userData);
    return res.status(200).json({userData})
} catch (error) {
    res.status(401).json({msg:"Backend error from user router"})
}
}
module.exports={home,register,login,logout,users};