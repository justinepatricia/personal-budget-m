//Budget API
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const budgetModel = require('./models/personal_budget_schema')
let url = 'mongodb://localhost:27017/personal_budget';

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('./old-code'));

app.get('/hello', (req, res) => {
    res.send('HelloWorld!');
});

app.get('/budget', (req, res) => {
    //res.json(budgett);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            budgetModel.find({})
                .then((data) => {
                    //console.log(data)
                    res.json(data);
                    mongoose.connection.close();
                })    
                .catch((connectionError) => {
                    console.log(connectionError);
                });
        })
        .catch((connectionError) => {
            console.log(connectionError)
        });
});


app.post('/addBudget', (req, res) => {
    console.log(req.body);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        var newBudget = {
            id: req.body.id,
            name: req.body.name,
            budget: req.body.budget,
            color: req.body.color
        };
        budgetModel.insertMany(newBudget)
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError)
            });
    })
        .catch((connectionError) => {
            console.log(connectionError)
        });
})

app.listen(port, () => {
    console.log('API served at http://localhost:${port}')
});
