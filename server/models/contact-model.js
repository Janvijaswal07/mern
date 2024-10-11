const mongoose= require('mongoose');
const contactSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const contactUs = mongoose.model("contacts",contactSchema);
module.exports=contactUs;