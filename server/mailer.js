require("dotenv").config();
var nodemailer = require("nodemailer");
var emailTemplate = require("email-templates");
var sendMailTransport = require("nodemailer-smtp-transport");

//var Q = require('q');
/*
module.exports = {
    _template: null,
    _transport: null,

    init: function(config){
        //var d = Q.defer();
       
          new emailTemplate(config.emailTplsDir, function(err, template){
            var promise = new Promise((resolve, reject) => {
                if(err){
                  return reject(err);
                }

                this._template = template;
                this._transport = nodeMailer.createTransport(process.env.SMTP_USERNAME + ':' + process.env.SMTP_PASSWORD + '@smtp.gmail.com');
                  return resolve();
                });
                return promise;
            }.bind(this));
     
   },
         
    send: function (from, to, subject, text, html) {
        //var d = Q.defer();
        var params = {
          from: from, 
          to: to,
          subject: subject,
          text: text
        };
     
        if (html) {
          params.html = html;
        }
     
        this._transport.sendMail(params, function (err, res) {
          if (err) {
            console.error(err);
              reject(err);
          } else {
              resolve(res);
          }
        });
     
      // return d.promise;
    },

    sendMail: function (from, to, subject, tplName, locals) {
        //var d = Q.defer();
        var self = this;
        this.init({ emailTplsDir: "email-templates" }).then(function () {
          this._template(tplName, locals, function (err, html, text) {
            if (err) {
              console.error(err);
               reject(err);
            }
     
            self.send(from, to, subject, text, html)
              .then(function (res) {
                 resolve(res);
              });
          });
        }.bind(this));
     
        //return d.promise;
    }
     
};
*/

  






