const mongoose=require('mongoose')
const Project = require('./projectModel');

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
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
},{timestamps:true})

module.exports=mongoose.model('Cost',costSchema)