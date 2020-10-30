const mongoose = require("mongoose")
const budgetModel = require("./models/personal_budget_schema")

let url = 'mongodb://localhost:27017/personal_budget';

mongoose.connect(url)
    .then(() => {
        console.log("Connected to the database")
    //     budgetModel.find({})
    //                 .then((data) => {
    //                     console.log(data)
    //                 })
    //                 .catch((connectionError) => {
    //                     console.log(connectionError)
    //                 })
     })
    .catch((connectionError) => {
        console.log(connectionError)
    })