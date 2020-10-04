const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const budgett = require("./server2");
// const budget = [
//     {
//         title: 'Eat out',
//         budget: 50
//     },
//     {
//         title: 'Rent',
//         budget: 390
//     },
//     {
//         title: 'Groceries',
//         budget: 100
//     },
//     {
//         title: 'Car Insurance',
//         budget: 70
//     },
//     {
//         title: 'Entertainment',
//         budget: 130
//     },
//     {
//         title: 'Shopping',
//         budget: 150
//     },
//     {
//         title: 'Subscriptions',
//         budget: 15
//     }
// ];

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budgett);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});
