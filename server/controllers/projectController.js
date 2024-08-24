const Project=require('../models/projectModel')
const mongoose= require('mongoose')


//get all projects
const getProjects=async(req,res)=>{
    const projects= await Project.find({})

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





//update a project


module.exports={
    getProjects,
    getProject,
    createProject
}