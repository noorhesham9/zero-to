const express = require("express");
const Message = require("./Models/mesagesModel"); // Import the Message model
const cors = require("cors");
const sendEmail = require("./utils/email"); // Import the sendEmail function
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

let app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    withCredentials: true,
  })
);

app.get("/Api/v1", (req, res) => {
  res.json({ message: "Welcome to the API!" }); // Welcome message for any unmatched route
});
app.post("/Api/v1/sendMessgae", async (req, res, next) => {
  try {
    const messagesent = `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\nServices: ${req.body.services}\nMessage: ${req.body.message}`;

    const emailsent = await sendEmail({
      email: email,
      subject: "Message from user: " + name,
      message: messagesent,
    });

    console.log(emailsent);
    const { name, email, phoneNumber, services, message } = req.body; // Extract fields from request body
    if (!name || !email || !services || !message) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }
    const newMessage = await Message.create({
      name,
      email,
      phoneNumber,
      services,
      message,
    });

    res.status(201).json({
      status: "success",
      data: newMessage,
      message: "Message created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

app.all(/^\/Api\/v1(\/.*)?$/, (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `can't find ${req.originalUrl} on the server`,
  });
});

module.exports = app;
