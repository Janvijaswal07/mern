const mongoose = require('mongoose');
const chalk = require("chalk")
const MONGODB_URI=process.env.MONGODB_URI;
const connectDB = async()=>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(chalk.bgCyanBright("database is connected"));
    } catch (error) {
        console.log(chalk.bgRed("connection is failed"));
    }
}
module.exports=connectDB;