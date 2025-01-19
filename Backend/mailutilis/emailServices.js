import nodemailer from "nodemailer";

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app-specific password
  },
});

// Function to send a subscription email
export const sendSubscriptionEmail = async (toEmail, firstName) => {
  const mailOptions = {
    from: '"Your Company" <yourcompany@example.com>',
    to: toEmail,
    subject: "Thank You for Subscribing!",
    text: `Hi ${firstName},\n\nThank you for subscribing to our newsletter. Stay tuned for updates and exclusive deals!\n\nBest Regards,\nYour Company`,
    html: `<h1>Thank You for Subscribing!</h1><p>Hi ${firstName},</p><p>Thank you for subscribing to our newsletter. Stay tuned for updates and exclusive deals!</p><p>Best Regards,<br>Your Company</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Subscription email sent successfully.");
  } catch (error) {
    console.error("Error sending subscription email:", error);
    throw error;
  }
};
