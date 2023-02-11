const express=require('express')
const mongoose=require('mongoose')

const studentsrouter= require('./student')
const app=express()
app.use(express.json());
app.use('/',studentsrouter);

mongoose.
connect("mongodb+srv://raul:acemmern@cluster0.pusyiun.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

.then((res)=>{
    console.log("connected");
})

.catch ((err)=> console.log("err",err));
app.listen(3000,()=> {
    console.log("listening at port 3000");
});

