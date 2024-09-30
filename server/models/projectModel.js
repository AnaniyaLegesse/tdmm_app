const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    utilized_amount: {
        type: Number,
        default: 0
    },
    variance: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'Under Budget'
    },
}, { timestamps: true });

// Pre-save middleware to update variance and status before saving
projectSchema.pre('save', function (next) {
    this.variance = this.budget - this.utilized_amount;

    if (this.variance > 0) {
        this.status = 'Under Budget';
    } else if (this.variance === 0) {
        this.status = 'At Budget';
    } else {
        this.status = 'Over Budget';
    }

    next();
});

module.exports = mongoose.model('Project', projectSchema);
