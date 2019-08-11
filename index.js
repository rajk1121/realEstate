const mongoose = require('mongoose');
const express = require('express');
const app = require('./app.js');
const fs = require('fs');
const str = fs.readFileSync('./template/index.html').toString();
const propRouter = require('./Router/property');
const DB = "mongodb+srv://rajk1121:Rajat1121@cluster0-chamy.mongodb.net/test?retryWrites=true&w=majority";
const port = process.env.PORT || 80;
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(conn => {
    console.log('Connnected to DataBase');
});
app.use(express.static('public'));
app.use(express.json())
app.get('/home', (req, res) => {
    res.send(str);
})
app.use('/property-grid', propRouter);
app.listen(port);