const {z} = require('zod');

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is requied"})
    .trim()
    .min(3,{message:"Name must be atlest 3 chars"})
    .max(100,{message:"Name must be not more then 100 chars"}),

    email:z
    .string({required_error:"Valid email address"})
    .trim()
    .min(3,{message:"Email must be atlest 3 chars"})
    .max(100,{message:"Email must be not more then 100 chars",}),

    phone:z
    .string({required_error:"Phone is requied"})
    .trim()
    .min(10,{message:"Phone must be atlest 10 chars"})
    .max(20,{message:"Phone must be not more then 20 chars"}),

    password:z
    .string({required_error:"Password is requied"})
    .trim()
    .min(7,{message:"Password must be atlest 3 chars"})
    .max(100,{message:"Password must be not more then 100 chars"}),
});
module.exports=signupSchema;