"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendMail(to, html) {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "himnngtwfiawbtmt@ethereal.email",
            pass: "pXg8BgJ3c4EjzQpbUH",
        },
    });
    let info = await transporter.sendMail({
        from: "Your liredd helper <helper@liredd.com>",
        to: to,
        subject: "Change password ✔",
        html: html,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
}
exports.sendMail = sendMail;
//# sourceMappingURL=sendEmail.js.map