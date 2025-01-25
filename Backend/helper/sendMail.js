const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure:ture,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "ijmp khtp lwcm mqed",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendmail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'madhurikapse573@gmail.com',
    to,
    subject,
    text,
    html
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
module.exports={sendMail}
