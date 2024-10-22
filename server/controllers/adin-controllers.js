const users= require('../models/user-model');
const contact = require ('../models/contact-model')
const getAllUers= async (req,res)=>{
    try {
        const userData= await users.find();
        if(!userData||userData===0){
            res.status(400).json({msg:"user is not available"})
        }
        res.status(200).json({msg:userData});
    } catch (error) {
        res.status(400).json({msg:"error from user route"})
    }
}
const getContactData = async(req,res)=>{
    try {
        const contactData = await contact.find();
        if(!contactData||contactData===0){
            res.status(400).json({msg:"contactData is not available"})  
        }
        res.status(200).json({msg:contactData});
    } catch (error) {
        res.status(400).json({msg:"error from contactAdmin route"})
    }
}
module.exports={getAllUers,getContactData};