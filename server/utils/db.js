const mongoose = require('mongoose');
const MONGODB_URI=process.env.MONGODB_URI;
const connectDB = async()=>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("database is connected");
    } catch (error) {
        console.log("connection is failed");
    }
}
module.exports=connectDB;