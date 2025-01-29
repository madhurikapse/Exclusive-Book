import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path"; // For path joining
import AllRoutes from "../Backend/routes/index.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";
import searchRoutes from './routes/Searhroutes.js';
import AuthRoutes from "./routes/AuthRoutes.js";

// Load environment variables at the top
dotenv.config();

// Stripe Integration
import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Express app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000"], // Adjust the origin for production
}));
app.use(express.json());

// Route for basic test
app.get("/", (req, res) => {
  res.send("working.");
});

// API routes
app.use("/api/v1", AllRoutes);
app.use("/api/v1", subscribeRoutes);
app.use('/auth', AuthRoutes);
app.use("/api", searchRoutes);

// Payment Intent Creation Route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount should be in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment intent creation error:', error); // Log for debugging
    res.status(400).send({ error: error.message });
  }
});

// Serve static assets (adjust path for ES6)
const __dirname = path.resolve();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."))
  .catch((err) => {
    console.error("DB connection error:", err); // Log any DB connection issues
    process.exit(1); // Exit the process if DB connection fails
  });

// Generic error handler (for unhandled errors)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err); // Log the error
  res.status(500).send({ error: 'Internal server error' }); // Return a 500 error for unhandled errors
});

// Start server
app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});
