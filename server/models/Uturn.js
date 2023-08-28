const mongoose=require('mongoose');

const UturnSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UturnModel=mongoose.model("uturn", UturnSchema)

module.exports= UturnModel 