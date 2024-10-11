require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const contact = require('./router/contact-router');
const { required } = require('./validator/auth-validator');

 
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,DELETE,PUT,PATCH,HEAD",
    Credentials:true,
   
  }
   app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth',router);
app.use('/api/contactus',contact);
const port = process.env.PORT;

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    });
});
 