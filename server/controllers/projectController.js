const Project=require('../models/projectModel')
const mongoose= require('mongoose')


//get all projects
const getProjects=async(req,res)=>{
    const projects= await Project.find({}).sort({createdAt:-1})

    res.status(200).json(projects)
}


//get a single project
const getProject=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such project'})
    }

    const project=await Project.findById(id)

    if(!project){
       return res.status(404).json({error:'No such project'})
    }

    res.status(200).json(project)
}


//create a new project
const createProject=async (req,res)=>{
    const {name,budget,utlized_amount,variance,status}=req.body

    try{
        const project=await Project.create({name,budget,utlized_amount,variance,status})
        res.status(200).json({project})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


//delete a project
const deleteProject=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such project'})
    }

   
    const project= await Project.findOneAndDelete({_id:id})
   
    if(!project){
        return res.status(404).json({error:'No such project'})
     }
 
     res.status(200).json(project)
}

//update a project
const updateProject=async (req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such project'})
    }

   
    const project= await Project.findOneAndUpdate({_id:id},{
        ...req.body
    })
   
    if(!project){
        return res.status(404).json({error:'No such project'})
     }
 
     res.status(200).json(project)
}


module.exports={
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}