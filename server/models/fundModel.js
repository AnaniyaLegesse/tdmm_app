const mongoose=require('mongoose')

const Schema=mongoose.Schema

const fundSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    fund_type:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Fund',fundSchema)