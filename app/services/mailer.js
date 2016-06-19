var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

	var Mailer = function(email, name, message) {
	var auth = {
	  auth: {
	    api_key: process.env.MailGun,
	    domain: 'tekeste.me'
	  }
	}

	var nodemailerMailgun = nodemailer.createTransport(mg(auth));

	nodemailerMailgun.sendMail({
	  from: email,
	  to: 'iamtekeste@gmail.com', // An array if you have multiple recipients.
	  subject: `Message from $name`,
	  text: message
	}, function (err, info) {
	  if (err) {
	    return err;
	  }
	  else {
	    return info;
	  }
	});
}

module.exports = Mailer;