const express = require('express')
const app = express();


exports.getData = (req,res) => {
    const mysql = require('mysql');
    
    const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
    });

    con.connect((err) => {
    if (err) throw err;
    // console.log('Connected!');
    
    const sql = "select EmployeeID,EmployeeName,Email,Birthday from test.employees"
    con.query(sql, function (err, result, fields) {  
    if (err) throw err;
    res.send(result)
    // console.log('connect');
     });
    });
}