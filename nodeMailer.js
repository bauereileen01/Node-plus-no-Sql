var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxxxxxxxxx@gmail.com',
    pass: 'xxxxxxx'
  }
});

var mailOptions = {
  from: 'xxxxxxxxxxx1@yahoo.com',
  to: 'xxxxxxxxxxx1@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 