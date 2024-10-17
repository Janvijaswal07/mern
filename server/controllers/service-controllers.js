const services = require('../models/services-model')
const service= async(req,res)=>{
    try {
        const data = await services.find();
        if(!data){
            return res.status(400).json({msg:"data is found"})
        }
        res.status(200).json({msg:data})
    } catch (error) {
        res.status(400).json({msg:"services router error"})
    }
}
module.exports={service}