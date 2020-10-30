const { Double } = require("mongodb")
const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
        upperCase: true
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
}, { collection: 'personal_budget_collection'})

module.exports = mongoose.model('personal_budget_collection', budgetSchema)