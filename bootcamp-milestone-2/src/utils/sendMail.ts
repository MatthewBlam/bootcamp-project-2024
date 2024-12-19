const nodemailer = require("nodemailer");

const USER_EMAIL = process.env.USER_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: USER_EMAIL,
        pass: APP_PASSWORD,
    },
});

export default async function sendMail(
    name: string,
    email: string,
    message: string
) {
    const options = {
        from: { name: "Personal Website Message", address: USER_EMAIL },
        to: process.env.EMAIL,
        subject: "New Message From Personal Website Contact",
        text: "",
        html: `<h2>From: ${name}, ${email}</h2><h4>${message}</h4>`,
    };
    try {
        await transporter.sendMail(options);
    } catch (err) {
        console.log(err);
    }
}
