const express = require('express');
const app = express();
const employees = require('./employees');
const employees_select = require('./employees_select');


// console.log('server Start ...');

app.get('/',(req,res) => {
    // console.log('server app.get ...');
    employees.getData(req,res);
});

app.get('/:name?',(req,res) => {
    // console.log('server get ...');
    employees_select.getData(req,res);
});

app.listen(4000);
console.log('server liseten ...');