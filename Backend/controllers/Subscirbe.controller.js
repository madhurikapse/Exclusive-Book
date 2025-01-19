import { sendSubscriptionEmail } from "../mailutilis/emailServices.js";
import Subscriber from "../models/Subscriber.js";

export const subscribe = async (req, res) => {
  const { firstName, email } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ success: false, message: "First name and email are required." });
  }

  try {
    const newSubscriber = new Subscriber({ firstName, email });
    await newSubscriber.save();

    await sendSubscriptionEmail(email, firstName);

    return res.status(200).json({
      success: true,
      message: "Successfully subscribed! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Error during subscription:", error);
    return res.status(500).json({
      success: false,
      message: "Error subscribing. Please try again later.",
    });
  }
};
