const Cost=require('../models/costModel')
const mongoose= require('mongoose')


//get all Costs
const getCosts=async(req,res)=>{
    const costs= await Cost.find({}).sort({createdAt:-1})

    res.status(200).json(costs)
}


//get a single Cost
const getCost=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Cost'})
    }

    const cost=await Cost.findById(id)

    if(!cost){
       return res.status(404).json({error:'No such Cost'})
    }

    res.status(200).json(cost)
}


//create a new Cost
const createCost=async (req,res)=>{
    const {name,amount,project}=req.body

    try{
        const cost=await Cost.create({name,amount,project})
        res.status(200).json({cost})
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

   
    const cost= await Cost.findOneAndDelete({_id:id})
   
    if(!cost){
        return res.status(404).json({error:'No such Cost'})
     }
 
     res.status(200).json(cost)
}

//update a Cost
const updateCost=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Cost'})
    }

   
    const cost= await Cost.findOneAndUpdate({_id:id},{
        ...req.body
    })
   
    if(!cost){
        return res.status(404).json({error:'No such Cost'})
     }
 
     res.status(200).json(cost)
}


module.exports={
    getCosts,
    getCost,
    createCost,
    deleteCost,
    updateCost
}