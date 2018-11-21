const express = require('express');
const mailer = require('express-mailer');
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');

const emailSender = require('./.config.js');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/dist/')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}));
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
      user: emailSender.email, 
      pass: emailSender.pass
    }
  });



  app.post('/sendEmail', function (req, res) {
    console.log(req.body);
     
    // Setup email data.
    var mailOptions = {
      to: 'qais.gh11@gmail.com',
      subject: 'Email RealtorFinder',
      user: { 
        name: 'Samer',
        message: 'Welcome to RealtorFinder, its working!!!!'
      }
    }
   
    // Send email.
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



 