require("dotenv").config();
//var mailer = require("./mailer");
var nodemailer = require("nodemailer");
var emailTemplate = require("email-templates");
var sendMailTransport = require("nodemailer-smtp-transport");
var express = require("express");
var cors = require("cors");
var router = express.Router();
var path = require("path");
var app = express();

var port = process.env.PORT || '3002';


// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://rockwavetech.com');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
//   next();
// });

var corsOptions = {
  origin: 'https:rockwavetech.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json()); 

//serves our app. from the build directory for routing.
app.use(express.static(path.resolve(__dirname, "../client/build")));


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'brightmailgent',
         pass: '6B0F81@9'
     }
});

app.post("/api/send_email/", cors(corsOptions), function(req, res) {
    
  res.set("Content-Type", "application/json");

  const { email, telnumber, feedback } = req.body;
  
  var locals = { from: email, to: "mexcrew55@gmail.com", subject: "ENQUIRES", html: '<div style="background-color:#f0f0f0"><p style="color:black">' + feedback + '</div></p>' };

 transporter.sendMail(locals, function(err, info){
      if(err){
        console.log(err);
      } else {
        res.send('{ "message":"Sent your email" }');
        console.log({ email, telnumber, feedback });
        console.log(info);
      }
  })
  

  //res.send('{ "message":"Sent your email" }');

  console.log({ email, telnumber, feedback });

})


// All remaining requests return the React app, so it can handle routing.
{/*app.get("*", function(req, res) {
 // response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});*/}


app.listen(port, function() {
  console.error(`App is Runing on port ${port}`);
});

module.exports = router;



