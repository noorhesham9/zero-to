const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
  try {
    // create a transporter
    var transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.emailforEmail,
        pass: process.env.passwordforemail,
      },
    });

    var mailOptions = {
      from: process.env.emailforEmail,
      to: process.env.emailforEmail,
      subject: option.subject,
      text: option.message,
    };

    await transporter.sendMail(mailOptions);
    return {
      status: "success",
      message: "Email sent successfully",
    };
  } catch (error) {
    return {
      status: "fail",
      message: "Failed to send email call the number in contact us section",
    };
  }
};
module.exports = sendEmail;
