const contactUs = require('../models/contact-model')
const contact = async (req,res)=>{
    try {
        const response = req.body;
        await contactUs.create(response);
        res.status(200).json({msg:"done"})
    } catch (error) {
        res.status(400).json({msg:" Not done"})
    }
}
module.exports= {contact};