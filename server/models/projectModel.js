const mongoose=require('mongoose')

const Schema=mongoose.Schema

const projectSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    utlized_amount:{
        type:Number,
        required:true
    },
    variance:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('Project',projectSchema)