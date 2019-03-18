require("dotenv").config();
var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();

var port = process.env.PORT || '3002';

app.use(express.json()); 

//serves our app. from the build directory for routing.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post('/api/send_email', function(req, res) {
    
  res.set("Content-Type", "application/json");

  const { email, telnumber, feedback } = req.body;
  
  res.send('{ "message":"Sent your email" }');

  console.log({ email, telnumber, feedback });

})


// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});


app.listen(port, function() {
  console.error(`App is Runing on port ${port}`);
});


module.exports = router;
