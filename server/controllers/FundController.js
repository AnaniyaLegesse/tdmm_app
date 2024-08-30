const Fund=require('../models/fundModel')
const mongoose= require('mongoose')


//get all funds
const getFunds=async(req,res)=>{
    const funds= await Fund.find({}).sort({createdAt:-1})

    res.status(200).json(funds)
}


//get a single Fund
const getFund=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Fund'})
    }

    const fund=await Fund.find({_id:id})

    if(!fund){
       return res.status(404).json({error:'No such Fund'})
    }

    res.status(200).json(fund)
}


//create a new Fund
const createFund=async (req,res)=>{
    const {name,amount,fund_type}=req.body

    try{
        const fund=await Fund.create({name,amount,fund_type})
        res.status(200).json({fund})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a Fund
const deleteFund=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Fund'})
    }

   
    const fund= await Fund.findOneAndDelete({_id:id})
   
    if(!fund){
        return res.status(404).json({error:'No such Fund'})
     }
 
     res.status(200).json(fund)
}

//update a Fund
const updateFund=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Fund'})
    }

   
    const fund= await Fund.findOneAndUpdate({_id:id},{
        ...req.body
    })
   
    if(!fund){
        return res.status(404).json({error:'No such Fund'})
     }
 
     res.status(200).json(fund)
}


module.exports={
    getFunds,
    getFund,
    createFund,
    deleteFund,
    updateFund
}