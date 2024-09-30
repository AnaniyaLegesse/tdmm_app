const Cost=require('../models/costModel')
const Project=require('../models/projectModel')
const mongoose= require('mongoose')


// Helper function to update utilized amount
const updateUtilizedAmount = async (projectId) => {
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            throw new Error('Project not found');
        }

        // Calculate the new utilized_amount
        const costs = await Cost.find({ project: projectId });
        project.utilized_amount = costs.reduce((total, cost) => total + cost.amount, 0);

        // Save the project (this triggers the pre-save hook to update variance and status)
        await project.save();

        console.log(`Updated utilized amount, variance, and status for project ${projectId}`);
    } catch (error) {
        console.error('Error updating utilized amount:', error);
    }
};


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
        const cost= await Cost.create({name,amount,project})

        // Update the utilized_amount for the project
        await updateUtilizedAmount(project);

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

     // Update the utilized_amount for the project after cost deletion
    await updateUtilizedAmount(cost.project);
 
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

      // Update the utilized_amount for the project after cost update
    await updateUtilizedAmount(cost.project);
 
     res.status(200).json(cost)
}



module.exports={
    getCosts,
    getCost,
    createCost,
    deleteCost,
    updateCost
}