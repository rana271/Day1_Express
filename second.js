//Route in Sparate file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send(new Date());
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;