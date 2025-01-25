import nodemailer from "nodemailer";
import Subscriber from "../models/Subscriber.js";

// Configure the nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Secure port
  secure: true, // Use SSL
  auth: {
    user: "madhurikapse573@gmail.com", // Your Gmail address
    pass: "ifxo edxn mqei morc", // Your app-specific password
  },
});

// Function to send emails
const sendMail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: '"Ebook Project" <madhurikapse573@gmail.com>',
      to,
      subject,
      text,
      html,
    });
    console.log("Email sent successfully. Message ID:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Failed to send email. Please check your SMTP configuration.");
  }
};

// Subscription API handler
export const subscribe = async (req, res) => {
  const { firstName, email } = req.body;

  // Validate input
  if (!firstName || !email) {
    console.error("Validation failed. Missing first name or email.");
    return res.status(400).json({
      success: false,
      message: "First name and email are required.",
    });
  }

  try {
    console.log("Received subscription request:", req.body);

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      console.warn("Email already subscribed:", email);
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed.",
      });
    }

    // Save new subscriber to the database
    const newSubscriber = new Subscriber({ firstName, email });
    await newSubscriber.save();
    console.log("New subscriber successfully saved:", newSubscriber);

    // Email content
    const subject = "Welcome to Ebook Project";
    const text = `Hi ${firstName}, thank you for registering!`;
    const html = `<p>Hi ${firstName},</p><p>Thank you for registering!</p>`;

    // Send welcome email
    await sendMail(email, subject, text, html);

    return res.status(200).json({
      success: true,
      message: "Successfully subscribed! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error during subscription process:", error.message || error);
    return res.status(500).json({
      success: false,
      message: "Error subscribing. Please try again later.",
    });
  }
};
