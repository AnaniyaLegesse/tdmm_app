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
        type:Number
    }
},{timestamps:true})

module.exports=mongoose.model('Cost',costSchema)