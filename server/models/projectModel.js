const mongoose=require('mongoose')
const Cost = require('./costModel'); 

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
    utilized_amount: {
        type: Number,
        default: 0
    },
    variance: {
        type: Number,
        default: function () {
            return this.budget - this.utilized_amount;
        }
    },
    status:{
        type:String,
        default: function () {
            if (this.variance > 0) {
                return this.status = 'Under Budget';
            } else if (this.variance === 0) {
                return this.status = 'At Budget';
            } else {
                return this.status = 'Over Budget'; // Optional for over budget cases
            }
        }
    },
},{timestamps:true});



module.exports=mongoose.model('Project',projectSchema)