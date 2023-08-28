const express = require('express')
const mongoose= require('mongoose')
const cors =require('cors')
const UturnModel = require('./models/Uturn')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/uturn")

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UturnModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password===password)
            res.json("success")
         else {
            res.json("the password is incorrect")
        } 
     } else {
      res.json("Email is not registered");      
     }
    })
})

app.post('/register',(req,res)=>{
    UturnModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=> console.log(err))
})

app.listen(3001,()=>{
    console.log("running")
})