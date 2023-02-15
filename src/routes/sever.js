
// var express = require('express');
// var app = express();
// var mysql = require("mysql");
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({type:'application/json'}));
// app.use(bodyParser.urlencoded({extended:true}));

// var connection = mysql.createConnection({
//     host:"localhost",
//     user:'root',
//     password:'',
//     database:'mercury'
// });


// var server = app.listen(1900,function(){
//     var host = server.address().address
//     var port =server.address().port
// });

// connection.connect(function(error){
//     if(error) console.log(error);
//     else console.log("connected");
// }
// );

// app.get('/license',function(req,res){
//     connection.query("select * from license",function(error,rows,fields){
//         if(error) console.log(error);
//         else{
//             console.log(rows);
//             res.send(rows);        }
//     })
// })
// module.exports={
//     connection
// }
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'mercury'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL with connection ID ' + connection.threadId);
});

module.exports={connection};