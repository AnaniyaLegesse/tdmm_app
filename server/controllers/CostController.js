const Cost=require('../models/costModel')
const mongoose= require('mongoose')


//get all Costs
const getCosts=async(req,res)=>{
    const Costs= await Cost.find({}).sort({createdAt:-1})

    res.status(200).json(Costs)
}


//get a single Cost
const getCost=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Cost'})
    }

    const Cost=await Cost.findById(id)

    if(!Cost){
       return res.status(404).json({error:'No such Cost'})
    }

    res.status(200).json(Cost)
}


//create a new Cost
const createCost=async (req,res)=>{
    const {name,budget,utlized_amount,variance,status}=req.body

    try{
        const Cost=await Cost.create({name,budget,utlized_amount,variance,status})
        res.status(200).json({Cost})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a Cost
const deleteCost=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Cost'})
    }

   
    const Cost= await Cost.findOneAndDelete({_id:id})
   
    if(!Cost){
        return res.status(404).json({error:'No such Cost'})
     }
 
     res.status(200).json(Cost)
}

//update a Cost
const updateCost=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Cost'})
    }

   
    const Cost= await Cost.findOneAndUpdate({_id:id},{
        ...req.body
    })
   
    if(!Cost){
        return res.status(404).json({error:'No such Cost'})
     }
 
     res.status(200).json(Cost)
}


module.exports={
    getCosts,
    getCost,
    createCost,
    deleteCost,
    updateCost
}