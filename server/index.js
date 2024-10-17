require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const service = require('./router/service-router')
const contact = require('./router/contact-router');
const { required } = require('./validator/auth-validator');
const chalk = require("chalk")

 
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,DELETE,PUT,PATCH,HEAD",
    Credentials:true,
   
  }
   app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth',router);
app.use('/api/contactus',contact);
app.use('/api/services',service)
const port = process.env.PORT;

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(chalk.cyanBright`server is running on ${port}`);
    });
});
 