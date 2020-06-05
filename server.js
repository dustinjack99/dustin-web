const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/email', (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(re.test(email));

    if (re.test(email) === false) {
      res.send('noEmail');
    } else if (re.test(email) === true) {
      res.send('valid');
    }
  }

  validEmail(email);
});

app.post('/send', (req, res) => {
  const { email, comment } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'dustin.guy.jackson@gmail.com',
      pass: 'lvyijfdzkpctmenv',
    },
  });

  transporter.sendMail({
    from: `<${email}>`, // sender address
    to: 'dustin.guy.jackson@gmail.com', // list of receivers
    subject: 'Feedback from dustin-jackson.com', // Subject line
    text: `${comment}`, // plain text body
    html: `<p>${comment}</p>`, // html body
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });
});

app.listen(PORT, function () {
  console.log('Server listening on: http: //localhost:' + PORT);
});
