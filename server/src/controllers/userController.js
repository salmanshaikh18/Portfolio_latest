import nodemailer from "nodemailer";
import { User } from "../models/userModel.js";

export const sendMail = async (req, res) => {
  const { userName, userEmail, message } = req.body;
  try {
    if (!userName && !userEmail && !message) {
      res.status(400).json({
        messagse: "All the fields are required to send message!",
      });
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: userEmail,
      to: "salmanshaikh18786@gmail.com",
      subject: "Message From https://salmanshaikh.space Portfolio",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f9;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: full;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #4caf50;
                  color: #ffffff;
                  padding: 20px;
                  text-align: center;
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
              }
              .header h1 {
                  margin: 0;
                  font-size: 24px;
              }
              .content {
                  padding: 20px;
              }
              .content p {
                  font-size: 16px;
                  color: #333;
                  margin-bottom: 15px;
              }
              .info {
                  background-color: #f0f0f0;
                  padding: 15px;
                  border-radius: 5px;
                  margin-bottom: 20px;
              }
              .info p {
                  margin: 5px 0;
                  font-weight: bold;
              }
          </style>
      </head>
      <body>
      
          <div class="container">
              <div class="header">
                  <h1>New Message From https://salmanshaikh.space Portfolio</h1>
              </div>
              <div class="content">
                  <p>Hi, you have received a new message from your portfolio contact form!</p>
                  <div class="info">
                      <p><strong>Name:</strong> ${userName}</p>
                      <p><strong>Email:</strong> ${userEmail}</p>
                      <p><strong>Message:</strong> ${message}</p>
                  </div>
              </div>
          </div>
      </body>
      </html>
      `,
    });
    const savedData = await User.create({
        "userName": userName,
        "userEmail": userEmail,
        "message": message
    })
    return res.status(200).json({
        message: "Message sent successfully :)",
        messageInfo: info,
        savedData, savedData
    })
  } catch (error) {
    console.log("Error inside sendMail: ", error);
    res.status(500).json({
      message: "Something went wrong while sending mail!",
    });
  }
};
