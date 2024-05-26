import { NextResponse } from "next/server";
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");

export async function POST(req, { params }) {
   const rawBody = await req.text();
   const data = JSON.parse(rawBody);
   const { firstName, lastName, subject, message } = data;

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   const msg = {
      to: "trezrevner@icloud.com", // Change to your recipient
      from: "trevorwerner@hotmail.com", // Change to your verified sender
      subject: subject,
      html: `
         <strong>Message:</strong> ${message}<br>
         <strong>From:</strong> ${firstName} ${lastName}<br>
      `
   };
   sgMail
      .send(msg)
      .then(() => {
         console.log("Email sent");
      })
      .catch((error) => {
         console.error(error);
      });

   return NextResponse.json({
      message: "Message received",
      status: 200,
   });
}
