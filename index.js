const express = require('express');
const mailer = require('express-mailer');
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');

const emailSender = require('./.config.js');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/dist/')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
// set the view folder to views
app.set('views', __dirname + '/views');
// set the view engine to pug
app.set('view engine', 'pug');
 


mailer.extend(app, {
    from: emailSender.email,
    host: 'smtp.gmail.com', 
    secureConnection: true, 
    port: 465, 
    transportMethod: 'SMTP',
    auth: {
      user: process.env.email || emailSender.email, 
      pass: process.env.pass || emailSender.pass
    }
  });



  app.post('/sendEmail', function (req, res) {

    //TODO: remove this checkout once the app goes live 
    // if(req.body.userEmail !== 'qais.gh11@gmail.com' || req.body.userEmail !== 'samaladhami@gmail.com') {
    //   return;
    // }

    var mailOptions = {
      to: req.body.to,
      subject: 'Email From RealtorFinder App',
      user: { 
        name: req.body.realtorName || 'there',
        message: req.body.message,
        phone: req.body.userPhone || 'Not Provided',
        email: req.body.userEmail || 'Not Provided'
      }
    }
    // // Send email
    app.mailer.send('email', mailOptions, function (err, message) {
      if (err) {
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      return res.send('Email has been sent!');
    });
   
  });


app.listen(port, () => console.log(`listening on port ${port}!`))



 