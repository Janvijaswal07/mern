const mongoose = require('mongoose');
const servicesSchema = new mongoose.Schema({
    services:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    product:{
        type:String,
        require:true
    },
});
const services= mongoose.model("Service",servicesSchema);
module.exports=services;
