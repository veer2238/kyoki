const nodemailer = require("nodemailer");
const sendMail = async(req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'abraham.king@ethereal.email',
            pass: '1rYJwNzEuZaKwxwrZF'
        },
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <abraham.king@ethereal.email>', // sender address
        to: "veer2238rajput@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

    res.send('sending mail')
}

module.exports =sendMail;