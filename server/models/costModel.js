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

// Utility function to update utilized amount in the Project model
const updateUtilizedAmount = async function (projectId) {
    try {
        // Find all costs associated with the project
        const costs = await mongoose.model('Cost').find({ project: projectId });

        // If no costs are found, set utilized_amount to 0
        if (!costs || costs.length === 0) {
            await mongoose.model('Project').findByIdAndUpdate(projectId, { utilized_amount: 0 });
            return;
        }

        // Calculate the total utilized amount, ensuring each cost amount is a valid number
        const totalUtilized = costs.reduce((total, cost) => {
            // Ensure cost.amount is a valid number before adding to total
            const costAmount = isNaN(cost.amount) ? 0 : cost.amount;
            return total + costAmount;
        }, 0);

        // Update the project's utilized amount
        await mongoose.model('Project').findByIdAndUpdate(projectId, { utilized_amount: totalUtilized });
        
        console.log(`Updated utilized amount for project ${projectId}: ${totalUtilized}`);
    } catch (error) {
        console.error('Error updating utilized amount:', error);
    }
};

// Mongoose pre/post hooks to update utilized amount
costSchema.post('save', async function () {
    await updateUtilizedAmount(this.project);
});

costSchema.post('findOneAndUpdate', async function (doc) {
    if (doc) {
        await updateUtilizedAmount(doc.project);
    }
});

costSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await updateUtilizedAmount(doc.project);
    }
});


module.exports=mongoose.model('Cost',costSchema)