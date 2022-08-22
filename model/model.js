const mongoose=require("mongoose");

const dataStream=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    nic:{
        required:true,
        type:String,
    },
    gender:{
        required:true,
        type:String,
    },
})
module.exports=mongoose.model('Data',dataStream)