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
    origin: "https://zero-to.netlify.app",
    credentials: true,
    withCredentials: true,
  })
);

app.get("/Api/v1", (req, res) => {
  res.json({ message: "Welcome to the API!" }); // Welcome message for any unmatched route
});
app.post("/Api/v1/sendMessage", async (req, res, next) => {
  try {
    let { name, email, phoneNumber, message } = req.body; // Extract fields from request body

    if (!name || !email || !message) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid input type",
      });
    }
    if (name.length < 3 || name.length > 50) {
      return res.status(400).json({
        status: "fail",
        message: "Name must be between 3 and 50 characters",
      });
    }
    if (message.length < 10 || message.length > 500) {
      return res.status(400).json({
        status: "fail",
        message: "Message must be between 10 and 500 characters",
      });
    }
    if (
      phoneNumber &&
      phoneNumber !== "NOT PROVIDED" &&
      typeof phoneNumber !== "string"
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number must be a string",
      });
    }
    if (
      phoneNumber &&
      phoneNumber !== "NOT PROVIDED" &&
      phoneNumber.length > 15
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number must not exceed 15 characters",
      });
    }
    if (
      phoneNumber &&
      phoneNumber !== "NOT PROVIDED" &&
      phoneNumber.length < 10
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number must be at least 10 characters",
      });
    }
    if (!phoneNumber) {
      phoneNumber = "NOT PROVIDED";
    }

    const messagesent = `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\nMessage: ${req.body.message}`;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email format",
      });
    }
    const phoneRegex = /^(\+20|0)1[0-2,5]{1}[0-9]{8}$/;
    if (
      phoneNumber &&
      phoneNumber !== "NOT PROVIDED" &&
      !phoneRegex.test(phoneNumber)
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Egyptian phone number format",
      });
    }

    const emailsent = await sendEmail({
      email: email,
      subject: "Message from user: " + name,
      message: messagesent,
    });
    if (emailsent.status === "fail") {
      return res.status(500).json({
        status: "fail",
        message: emailsent.message,
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      phoneNumber,
      message,
    });

    res.status(201).json({
      status: "success",
      data: newMessage,
      message: "Message created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" }); // Welcome message for any unmatched route
});

app.all(/^\/Api\/v1(\/.*)?$/, (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `can't find ${req.originalUrl} on the server`,
  });
});

module.exports = app;
