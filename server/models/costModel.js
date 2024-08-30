const mongoose=require('mongoose')

const Schema=mongoose.Schema

const costSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    project:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Cost',costSchema)