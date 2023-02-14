
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/', (req, res) => {
    res.render('index', {
        user: {name: "Rana", age: "20"}});
  })
 app.listen(3001);