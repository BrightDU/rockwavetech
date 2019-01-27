require("dotenv").config();
var express = require('express');
var router = express.Router();
var path = require("express");
var app = express();

app.use(express.json()); 

//serves our app. from the build directory for routing.
//app.use(express.static(path.resolve(__dirname, '../client/build')));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/send_email', function(req, res,) {
    
  res.set("Content-Type", "application/json");

  const { email, telnumber, feedback } = req.body;
  
  res.send('{ "message":"Sent your email" }');

  console.log({ email, telnumber, feedback });

})

module.exports = router;
