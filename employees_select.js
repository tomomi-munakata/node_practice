const express = require('express');
const app = express();

exports.getData = (req,res) => {
    const mysql = require('mysql');
    // console.log(req);
    
    const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
    });

    con.connect((err) => {
        if (err) throw err;
        // console.log('Connected!');

        var id = req.params.name;
            con.query ("SELECT EmployeeID,EmployeeName,Email,Birthday FROM test.employees WHERE EmployeeID = ?",  [id],
            function (err, result, fields) {  
            if (err) throw err;
            res.send(result)
            });
        });
}