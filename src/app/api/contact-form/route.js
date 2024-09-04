import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req) {
  try {
    const rawBody = await req.text();
    const data = JSON.parse(rawBody);
    const { firstName, lastName, email, subject, message } = data;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "trezrevner@icloud.com", // Change to your recipient
      from: "noreply@trevor-werner.dev", // Change to your verified sender
      subject: subject,
      html: `
         <strong>Message:</strong> ${message}<br>
         <strong>From:</strong> ${firstName} ${lastName}<br>
         <string>Email:</strong> ${email}
      `,
    };

    await sgMail.send(msg);
    console.log("Email sent");

    return NextResponse.json({
      message: "Message received and email sent",
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error.response ? error.response.body : error.message);
    
    return NextResponse.json({
      message: "Failed to send email",
      status: 500,
      error: error.message,
    });
  }
}
