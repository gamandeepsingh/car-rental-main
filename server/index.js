const express = require('express')
const mongoose= require('mongoose')
const cors =require('cors')
const UturnModel = require('./models/Uturn')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/uturn")

// app.get('/login',(req,res)=>{
//     res.render('../com')
// })
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


app.post('/register', (req, res) => {
    UturnModel.findOne({ email: req.body.email })      
       .then(existingUser =>{
                if (existingUser) {                
                    res.status(400).json({ error: "Email already registered" });            
                }
                else {
            UturnModel.create(req.body)
                    .then(newUser => res.json(newUser))                    
                    .catch(err => console.error(err));
                }})
        .catch(err => console.error(err));
});


app.listen(3001,()=>{
    console.log("running")
})