//Send Json in express Js
var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
app.get("/test",function(req,res){
  
res.json([{ code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
{ code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
{ code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
{ code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }]);
});
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})