import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(to: string, html: string) {
  // let testAccount = await nodemailer.createTestAccount();
  // console.log("nodemailer test_account: ", testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "himnngtwfiawbtmt@ethereal.email", // generated ethereal user
      pass: "pXg8BgJ3c4EjzQpbUH", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "Your liredd helper <helper@liredd.com>", // sender address
    to: to, // list of receivers
    subject: "Change password ✔", // Subject line
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
