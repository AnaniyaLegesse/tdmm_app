const express=require('express')
const Project=require('../models/projectModel')

const router=express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"Get all projects"})
})

router.get('/:id', (req,res)=>{
    res.json({mssg:"Get a single project"})
})

router.post('/',async(req,res)=>{
    const {name,budget,utlized_amount,variance,status}=req.body
    try{
        const project=await Project.create({name,budget,utlized_amount,variance,status})
        res.status(200).json({project})
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
 router.delete('/:id', (req,res)=>{
    res.json({mssg:"delete a project"})
 })
 router.patch('/:id', (req,res)=>{
    res.json({mssg:"update a project"})
 })

module.exports = router