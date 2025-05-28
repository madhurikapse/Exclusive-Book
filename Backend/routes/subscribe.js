import express from 'express';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const router = express.Router();

// Setup transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle subscriptions
router.post('/subscribe', async (req, res) => {
  const { firstName, email } = req.body;

  console.log('Received subscription request:', req.body);

  if (!firstName || !email) {
    console.log('Error: Missing fields');
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Enquiry Confirmation',
      text: `Hi ${firstName},\n\nThank you for contacting INTELLIPARTNERS! We will get back to you shortly.`,
    };

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Subscription Alert',
      text: `New subscriber:\n\nName: ${firstName}\nEmail: ${email}`,
    };

    console.log('Sending emails...');
    
    await transporter.sendMail(userMailOptions);
    console.log('User email sent successfully');

    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    res.json({ success: true, message: 'Subscription successful!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Email sending failed', error: error.message });
  }
});

export default router;
