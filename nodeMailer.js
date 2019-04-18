var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bauereileen02@gmail.com',
    pass: 'Thisgooga'
  }
});

var mailOptions = {
  from: 'bauereileen01@yahoo.com',
  to: 'mbauereileen01@yahoo.com',
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