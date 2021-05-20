var nodemailer = require("nodemailer");

const sendMail = (req, res) => {
  let subject = req.body.subject;
  let to = req.body.to;
  let text = req.body.text;
  let value = req.body.value;
  let price = req.body.price;
  let name = req.body.name;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "projectmailtestyc@gmail.com",
      pass: "youcode2020",
    },
  });

  var mailOptions = {
    to: to,
    subject: subject,
    text: `${text} ${value} of ${name} with $${price}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send("Mail send Successfully, Check your email");
    }
  });
};

module.exports = sendMail;
