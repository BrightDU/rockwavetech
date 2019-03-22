
var express = require("express");
var router = express.Router();
var mailer = require("./mailer");
var path = require("path");
var app = express();

var port = process.env.PORT || '3002';

app.use(express.json()); 

//serves our app. from the build directory for routing.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post('/api/send_email', function(req, res) {
    
  res.set("Content-Type", "application/json");

  const { email, telnumber, feedback } = req.body;
  
  var locals = { telnum: telnumber, feeds: feedback };
  
  mailer.sendMail(email, 'mexcrew55@gmail.com', 'Feedback!', 'feedback', locals).then(function () {
    res.status(200).send('{"message":"true"}');
  }, function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
  });
 

  //res.send('{ "message":"Sent your email" }');

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



app.listen(port, function() {
  console.error(`App is Runing on port ${port}`);
});

module.exports = router;
