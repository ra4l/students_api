const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')

const schema= mongoose.Schema({
    name:String,
});

const StudentModel= mongoose.model("student",schema);

router.get('/students',(req,res)=>{
    StudentModel 
    .find()
    .then((response) => res.status(200).send(response))
    .catch((err)=> res.status(200).send(response))

});
  

router.post('/students',(req,res)=>{
    console.log(req.body);
    const student= new StudentModel(req.body)
    student
    .save()
    .then((response) => res.status(200).send(response))
    .catch((err)=> res.status(200).send(response))

  
});
module.exports= router;